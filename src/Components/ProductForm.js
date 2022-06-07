const ProductForm = ({
  title,
  setTitle,
  quantity,
  setQuantity,
  category,
  setCategory,
  product,
  setProduct,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const productValue = {
      title: title,
      quantity: quantity,
      category: category,
    };
    setProduct([
      ...product,
      {
        text: productValue,
        id: Math.random() * 1000,
      },
    ]);
    setTitle("");
    setQuantity("");
    setCategory("");
  };
  return (
    <div className="flex items-center justify-center mt-5 w-full min-w-[400px]">
      <form className="border-2 border-blue-700  w-96 p-6 rounded-xl">
        <div className="mb-6">
          <label
            for="product-title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="product-quantity"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            quantity
          </label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="product-category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            category
          </label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="flex items-start mb-3"></div>
        <button
          type="submit"
          onClick={submitHandler}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
