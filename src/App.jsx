import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./redux/store/index";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import Favourites from "./components/Favourites";

function App() {
  return (
 <Provider store={store}>
      <BrowserRouter >
              <NavBar />
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
   </Provider>
  );
}

export default App;
