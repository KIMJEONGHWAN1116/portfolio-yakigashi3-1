import './FooterShop.css';
import { Link } from 'react-router-dom';

import instagram from '../../assets/images/instagram.png';

export default function FooterShop() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-logo">
          <Link to="/shop">
            <img src='/public/logo.png' alt="焼き菓子 3&1 ロゴ" />
          </Link>
        </div>

        <nav className="footer-nav">
          <ul>
            <li><a href="#products">商品一覧</a></li>
            <li><a href="#kodawari">こだわりの素材</a></li>
            <li><a href="#reviews">お客様の声</a></li>
            <li><a href="#news">新着情報</a></li>
          </ul>
        </nav>

        <div className="footer-sns">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </div>

      </div>

      <p className="footer-copy">
        © 2026 焼菓子３＆１オンラインショップ. All Rights Reserved.
      </p>
    </footer>
  );
}
