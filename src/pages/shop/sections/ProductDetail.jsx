import { useParams } from 'react-router-dom';
import { productDetails } from '../../../data/productdetail.js';
import './ProductDetail.css';

import ProductGallery from './productfolder/ProductGallery';
import ProductInfo from './productfolder/ProductInfo';
import ProductAccordion from './productfolder/ProductAccordion';
import ReviewSection from './productfolder/ReviewSection';
import RecommendProducts from './productfolder/RecommendProducts';

export default function ProductDetail({ onAddToCart }) {
    const { slug } = useParams();

    const product = productDetails.find(
        (item) => item.slug === slug
    );

    if (!product) return <p>商品が見つかりません</p>;

    return (
        <div className="product-detail">
            <div className="product-main">
                <ProductGallery images={product.images} />

                <div className="flexside">
                    <ProductInfo
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                    <ProductAccordion details={product.details} />
                </div>
            </div>

            <ReviewSection
                key={product.slug}    
                productId={product.slug}
            />

            <RecommendProducts
                currentProductKey={product.productKey}
            />
        </div>
    );
}
