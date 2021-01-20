import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home";
import Port from "./pages/Port";
import Footer from "./components/Footer/index";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper" id="wrapper">
      <Header />
      <Route exact path="/" component={Home}  />
      <Route path="/portfolio" component={Port} />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
