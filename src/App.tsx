import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from './components/pages/HomePage';
import ProductPage from './components/pages/ProductsPage';
import ToDosPage from './components/pages/ToDosPage';
import UsersPage from './components/pages/UsersPage';
import ProductDescriptionPage from './components/pages/ProductDescriptionPage';
interface Aprops{

}

function App() {



//passing function by reference. only called once. Arrow function will have same behaviour

 


  return (
    <>
<Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage/>} />
      <Route path="/to-dos" element={<ToDosPage/>} />
      <Route path="/users" element={<UsersPage/>} />

      <Route path="/product-description" element={<ProductDescriptionPage/>} />
    </Routes>
</>

  );
}

export default App;
