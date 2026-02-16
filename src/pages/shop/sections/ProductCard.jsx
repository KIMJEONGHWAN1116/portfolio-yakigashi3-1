import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({
  image,
  image2,
  title,
  subtitle,
  price,
  description,
  slug,
}) {

  const descLines = Array.isArray(description)
    ? description.flatMap(text =>
      typeof text === 'string' ? text.split('\n') : []
    )
    : typeof description === 'string'
      ? description.split('\n')
      : [];
      
  return (
    <div className="product-card">
      <Link to={`/shop/${slug}`} className="product-link">
        <div className='proimgcon'>
          <img src={image} alt={title} />
          {image2 && <img src={image2} alt={title} className='proimg2' />}
        </div>

        <h3>
          {title}<br />
          <span>{subtitle}</span>
        </h3>

        {descLines.length > 0 && (
          <p className="desc">
            {descLines.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        )}

        <p className="price">{price}</p>
      </Link>
    </div>
  );
}
