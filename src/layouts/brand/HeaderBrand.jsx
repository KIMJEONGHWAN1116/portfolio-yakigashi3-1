import { useState, useEffect } from 'react'
import './HeaderBrand.css'

export default function HeaderBrand() {
  const [sidenav, setSidenav] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setSidenav(window.scrollY > 1)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header>
        <div className="brandheaderwrap">
          <h1 className="logo">
            <a href="/">
              <img src="/logo.png" alt="焼き菓子３＆１" />
            </a>
          </h1>

          <div className="lemon">
            <img src="/img/lemon.png" alt="" aria-hidden="true" />
          </div>
          <div className="linedeco" aria-hidden="true"></div>

       
          <nav className="navbar" aria-label="メインナビゲーション">
            <ul>
              <li>
                <a href="#scene">
                  <img className="navlemon" src="/lemon1.png" alt="ひと息の瞬間" />
                  <div>
                    ひと息の瞬間<br />
                    <span>Scene</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#story">
                  <img className="navlemon" src="/lemon2.png" alt="やさしさのはじまり" />
                  <div>
                    やさしさのはじまり<br />
                    <span>Story</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#harvest">
                  <img className="navlemon" src="/lemon3.png" alt="素材からの贈り物" />
                  <div>
                    素材からの贈り物<br />
                    <span>Harvest</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#products">
                  <img className="navlemon" src="/lemon4.png" alt="商品紹介" />
                  <div>
                    商品紹介<br />
                    <span>Products</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>

    
          <button
            type="button"
            className={`hamburger ${menuOpen ? 'is-open' : ''}`}
            aria-label="メニュー"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>

         
          <div
            className={`mobileMenuOverlay ${menuOpen ? 'show' : ''}`}
            onClick={closeMenu}
          />
          <nav
            id="mobileMenu"
            className={`mobileMenu ${menuOpen ? 'show' : ''}`}
            aria-label="モバイルナビゲーション"
          >
            <a href="#scene" onClick={closeMenu} className="mobileMenuItem">
              <img src="/lemon1.png" alt="" aria-hidden="true" className="mobileMenuIcon" />
              <span>ひと息の瞬間</span>
            </a>

            <a href="#story" onClick={closeMenu} className="mobileMenuItem">
              <img src="/lemon2.png" alt="" aria-hidden="true" className="mobileMenuIcon" />
              <span>やさしさのはじまり</span>
            </a>

            <a href="#harvest" onClick={closeMenu} className="mobileMenuItem">
              <img src="/lemon3.png" alt="" aria-hidden="true" className="mobileMenuIcon" />
              <span>素材からの贈り物</span>
            </a>

            <a href="#products" onClick={closeMenu} className="mobileMenuItem">
              <img src="/lemon4.png" alt="" aria-hidden="true" className="mobileMenuIcon" />
              <span>商品紹介</span>
            </a>

            <a
              href="/shop"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mobileMenuItem mobileShop"
            >
              <span>オンラインショップ</span>
            </a>
          </nav>
        </div>
      </header>

      <div className={`side-nav ${sidenav ? 'show' : ''}`}>
        <a href="#scene" className="sidemenu">
          <img src="/lemon1.png" alt="ひと息の瞬間" />
          <span>ひと息の瞬間</span>
        </a>
        <a href="#story" className="sidemenu">
          <img src="/lemon2.png" alt="やさしさのはじまり" />
          <span>やさしさのはじまり</span>
        </a>
        <a href="#harvest" className="sidemenu">
          <img src="/lemon3.png" alt="素材からの贈り物" />
          <span>素材からの贈り物</span>
        </a>
        <a href="#products" className="sidemenu">
          <img src="/lemon4.png" alt="商品紹介" />
          <span>商品紹介</span>
        </a>
        <button className="topbtn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Top
        </button>
      </div>

      <a href="/shop" target="_blank" rel="noopener noreferrer" className="onlineshopbutton">
        <img src="/onlineshopbutton.svg" alt="onlineshop" />
      </a>
    </>
  )
}