import React from "react";

interface NewsCardProps {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

const NewsCard: React.FC<NewsCardProps> =
    ({ title, description, url, urlToImage }) =>
    (<div className="news-card">
        <img src={urlToImage} alt={title} />
        <h2>{title}</h2> <p>{description}</p>
        <a href={url}>Read more</a> </div>);


export default NewsCard;
