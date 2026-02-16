import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { giftDetails } from '../../../data/giftDetails.js';
import './GiftDetail.css';
import product1 from '../../../assets/images/product1.svg';

import ReviewSection from './productfolder/ReviewSection';
import RecommendProducts from './productfolder/RecommendProducts';
import AddCartModal from './AddCartModal';

export default function GiftDetail({ onAddToCart }) {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [qty, setQty] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const increase = () => setQty(q => q + 1);
    const decrease = () => setQty(q => Math.max(1, q - 1));

    const handleAddCart = () => {
        onAddToCart({
            ...product,
            qty,
        });
        setShowModal(true);
    };

    const product = giftDetails.find(
        (item) => item.slug === slug
    );

    if (!product) return <p>商品が見つかりません</p>;

    return (
        <>
            <div className="product-detail">
                <div className="product-main">
                    <div className="flexside">
                        <div className="GiftDetailgrid">
                            <img
                                src={product1}
                                alt="giftbox"
                                className="GiftDetailgridimg"
                            />

                            <h3 className="GiftDetailboxh3">ギフトボックス</h3>

                            <p className="GiftDetailboxp">
                                開けた瞬間、ふわっと広がる焼き菓子の香り。<br />
                                ひとつひとつに、“おつかれさま”や“ありがとう”の気持ちを込めました。<br />
                                自分へのご褒美にも、大切な人への贈り物にもぴったりの詰め合わせです。<br />
                                どんな日常にも、ひと息つける時間を届けたい。<br />
                                そんな想いから生まれたギフトボックスです。
                            </p>

                            <span className="giftboxspan">
                                価格：¥3,500（税込）
                            </span>
                        </div>

                        <div className="cartflex">
                            <div className="qty-wrap">
                                <span className="qty-label">数量</span>
                                <div className="qty-control">
                                    <button onClick={decrease}>−</button>
                                    <span className="qty">{qty}</span>
                                    <button onClick={increase}>＋</button>
                                </div>
                            </div>

                            <div className="addcart">
                                <button
                                    className="add-cart-btn"
                                    onClick={handleAddCart}
                                >
                                    カートに入れる
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* モーダル */}
                {showModal && (
                    <AddCartModal
                        onClose={() => setShowModal(false)}
                        onGoCart={() => navigate('/cart')}
                    />
                )}

                <div className="gift-fixed-text">
                    <h3>内容について</h3>

                    <ul>
                        <li>・瀬戸内レモンケーキ</li>
                        <li>・チョコナッツケーキ</li>
                        <li>・レモンクッキー</li>
                        <li>・ブールドネージュ</li>
                    </ul>

                    <p className="gift-note">
                        ※ 内容は季節により変更になる場合があります
                    </p>
                </div>
            </div>

            {/* 리뷰 */}
            <ReviewSection
                key={product.slug}
                productId={product.slug}
            />

            {/* 추천상품 */}
            <RecommendProducts
                currentProductKey={product.productKey}
            />
        </>
    );
}
