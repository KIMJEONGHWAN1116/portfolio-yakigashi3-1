export default function NewsModal({ news, onClose }) {
  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>×</button>

        <div className="modal__meta">
          <time>{news.date}</time>
          <span>{news.tag}</span>
        </div>

        <h3>{news.title}</h3>
        <p className="modal__content">
          {news.content}
        </p>
      </div>
    </div>
  );
}
