import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css';
import AddCartModal from '../AddCartModal';



export default function ProductInfo({ product, onAddToCart }) {
    console.log('ADD CART PRODUCT ', product);

    const [qty, setQty] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const increase = () => setQty(q => q + 1);
    const decrease = () => setQty(q => Math.max(1, q - 1));

    const descriptionText = Array.isArray(product.description)
        ? product.description.flatMap(line => line.split('\n'))
        : product.description.split('\n');

    const handleAddCart = () => {
        onAddToCart(
            {
                slug: product.slug,
                title: product.title,
                subtitle: product.subtitle,
                price: product.price,
                image: product.images[0],
            },
            qty
        );

        setShowModal(true); // ⭐ 모달 열기
    };

    return (
        <>
            <div className="product-info">
                {/* 타이틀 */}
                <h1 className="product-title">
                    {product.title}<br />
                    <span className="product-subtitle">{product.subtitle}</span>
                </h1>

                {/* 가격 */}
                <p className="product-price">{product.price}</p>

                {/* 설명 */}
                <p className="product-description">
                    {descriptionText.map((line, i) => (
                        <span key={i}>
                            {line}<br />
                        </span>
                    ))}
                </p>

                {/* 수량 + 카트 */}
                <div className='cartflex'>
                    <div className="qty-wrap">
                        <span className="qty-label">数量</span>
                        <div className="qty-control">
                            <button onClick={decrease}>−</button>
                            <span className="qty">{qty}</span>
                            <button onClick={increase}>＋</button>
                        </div>
                    </div>

                    <div className='addcart'>
                        <button
                            className="add-cart-btn"
                            onClick={handleAddCart}
                        >
                            カートに入れる
                        </button>
                    </div>
                </div>

                <div className='kikenn'>
                    <p>賞味期限：生産日から20日前後</p>
                </div>
            </div>

            {showModal && (
                <AddCartModal
                    onClose={() => setShowModal(false)}
                    onGoCart={() => navigate('/cart')}
                />
            )}
        </>
    );
}
