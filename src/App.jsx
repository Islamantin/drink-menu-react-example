import MenuItem from "./components/MenuItem";
import { useState, useMemo } from "react";

function App() {
  const [menuSelection, setMenuSelection] = useState({
    coffee: { japaneseName: "コーヒー", price: 480, count: 0 },
    tea: { japaneseName: "お茶", price: 280, count: 0 },
    milk: { japaneseName: "ミルク", price: 180, count: 0 },
    coke: { japaneseName: "コーラ", price: 190, count: 0 },
    beer: { japaneseName: "ビール", price: 580, count: 0 },
  });

  function incrementCount(itemName) {
    const newMenuSelection = { ...menuSelection };
    newMenuSelection[itemName].count += 1;
    setMenuSelection(newMenuSelection);
  }

  const totalAmount = useMemo(() => {
    return Object.values(menuSelection).reduce((total, item) => total + item.count, 0);
  }, [menuSelection]);

  const totalPrice = useMemo(() => {
    return Object.values(menuSelection).reduce((total, item) => total + item.price * item.count, 0);
  }, [menuSelection]);

  return (
    <div className="p-4 w-[600px]">
      <h1 className="text-2xl font-bold mb-8 text-center">Drinks Menu</h1>
      <div className="flex gap-32">
        <div>
          {Object.entries(menuSelection).map(([itemName, item]) => (
            <div key={itemName}>
              <MenuItem
                name={itemName}
                label={item.japaneseName}
                price={item.price}
                count={item.count}
                incrementCount={() => incrementCount(itemName)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-48 rounded-md p-4 bg-white shadow-xl h-fit border self-center">
          <span>お会計</span>
          <div className="w-full border my-2"></div>
          <span id="count">商品数：{totalAmount}</span>
          <span id="price">合計金額：{totalPrice}円</span>
        </div>
      </div>
    </div>
  );
}

export default App;
