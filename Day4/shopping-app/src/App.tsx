
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import ProductDataJson from './ProductModule/ProductDataJson';
import { Menu } from './Menu';
import Parent from './ProductModule/Parent';
import { NotFound } from './NotFound';
import { Products } from './ProductModule/Products';
import { Home } from './Home';
import { PrivateRoute } from './PrivateRoute';
import { AddProduct } from './AddProduct';
import { Welcome } from './Welcome';
import { ProductsDropDoen } from './ProductDropDown';
import { Display } from './Display';
import { Todo } from './Toto';
import Employees from './EmployeeModule/Employees';
import AddEmployee from './EmployeeModule/AddEmployee';

function App() {
  return (
    <div>
      <AddEmployee/>
      <hr/>
      <Employees/>
    </div>
  );
}

export default App;



{/* <BrowserRouter>
<Menu/>
<Todo/>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='parent' element={<Parent/>}/>
    <Route path='addprod' element={<AddProduct/>}/>
    <Route path='productFilter' element={<ProductsDropDoen/>}/>
    <Route path='display' element={<Display/>}/>
    <Route element={<PrivateRoute/>}>
        <Route path='products' element={<Products/>}/>
        <Route path='local' element={<ProductDataJson/>}/>
        <Route path='welcome/:un' element={<Welcome/>}/>
    </Route>
    <Route path='*' element={<NotFound/>}/>
</Routes>
</BrowserRouter>
<Outlet/> */}