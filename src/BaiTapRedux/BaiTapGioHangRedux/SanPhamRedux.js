import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props
        return (
            <div className="card text-left">
                <img style={{ width: 250 }} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.themGioHang(sanPham)
                    }}>Thêm sản phẩm</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => { // dispatch là hàm giống set state
    return {
        themGioHang:(sanPhamClick) => {
            console.log('sanPhamClick', sanPhamClick)
            const action = {
                type:'THEM_GIO_HANG', // thuộc tính bắt buộc type
                sanPham:sanPhamClick // Nội dung đưa lên store của redux
            }
            // Dùng hàm dispatch để gửi lên store của redux
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)
