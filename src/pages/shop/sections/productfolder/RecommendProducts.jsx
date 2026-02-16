import { products } from '../../../../data/products';
import ProductCard from '../ProductCard';
import './product.css'

export default function RecommendProducts({ currentProductKey }) {

    const recommendItems = products.filter(
        item => item.productKey !== currentProductKey
    );



    return (
        <section className="recommend">
            <h2>
                この商品もおすすめ<br />
                <span>Recommended</span>
            </h2>

            <div className="productlist16">
                {recommendItems.map(item => (
                    <ProductCard
                        key={item.id}
                        image={item.image}
                        image2={item.image2}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        price={item.price}
                        slug={item.productKey}
                    />
                ))}
            </div>
        </section>
    );
}
