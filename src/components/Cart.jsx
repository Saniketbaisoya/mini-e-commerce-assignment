export default function Cart({
  cart,
  removeFromCart,
  updateQty,
  onUpdateStock,
  getProductStock
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

      {items.map(item => {
        const availableStock = getProductStock(item.id);

        return (
          <div key={item.id} className="cart-item">
            <p>{item.title}</p>

            <div className="cart-actions">
              <button
                onClick={() => {
                  if (item.quantity === 1) return;

                  updateQty(item.id, item.quantity - 1);
                  onUpdateStock(item.id, +1);
                }}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => {
                  if (availableStock === 0) return;

                  updateQty(item.id, item.quantity + 1);
                  onUpdateStock(item.id, -1);
                }}
                disabled={availableStock === 0}
              >
                +
              </button>

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
        );
      })}

      <h3>Total: ₹ {total.toFixed(2)}</h3>
    </div>
  );
}



