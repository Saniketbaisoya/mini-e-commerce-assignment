import { useEffect, useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import { useCart } from "./hooks/useCart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const { cart, addToCart, removeFromCart, updateQty } = useCart();

  // 🔹 Fetch products and add mock stock
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const updated = data.map(p => ({
          ...p,
          stock: Math.floor(Math.random() * 5) + 1 // mock stock
        }));
        setProducts(updated);
      });
  }, []);

  // 🔹 Add to cart + reduce stock
  const handleAddToCart = (product) => {
    if (product.stock === 0) return;

    addToCart(product);

    setProducts(prev =>
      prev.map(p =>
        p.id === product.id
          ? { ...p, stock: p.stock - 1 }
          : p
      )
    );
  };

  // 🔹 Update / restore product stock (used by Cart)
  const updateProductStock = (id, change) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, stock: p.stock + change }
          : p
      )
    );
  };

  // 🔹 Filters + search + sort together
  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (search) {
      data = data.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      data = data.filter(p => p.category === category);
    }

    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort]);

  return (
    <div className="container">
      <h1>Mini E-Commerce</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        setSort={setSort}
        clearFilters={() => {
          setSearch("");
          setCategory("all");
          setSort("");
        }}
      />

      <div className="layout">
        <ProductList
          products={filteredProducts}
          addToCart={handleAddToCart}
        />

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQty={updateQty}
          onUpdateStock={updateProductStock}   // ✅ FIXED
        />
      </div>
    </div>
  );
}


