import { useState } from 'react';
import './product.css';

export default function ProductAccordion({ details }) {
  // 여러 개 열기 → 배열로 관리
  const [openKeys, setOpenKeys] = useState([]);

  const toggle = (key) => {
    setOpenKeys(prev =>
      prev.includes(key)
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  return (
    <div className="accordion">
      {Object.entries(details).map(([title, items]) => {
        const isOpen = openKeys.includes(title);

        return (
          <div className="accordion-item" key={title}>
            <button
              className="accordion-header"
              onClick={() => toggle(title)}
              aria-expanded={isOpen}
            >
              <span className="accordion-title">{title}</span>
              <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}>
                ▾
              </span>
            </button>

            {isOpen && (
              <div className="accordion-content">
                <ul>
                  {items.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
