import "./App.css";
import Filter from "./components/filter/Filter";
import HouseCards from "./components/housecards/HouseCards";
import products from "./products";
import { useState } from "react";

function App() {
  const [prod, setProd] = useState(products);
  const [location, setLocation] = useState("");
  const [range, setRange] = useState("");
  const [type, setType] = useState("");

  const filter = () => {
    let newProd = products.filter((item) => {
      if (location !== "" && range !== "" && type !== "") {
        return item.location === location && item.range === range && item.type === type;
      } else if (location !== "" && range !== "") {
        return item.location === location && item.range === range;
      } else if (location !== "" && type !== "") {
        return item.location === location && item.type === type;
      } else if (range !== "" && type !== "") {
        return item.range === range && item.type === type;
      } else if (location !== "") {
        return item.location === location;
      } else if (range !== "") {
        return item.range === range;
      } else if (type !== "") {
        return item.type === type;
      } else {
        return item;
      }
    });
    setProd(newProd);
  };

  /* useEffect(() => {
    filter();
  }, [location, price, type]); */

  return (
    <div className="App">
      <Filter setLocation={setLocation} setRange={setRange} setType={setType} filter={filter} />
      <HouseCards products={prod} />
    </div>
  );
}

export default App;
