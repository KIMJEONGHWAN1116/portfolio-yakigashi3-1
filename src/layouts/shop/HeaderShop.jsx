import { useEffect, useState } from 'react';
import './HeaderShop.css';
import { Link } from 'react-router-dom';

export default function HeaderShop({
  cartItems = [],
  onSearch,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (onSearch) {
      onSearch(keyword);
    }
  }, [keyword, onSearch]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`shop-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="shopheaderwrap">
        <div className="headergrid">

          <div className="shopNavWrap">
            <nav className={`shopNav ${isMenuOpen ? 'open' : ''}`}>
              <a href="#products" onClick={closeMenu}>商品一覧</a>
              <a href="#kodawari" onClick={closeMenu}>こだわりの素材</a>
              <a href="#reviews" onClick={closeMenu}>お客様の声</a>
              <a href="#news" onClick={closeMenu}>新着情報</a>
            </nav>
          </div>

          <h1 className="shoplogo">
            <Link to="/shop">
              <img
                src="/shoplogo.svg"
                alt="焼き菓子３＆１"
                className="shoplogoimg"
              />
            </Link>
          </h1>

          <div className="kennca">

       
            <div className="searchWrap">
              <img
                src="/kennsaku.svg"
                alt="検索"
                className="searchIcon"
                onClick={() => setIsSearchOpen(o => !o)}
              />

              {isSearchOpen && (
                <input
                  type="text"
                  className="searchInput"
                  placeholder="商品名で検索"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              )}
            </div>

            <div className="cartWrap">
              <Link to="/cart">
                <img src="/cart.svg" alt="カート" />
              </Link>
              {cartCount > 0 && (
                <span className="badge">{cartCount}</span>
              )}
            </div>

            <button
              className={`shopHamburger ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(o => !o)}
              aria-label="menu"
            >
              <span />
              <span />
              <span />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
