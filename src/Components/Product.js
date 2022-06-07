const Product = ({ title, quantity, category }) => {
  return (
    <div class="flex items-center border-2 border-blue-600 px-6 py-3 rounded-xl justify-between mb-4 w-full min-w-[400px]">
      <span class="text-gray-900 font-medium">{title}</span>
      <div class="flex items-center gap-x-3">
        <span class="text-gray-900">
          {new Date().toLocaleDateString("fa-IR")}
        </span>

        <span class="block px-3 py-0.5 text-gray-900 border border-blue-600 text-sm rounded-2xl">
          {category}
        </span>
        <span class="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 border-2 border-slate-300 text-slate-300">
          {quantity}
        </span>
        <button class="delete-product border px-2 py-o.5 rounded-2xl border-red-400 text-red-400 delete-product">
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
