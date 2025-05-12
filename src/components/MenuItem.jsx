const MenuItem = ({ name, label, count, price, incrementCount }) => {

  return (
    <div className="p-4 relative w-48">
      <button
        id={name}
        type="button"
        className="p-2 border-2 border-black rounded-lg bg-white shadow-md flex gap-4 justify-between w-full"
        onClick={incrementCount}
      >
        <span>{label}</span>
        <span>{price}円</span>
      </button>
      <div id={`${name}-count`} className="absolute top-0 right-0 p-1 w-8 rounded-full bg-red-500 text-white text-center">
        {count}
      </div>
    </div>
  );
};

export default MenuItem;
