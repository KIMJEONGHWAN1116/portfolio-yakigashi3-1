import './Shoptop.css';
import SHOPKV from './sections/SHOPKV.jsx';
import ProductList from './sections/ProductList.jsx';
import Kodawari from './sections/Kodawari.jsx';
import Reviews from './sections/Reviews.jsx';
import News from './sections/News.jsx';
import BackToTop from './BackToTop.jsx';

export default function Shoptop({ keyword = '' }) {
    return (
        <>
            <div className="Shoptop">
                <SHOPKV />
                <section id="products">
                    <ProductList keyword={keyword} />
                </section>

                <section id="kodawari">
                    <Kodawari />
                </section>

                <section id="reviews">
                    <Reviews />
                </section>

                <section id="news">
                    <News />
                </section>
                <BackToTop />
            </div>
        </>
    );
}
