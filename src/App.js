// import logo from './logo.svg';
import {ToastContainer} from 'react-toastify';
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import Home from './component/Home';
import Updateuser from "./component/Updateuser";
import Adduser from './component/Adduser';
import Userlisting from './component/Userlisting';
import './App.css';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <Link to={'/'}>Home</Link>
        <Link to={'/user'}>User</Link>
      </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/user' element={<Userlisting></Userlisting>}></Route>
          <Route path="/user/add" element={<Adduser></Adduser>}></Route>
          <Route path="/user/edit/:code" element={<Updateuser></Updateuser>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position" position='bottom-right'> </ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
