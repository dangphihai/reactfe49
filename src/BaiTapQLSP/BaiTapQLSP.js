import React, { Component } from 'react'
import SanPham from './SanPham'

export default class BaiTapQLSP extends Component {

    state = {
        sanPhamChiTiet: this.props.mangSP[0]
    }
    /*Xác định nơi lưu trữ state (giá trị làm thay đổi giao diện)
    - Nơi chứa giao diện binding dữ liệu đó ra (trực tiếp hoặc gián tiếp)
    - Nơi chứa control (nút nhấn) làm thay đổi giá trị state đó (trực tiếp hoặc gián tiếp)
    */
    renderSanPham = () => {
        return this.props.mangSP?.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet}/>
            </div>
        })
    }

    xemChiTiet = (spClick) => {
        console.log('spClick', spClick);
        // setState cho sản phẩm chi tiết = sản phẩm được click
        this.setState({
            sanPhamChiTiet: spClick
        })
    }

    render() {

        let {maSP, tenSP, hinhAnh, manHinh, cameraTruoc, cameraSau, heDieuHanh, gia, ram, rom} = this.state.sanPhamChiTiet;

        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <hr />
                <div className="row">
                    <div className="col-4">
                        <h3 className="text-center">{tenSP}</h3>
                        <img className="w-100" src={hinhAnh} alt />
                    </div>
                    <div className="col-8">
                        <h3 >Thông số kỹ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
