import { useState } from "react";
import { newsList } from "../../../data/newsData";
import NewsModal from "./NewsModal";
import "./News.css";

export default function News() {
    const [activeNews, setActiveNews] = useState(null);

    return (
        <section className="news">
            <h2 className="news__title">
                News
                <span>新着情報</span>
            </h2>

            <ul className="news__list">
                {newsList.map(item => (
                    <li
                        key={item.id}
                        className="news__item"
                        onClick={() => setActiveNews(item)}
                    >
                        <div className="news__left">
                            <time className="news__date">{item.date}</time>
                            <span className="news__tag">{item.tag}</span>
                        </div>

                        <p className="news__text">{item.title}</p>

                        <span className="news__arrow">→</span>
                    </li>
                ))}
            </ul>

            {activeNews && (
                <NewsModal
                    news={activeNews}
                    onClose={() => setActiveNews(null)}
                />
            )}
        </section>
    );
}
