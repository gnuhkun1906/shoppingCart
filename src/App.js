import logo from './logo.svg';
import './App.css';
import ListProduct from './component/ListProduct';
import ListCart from './component/ListCart';

function App() {
  return (
    <div className="App">
      <div className="container">
  {/* TITLE : START */}
  <div className="page-header">
    <h1>
      Project 04 - Shopping Cart <small>ReactJS</small>
    </h1>
  </div>
  {/* TITLE : END */}
  <div className="row">
    {/* LIST PRODUCT : START */}
    <ListProduct/>
    {/* LIST PRODUCT : END */}
    {/* CART : START */}
    <ListCart/>
    {/* CART : END */}
  </div>
</div>

    </div>
  );
}

export default App;
