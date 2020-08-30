import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';
import GioHang from './GioHang';

/*
Bước 1: Xây dựng giao diện (dàn layout).
Bước 2: Xác định giá trị thay đổi trên giao diện => Tổ chức lưu trữ state.
Bước 3: Thực hiện xử lý chức năng => Thay đổi state.
*/

export default class BaiTapGioHang extends Component {

    //State giỏ hàng
    state = {
        gioHang: []
    }

    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ];

    themGioHang = (spClick) => {
        // Tạo ra 1 sản phẩm giỏ hàng từ sản phẩm được click
        let spGioHang = {
            maSP: spClick.maSP,
            hinhAnh: spClick.hinhAnh,
            tenSP: spClick.tenSP,
            gia: spClick.gia,
            soLuong: 1
        }

        let gioHangUpdate = this.state.gioHang;

        let index = gioHangUpdate.findIndex(spGH => spGH.maSP === spGioHang.maSP); // Tìm thấy thì index = -1

        if (index != -1) {
            gioHangUpdate[index].soLuong += 1;
        } else {
            gioHangUpdate.push(spGioHang);
        }

        this.setState({
            gioHang: gioHangUpdate
        })
    }

    xoaGioHang = (maSP) => {
        // let gioHangUpdate = this.state.gioHang;
        // // Tìm xem trong giỏ hàng có mã SP được click nút xóa không
        // let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP);
        // if (index !== -1) {
        //     gioHangUpdate.splice(index, 1)
        // }
        // Sau khi xóa sp giỏ hàng thì cập nhật lại state hoặc lọc sản phầm ko 
        this.setState({
            gioHang: this.state.gioHang.filter(sp => sp.maSP !== maSP)
        })
    }

    tangGiamSoLuong = (maSP, tangGiam) => { // tangGiam = true => tăng, tangGiam = false => giảm
        let gioHangUpdate = this.state.gioHang;
        let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP);
        if (index !== -1) {
            if (tangGiam) {
                gioHangUpdate[index].soLuong += 1
            } else {
                if (gioHangUpdate[index].soLuong > 1) {
                    gioHangUpdate[index].soLuong -= 1
                } else {
                    this.xoaGioHang(maSP);
                    return;
                }
            }
        }
        this.setState({
            gioHang: gioHangUpdate
        })
    }

    tinhSoLuongGH = () => {
        return this.state.gioHang.reduce((soLuong, spGH, index) => {
            return soLuong += spGH.soLuong;
        }, 0)
    }

    render() {
        return (
            <div className="container">
                <h3>Bài tập giỏ hàng</h3>
                <div className="gioHang">
                    <div className="text-right text-danger">
                        <span data-toggle="modal" data-target="#modelId" style={{ cursor: 'pointer' }}>Giỏ hàng ({this.tinhSoLuongGH()})</span>
                    </div>
                    <GioHang gioHang={this.state.gioHang} xoaSP={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                </div>
                <DanhSachSanPham mangSanPham={this.mangSanPham} themGioHang={this.themGioHang} />
            </div>
        )
    }
}
