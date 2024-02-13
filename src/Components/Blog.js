// import React, { useState, useEffect } from 'react';
// import './Blog.css'; 

// const Blog = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchFitnessNews = async () => {
//       try {
//         const response = await fetch('https://newsapi.org/v2/everything?q=fitness%20nutrition&apiKey=43c4285755154425b490a1adfe3a38a5');
//         const data = await response.json();
//         setArticles(data.articles);
//       } catch (error) {
//         console.error('Error fetching fitness news:', error);
//       }
//     };

//     fetchFitnessNews();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Fitness and Nutritional Health News</h1>
//       <div className="card-container">
//         {articles.map((article, index) => (
//           <div className="card" key={index}>
//             <h2>{article.title}</h2>
//             <p>{article.description}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchFitnessNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=fitness%20nutrition&apiKey=43c4285755154425b490a1adfe3a38a5');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching fitness news:', error);
      }
    };

    fetchFitnessNews();
  }, []);

  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: '#222', color: '#fff', maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Fitness and Nutritional Health News</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {articles.map((article, index) => (
          <div key={index} style={{ flex: '1 1 calc(33% - 20px)', margin: '10px 5px', backgroundColor: '#333', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>{article.title}</h2>
            <p style={{ fontSize: '14px', color: '#ccc', marginBottom: '15px' }}>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', color: '#007bff', textDecoration: 'none' }}>Read More</a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blog;
