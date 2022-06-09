const Product = ({ title, quantity, category, item, product, setProduct }) => {
  const removeHandler = () => {
    setProduct(product.filter((el) => el.id !== item.id));
  };
  const incrementHandler = (id) => {
    const products = [...product];
    const selectedItem = product.find((p) => p.id === id);
    selectedItem.text.quantity++;
    setProduct(products);
  };
  const decrementHandler = (id) => {
    const products = [...product];
    const selectedItem = product.find((p) => p.id === id);
    selectedItem.text.quantity--;
    setProduct(products);
  };
  return (
    <div className="flex items-center border-2 border-blue-600 px-6 py-3 rounded-xl justify-evenly  mb-4 w-auto ">
      <span className="text-gray-900 font-medium">{title}</span>
      <div className="flex items-center gap-x-3">
        <span className="text-gray-900 mx-8">
          {new Date().toLocaleDateString("fa-IR")}
        </span>

        <span className="block px-3 py-0.5 text-gray-900 border border-blue-600 text-sm rounded-2xl">
          {category}
        </span>
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 border-2 border-slate-300 text-slate-300">
          {quantity}
        </span>
        <button
          onClick={() => incrementHandler(item.id)}
          className="border text-white  border-blue-600 rounded-md px-2 py-1 bg-blue-500 hover:bg-blue-600"
        >
          +
        </button>
        <button
          onClick={() => decrementHandler(item.id)}
          className="border text-white  border-blue-600 rounded-md px-2 py-1 bg-blue-500 hover:bg-blue-600"
        >
          -
        </button>
        <button
          onClick={removeHandler}
          className="delete-product border px-2 py-o.5 rounded-2xl border-red-400 text-red-400 delete-product"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
