import EmptyState from "./EmptyState";
import ProductCard from "./ProductCard";


export default function ProductList({ products, addToCart }) {
  if (!products.length) return <EmptyState text="No products found" />;

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
