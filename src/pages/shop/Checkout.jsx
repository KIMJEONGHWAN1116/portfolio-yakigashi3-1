import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

export default function Checkout({ cartItems, onClear }) {
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
        (sum, item) => sum + getPriceNumber(item.price) * item.qty,
        0
    );

    const [form, setForm] = useState({
        name: '',
        postal: '',
        address: '',
        email: '',
    });

    const isValid = Object.values(form).every(v => v.trim() !== '');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (!isValid || cartItems.length === 0) return;

        onClear();

        navigate('/thankyou', {
            state: {
                order: {
                    customer: form,
                    items: cartItems,
                    total: totalPrice,
                },
            },
        });
    };


    return (
        <section className="checkout-page">
            <h2 className="checkout-title">
                Checkout<br />
                <span>ご購入手続き</span>
            </h2>

            <div className="checkout-grid">
                <div className="checkout-form">
                    <h3>お届け先情報</h3>

                    <label>
                        お名前
                        <input
                            name="name"
                            placeholder="山田 花子"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        郵便番号
                        <input
                            name="postal"
                            placeholder="123-4567"
                            value={form.postal}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        住所
                        <input
                            name="address"
                            placeholder="東京都〇〇区〇〇町1-2-3"
                            value={form.address}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        メールアドレス
                        <input
                            name="email"
                            placeholder="example@mail.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="checkout-summary">
                    <h3>ご注文内容</h3>

                    <ul className="checkout-items">
                        {cartItems.map(item => (
                            <li key={item.slug}>
                                <span>{item.title}</span>
                                <span>× {item.qty}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="summary-total">
                        合計 ¥{totalPrice}
                    </div>

                    <button
                        className={`submit-btn ${!isValid ? 'disabled' : ''}`}
                        disabled={!isValid}
                        onClick={handleSubmit}
                    >
                        注文を確定する
                    </button>
                </div>
            </div>
        </section>
    );
}
