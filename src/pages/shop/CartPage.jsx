import './CartPage.css';
import { useNavigate } from 'react-router-dom';

export default function CartPage({
    cartItems,
    onIncrease,
    onDecrease,
    onRemove,
}) {
    const navigate = useNavigate();

    const getPriceNumber = (price) => {
        if (typeof price === 'number') return price;

        if (typeof price === 'string') {
            const afterYen = price.split('¥')[1];
            return afterYen ? Number(afterYen.match(/\d+/)[0]) : 0;
        }

        return 0;
    };

    const totalPrice = cartItems.reduce(
        (sum, item) =>
            sum + getPriceNumber(item.price) * item.qty,
        0
    );

    if (cartItems.length === 0) {
        return (
            <section className="cart-page">
                <h2 className="cart-title">
                    Cart<br />
                    <span>カート</span>
                </h2>
                <p className="cart-empty">
                    カートに商品がありません
                </p>
            </section>
        );
    }

    return (
        <section className="cart-page">
            <h2 className="cart-title">
                Cart<br />
                <span>カート</span>
            </h2>

            <ul className="cart-list">
                {cartItems.map(item => (
                    <li className="cart-row" key={item.slug}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="cart-thumb"
                        />

                        <div className="cart-info">
                            <p className="cart-name">{item.title}</p>
                            <p className="cart-subname">{item.subtitle}</p>
                            <p className="cart-price">{item.price}</p>
                        </div>

                        <div className="cart-qty">
                            <button onClick={() => onDecrease(item.slug)}>−</button>
                            <span>{item.qty}</span>
                            <button onClick={() => onIncrease(item.slug)}>＋</button>
                        </div>

                        <p className="cart-subtotal">
                            小計 ¥{getPriceNumber(item.price) * item.qty}
                        </p>

                        <button
                            className="cart-remove"
                            onClick={() => onRemove(item.slug)}
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>


            <div className="cart-summary">
                <div className="summary-row">
                    <span>合計</span>
                    <span className="summary-total">
                        ¥{totalPrice}
                    </span>
                </div>


                <button
                    className="checkout-btn"
                    onClick={() =>
                        navigate('/checkout', {
                            state: {
                                cartItems,
                                totalPrice,
                            },
                        })
                    }
                >
                    購入手続きへ
                </button>
            </div>
        </section>
    );
}
