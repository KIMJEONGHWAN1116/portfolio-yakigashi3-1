import './AddCartModal.css';

export default function AddCartModal({ onClose, onGoCart }) {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}       
    >
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()} 
      >
        <p className="modal-title">
          商品をカートに追加しました<br />
          このままカートへ進みますか？
        </p>

        <div className="modal-actions">
          <button
            className="btn-outline"
            onClick={onClose}
          >
            買い物を続ける
          </button>

          <button
            className="btn-primary"
            onClick={onGoCart}
          >
            カートへ進む
          </button>
        </div>
      </div>
    </div>
  );
}
