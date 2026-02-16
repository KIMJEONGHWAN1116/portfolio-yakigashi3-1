import { useState, useEffect } from 'react';

/* =====================
   설정
===================== */
const REVIEWS_PER_PAGE = 4;

export default function ReviewSection({ productId }) {
    /* =====================
       localStorage key (상품별)
    ===================== */
    const storageKey = `reviews-${productId}`;

    /* =====================
       state
    ===================== */
    const [reviews, setReviews] = useState(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : [];
    });

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(reviews));
    }, [reviews, storageKey]);


    const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

    const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
    const currentReviews = reviews.slice(
        startIndex,
        startIndex + REVIEWS_PER_PAGE
    );


    const handleSubmit = () => {
        if (!text || rating === 0) return;

        const newReview = {
            id: Date.now(),
            name: name || '匿名',
            rating,
            text,
            date: new Date().toLocaleDateString('ja-JP'),
        };

        setReviews((prev) => [newReview, ...prev]);

        setName('');
        setText('');
        setRating(0);
        setHoverRating(0);
        setCurrentPage(1);
    };


    const handleDelete = (id) => {
        setReviews((prev) => {
            const updated = prev.filter((r) => r.id !== id);

            const newTotalPages = Math.ceil(
                updated.length / REVIEWS_PER_PAGE
            );

            if (currentPage > newTotalPages) {
                setCurrentPage(newTotalPages || 1);
            }

            return updated;
        });
    };

    return (
        <section className="review">
            <h3>レビュー</h3>

            {/* ⭐ 별점 선택 */}
            <div className="star-input">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={
                            star <= (hoverRating || rating)
                                ? 'star active'
                                : 'star'
                        }
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
                        ★
                    </span>
                ))}
            </div>

            <p className="rating-text">
                {rating === 0
                    ? '星を選択してください'
                    : `評価：${rating} / 5`}
            </p>

            {/* 📝 입력 */}
            <div className="review-form">
                <input
                    type="text"
                    placeholder="お名前（任意）"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <textarea
                    placeholder="レビューを書いてください"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <button type="button" onClick={handleSubmit}>
                    投稿する
                </button>
            </div>

            {/* 📋 리뷰 목록 */}
            <ul className="review-list">
                {currentReviews.map((review) => (
                    <li key={review.id} className="review-item">
                        <div className="review-head">
                            <span className="review-name">{review.name}</span>
                            <span className="review-date">{review.date}</span>
                        </div>

                        <div className="star-display">
                            {'★'.repeat(review.rating || 0)}
                            {'☆'.repeat(5 - (review.rating || 0))}
                        </div>

                        <p>{review.text}</p>

                        <button
                            className="review-delete"
                            onClick={() => handleDelete(review.id)}
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>

            {totalPages > 1 && (
                <div className="review-pagination">
                    <button
                        onClick={() =>
                            setCurrentPage((p) => Math.max(p - 1, 1))
                        }
                        disabled={currentPage === 1}
                    >
                        前へ
                    </button>

                    <span>
                        {currentPage} / {totalPages}
                    </span>

                    <button
                        onClick={() =>
                            setCurrentPage((p) =>
                                Math.min(p + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                    >
                        次へ
                    </button>
                </div>
            )}
        </section>
    );
}
