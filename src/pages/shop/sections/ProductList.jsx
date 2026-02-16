import './ProductList.css';
import { products } from '../../../data/products';
import ProductCard from './ProductCard';
import product1 from '../../../assets/images/product1.svg';
import { Link } from 'react-router-dom';

export default function ProductList({ keyword = '' }) {

    const filteredProducts = products.filter(item => {
        const key = keyword.toLowerCase();

        const title = (item.title || '').toLowerCase();
        const subtitle = (item.subtitle || '').toLowerCase();

        // description이 배열인 경우를 대비
        const description = Array.isArray(item.description)
            ? item.description.join('').toLowerCase()
            : (item.description || '').toLowerCase();

        return (
            title.includes(key) ||
            subtitle.includes(key) ||
            description.includes(key)
        );
    });

    return (
        <>
            <section className="productlist">
                <h2>
                    Products<br />
                    <span>商品一覧</span>
                </h2>

                <div className="product">
                    {/* 🎁 ギフトボックス紹介 */}
                    <Link to="/shop/gift/gift-box" className="gift-grid">
                    <div className="giftgrid">
                        <img
                            src={product1}
                            alt="giftbox"
                            className="giftgridimg"
                        />

                        <h3 className="giftboxh3">ギフトボックス</h3>

                        <p className="giftboxp">
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
                    </Link>

                    {/* 🧁 商品一覧 */}
                    <div className="productlist16">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(item => (
                                <ProductCard
                                    key={item.productKey}
                                    image={item.image}
                                    image2={item.image2}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    description={item.description}
                                    price={item.price}
                                    slug={item.productKey}
                                />
                            ))
                        ) : (
                            <p className="no-result">
                                該当する商品がありません
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
