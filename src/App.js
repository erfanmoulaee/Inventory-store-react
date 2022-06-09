import React from "react";
import { useState } from "react";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";

function App() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState([]);

  return (
    <div>
      <header className="w-full text-4xl  text-white bg-blue-700  h-20 flex justify-center items-center">
        <h1>Inventory Store</h1>
      </header>
      <ProductForm
        title={title}
        setTitle={setTitle}
        quantity={quantity}
        setQuantity={setQuantity}
        category={category}
        setCategory={setCategory}
        product={product}
        setProduct={setProduct}
      />
      <ProductList product={product} setProduct={setProduct} />
    </div>
  );
}

export default App;
