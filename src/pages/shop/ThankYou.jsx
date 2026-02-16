import { useLocation, useNavigate } from 'react-router-dom';
import './ThankYou.css';

export default function ThankYou() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const order = state?.order;

  if (!order) {
    return (
      <section className="thankyou-page">
        <h2>注文情報がありません</h2>
        <button
          className="back-btn"
          onClick={() => navigate('/shop')}
        >
          オンラインショップへ戻る
        </button>
      </section>
    );
  }

  const { customer, items, total } = order;

  return (
    <section className="thankyou-page">
      <div className="thankyou-box">
        <h2 className="thankyou-title">
          ご注文ありがとうございます
        </h2>

        <p className="thankyou-text">
          ご注文を承りました。<br />
          商品の発送まで今しばらくお待ちください。
        </p>

        <div className="order-section">
          <h3>ご注文内容</h3>
          <ul>
            {items.map(item => (
              <li key={item.slug}>
                <span>{item.title}</span>
                <span>× {item.qty}</span>
              </li>
            ))}
          </ul>

          <p className="order-total">
            合計 ¥{total}
          </p>
        </div>

        <div className="order-section">
          <h3>お届け先</h3>
          <p>{customer.name}</p>
          <p>{customer.address}</p>
          <p>{customer.email}</p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate('/shop')}
        >
          オンラインショップへ戻る
        </button>
      </div>
    </section>
  );
}
