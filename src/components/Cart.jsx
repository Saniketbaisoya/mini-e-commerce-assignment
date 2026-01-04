export default function Cart({
  cart,
  removeFromCart,
  updateQty,
  onUpdateStock
}) {
  const items = Object.values(cart);

  if (!items.length) {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <p>Cart is empty</p>
      </div>
    );
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {items.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.title}</p>

          <div className="cart-actions">
            <input
              type="number"
              min="1"
              max={item.stock + item.quantity}
              value={item.quantity}
              onChange={(e) => {
                const newQty = Number(e.target.value);
                const oldQty = item.quantity;
                const diff = newQty - oldQty;

                if (newQty < 1) return;
                if (diff > 0 && diff > item.stock) return;

                updateQty(item.id, newQty);
                onUpdateStock(item.id, -diff);
              }}
            />
            <button
              onClick={() => {
                removeFromCart(item.id);
                onUpdateStock(item.id, item.quantity);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ₹ {total.toFixed(2)}</h3>
    </div>
  );
}



