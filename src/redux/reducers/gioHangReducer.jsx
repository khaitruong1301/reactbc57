//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gioHang: [
        // { "maSP": 3, "tenSP": "Iphone XS Max", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" , soLuong:2 },
        // { "maSP": 1, "tenSP": "VinSmart Live" , "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" ,soLuong:3},
    ]
}

const gioHangReducer = createSlice({
  name: 'gioHangReducer',
  initialState,
  reducers: {
    themGioHangAction: (state,action) => {
        let {sanPham} = action.payload;
        //Xử lý thay đổi state.gioHang
        let spGioHang = {...sanPham,soLuong:1}
        //Kiểm tra sản phẩm có trong giỏ hàng hàng hay không
        let sp = state.gioHang.find(spGH => spGH.maSP === spGioHang.maSP);
        if(sp){
            sp.soLuong += 1
        }else {
            state.gioHang.push(spGioHang)
        }
    },
    xoaGioHangAction: (state,action) => {
        const maSPXoa = action.payload;
        // console.log(action)
        state.gioHang = state.gioHang.filter(sp => sp.maSP!== maSPXoa);
    },
    tangGiamSoLuongAction: (state,action) => {
        let {maSP,soLuong} = action.payload;
        let spGH = state.gioHang.find(sp=>sp.maSP === maSP);
        if(spGH) {
            spGH.soLuong += soLuong;
            if(spGH.soLuong <1 ){
                state.gioHang = state.gioHang.filter(sp => sp.maSP!== maSP);
            }
        }

    }
  }
});

export const {themGioHangAction,xoaGioHangAction,tangGiamSoLuongAction} = gioHangReducer.actions

export default gioHangReducer.reducer