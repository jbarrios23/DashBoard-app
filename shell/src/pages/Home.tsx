import React from 'react'
import '../App.css';
import useFechNews from '../hooks/useFetchNews' 
import NewsCard from '../components/NewsCard';

const Home=()=>{

    const news = useFechNews("general");
    return(
        <div className="home-container">
        <h1>Noticias Recientes</h1>
        <div className="news-container">
            {news.map((article) => (                    
                <NewsCard key={article.url} {...article} />
            ))}
        </div>
       
    </div>
    );
}

export default Home;