import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import DemoHeader from './Components/DemoHeader';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import Styling from './StylingComponent/Styling';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRenderFilm from './BaiTapRenderFilm/BaiTapRenderFilm';
import DemoProps from './Props/DemoProps';
import BaiTapQLSP from './BaiTapQLSP/BaiTapQLSP';
import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapGameTaiXiu from './BaiTapRedux/BaiTapGameTaiXiu/BaiTapGameTaiXiu';

function App() {
  
//   let mangSanPham = [
//     { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 },
//     { maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/sp_iphoneX.png', gia: 2000 },
//     { maSP: 3, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 3000 },
//     { maSP: 4, tenSP: 'Vivo 850', hinhAnh: './img/sp_vivo850.png', gia: 3000 }
// ];

  return (
    <div className="App">
      {/* <HandleEvent/> */}
      {/* <Styling/> */}
      {/* <RenderWithState/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithMap/> */}
      {/* <BaiTapRenderFilm/> */}
      {/* <DemoProps/> */}
      {/* <BaiTapQLSP mangSP={mangSanPham}/> */}
      {/* <BaiTapGioHang/> */}
      {/* <BaiTapGioHangRedux/> */}
      <BaiTapGameTaiXiu/>
    </div>
  );
}

export default App;
