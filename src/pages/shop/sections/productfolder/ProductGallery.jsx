import { useEffect, useState } from 'react';
import './product.css';

export default function ProductGallery({ images }) {
  const [mainImg, setMainImg] = useState(images[0]);

  // 🔽 상품 변경 시 메인 이미지 초기화
  useEffect(() => {
    setMainImg(images[0]);
  }, [images]);

  return (
    <div className="gallery">
      <img src={mainImg} className="main-img" />

      <div className="thumbs">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setMainImg(img)}
            className={img === mainImg ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}