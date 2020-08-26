import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {


    // this.props là thuộc tính có sẵn của component, lưu ý: dùng để nhận giá trị từ component cha truyền vào, và không thay đổi được giá trị đó
    // state != props, state có thể gán giá trị khác, props không thể thay đổi giá trị
    render() {
        return (
            <div style={{width:200}}>
                <div className="card text-left">
                    <img style={{width:'100%'}} className="card-img-top" src="" alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Họ tên: {this.props.sinhVien.hoTen}</h4>
                        <p>Lớp: {this.props.sinhVien.lop}</p>
                    </div>
                </div>
            </div>
        )
    }
}
