import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Navbar.css'
import cartlogo from '../Components/assets/cartlogo.png'
import profilelogo from '../Components/assets/profilelogo.png'
import applogo from '../Components/assets/applogo.png'
import { auth, db } from '../FirebaseConfigs/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    // console.log(userlogged.email)
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        // console.log(q);
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    };
                    getUsers();
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user
    }
    const loggeduser = GetCurrentUser();
    // if (loggeduser) { console.log(loggeduser[0]) }



    const navigate = useNavigate()
    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login")
        })
    }




    const [cartdata, setcartdata] = useState([]);
    if (loggeduser) {
        const getcartdata = async () => {
            const cartArray = [];
            const path = `cart-${loggeduser[0].uid}`
            // console.log(path)
            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, " => ", doc.data());
                    cartArray.push({ ...doc.data(), id: doc.id })
                });
                setcartdata(cartArray)
                // console.log('done')
            }).catch('Error error error')

        }
        getcartdata()
    }

    // console.log(cartdata.length)

    return (
        <div>
            <div className='navbar'>
                <div className="LeftContainer">
                    {/* <img src={applogo} /> */}
                    <h3>Sehat Sang</h3>
                </div>
                <div className="RightsContainer">
                    {!loggeduser && <nav>
                        <Link to='/' ><button>Home</button></Link>
                        <Link to='/signup'><button>Register</button></Link>
                        <Link to='/login'><button>Login</button></ Link >
                        <Link to='/ourtrainers'><button>Our Trainers</button></ Link >
                        <Link to='/blogs' ><button>Blogs</button></Link>
                        <Link to='/about' ><button>About</button></Link>
                        <Link to='/contactus' ><button>Contact Us</button></Link>
                        <div className='cart-btn'>

                            <img src={cartlogo} alt="no img" />
                            <span className='cart-icon-css'>0</span>
                        </div>
                        <Link to="/userprofile">
                            <img src={profilelogo} className='profile-icon' />
                        </Link>
                    </nav >}


                    {loggeduser && <nav>
                        <Link to='/' ><button>Home</button></Link>
                        <Link to='/ourtrainers'><button>Our Trainers</button></ Link >
                        <Link to='/blogs' ><button>Blogs</button></Link>
                        <Link to='/about' ><button>About</button></Link>
                        <Link to='/contactus' ><button>Contact Us</button></Link>
                        <Link to='/sellproduct'><button>Sell</button></Link>
                        {/* <Link to='/signup'><button>Register</button></Link> */}
                        {/* <Link to='/login'><button>Login</button></ Link > */}

                        <div className='cart-btn'>
                            <Link to='/cartdata'><img src={cartlogo} alt="no img" /></Link>
                            <button className='cart-icon-css'>{cartdata.length}</button>
                        </div>

                        <Link to="/userprofile">
                            <img src={profilelogo} className='profile-icon' />
                        </Link>
                        <button className='logout-btn' onClick={handleLogout}>Logout</button>

                    </nav >}
                </div>
            </div>
            <div className='product-types'>
                <a href="/product-type/allcourses"><button>All Courses</button></a>
                <a href="/product-type/popular"><button>Most Popular</button></a>
                <a href="/product-type/trending"><button>Trending</button></a>
                <a href="/product-type/shop"><button>Shop</button></a>
            </div>
        </div>
    )
}

export default Navbar