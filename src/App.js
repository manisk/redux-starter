import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/index";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        <About />
      </div>
    </Provider>
  );
}
