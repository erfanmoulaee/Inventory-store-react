import Product from "./Product";

const ProductList = ({ product, setProduct }) => {
  return (
    <div className="mt-7 mb-4 flex justify-center items-center">
      <ul>
        {product.map((item) => (
          <Product
            key={item.id}
            title={item.text.title}
            category={item.text.category}
            quantity={item.text.quantity}
            item={item}
            product={product}
            setProduct={setProduct}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
