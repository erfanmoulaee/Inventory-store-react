import Product from "./Product";

const ProductList = ({ product }) => {
  return (
    <div className="mt-7 mb-4 flex justify-center items-center">
      <ul>
        {product.map((item) => (
          <Product
            title={item.text.title}
            category={item.text.category}
            quantity={item.text.quantity}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
