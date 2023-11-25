import ReactDOM from 'react-dom/client';
//import scss ở index (Vì import ở bất kì file nào khi build vẫn ra index.html)
import './assets/scss/style.scss'

//Cấu hình router dom
import {BrowserRouter,Routes,Route, NavLink, Navigate} from 'react-router-dom'

import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang'
import ChangeColor from './StateDemo/ChangeColor';
import Header from './components/Header';
import HomeTemplate from './templates/HomeTemplate';
import GioHang from './Props/BaiTapGioHang/GioHang';
import Login from './Pages/Login';
import UserTemplate from './templates/UserTemplate'
import Register from './Pages/Register'
import Page404 from './Pages/Page404';
import Admin from './Pages/Admin';
import ReactForm from './Pages/ReactForm/ReactForm';
import ReactLifecycle from './Pages/ReactLifeCycle/ReactLifecycle';
//Tạo root trên thẻ div#root
const root = ReactDOM.createRoot(document.getElementById('root'));
//JSX
root.render(
    <BrowserRouter> 
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<div>Trang chủ</div> }></Route>
          <Route path='gio-hang' element={<BaiTapGioHang />} />
          <Route path='bt-change-color' element={<ChangeColor /> }></Route>
          <Route path='login' element={<Login /> }></Route>
          <Route path='react-form' element={<ReactForm />}></Route>
          <Route path='react-life-cycle' element={<ReactLifecycle />}></Route>
        </Route>
        <Route path='user' element={<UserTemplate />}>
          <Route index element={<Login />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
        <Route path='admin' element={<Admin />}></Route>
        <Route path='*' element={<Navigate to="" />} />

    
      
        
      </Routes>
    </BrowserRouter>
);

