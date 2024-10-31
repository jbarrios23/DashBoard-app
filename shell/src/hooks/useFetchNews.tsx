import { useState, useEffect } from "react";
import { fetchTopNews } from "../service/newsService";

// Define the type for category if needed, for example:
type Category = string;
type Article = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
};

const useFetchNews = (category: Category) => {
    const [news, setNews] = useState<Article[]>([]);
    useEffect(() => {
        fetchTopNews(category).then(setNews);
    }, [category]);
    return news;
};

export default useFetchNews;
