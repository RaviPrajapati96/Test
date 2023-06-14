import "./styles.css";
import ProductConatiner from "./Component/ProductContainer";
import { Provider } from "react-redux";
import store from "./Utils/Store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductConatiner />
      </div>
    </Provider>
  );
}
