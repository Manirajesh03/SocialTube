import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Routes, Route } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<MainContainer />} />
            <Route path="watch" element={<WatchPage />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
