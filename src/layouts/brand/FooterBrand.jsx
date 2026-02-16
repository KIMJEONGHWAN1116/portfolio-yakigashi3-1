import './FooterBrand.css';

export default function FooterBrand() {
    return (
        <footer className="brand-footer">
            <div className="footer-inner">

                <div className="footer-logo">
                    <a href="/">
                        <img src="/logo.png" alt="焼き菓子３＆１" />
                    </a>
                    <p>
                        忙しい日々の中でも、<br />
                        そっと心がほどけるような<br />
                        やさしい甘さを。
                    </p>
                </div>

             
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#scene">ひと息の瞬間</a></li>
                        <li><a href="#story">やさしさのはじまり</a></li>
                        <li><a href="#harvest">素材からの贈り物</a></li>
                        <li><a href="#products">商品紹介</a></li>
                    </ul>
                </nav>

            </div>

            <div className="footer-bottom">
                <small>© 2026 焼菓子３＆１オンラインショップ. All Rights Reserved.</small>
            </div>
        </footer>
    );
}
