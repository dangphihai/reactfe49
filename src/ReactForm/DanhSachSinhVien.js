import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import { connect } from 'react-redux'

class DanhSachSinhVien extends Component {
    render() {
        return (
            <div>
                <div>
                    <FormSinhVien />
                    <table className="table bg-dark text-white">
                        <thead>
                            <tr>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.mangSinhVien.map((sinhVien, index) => {
                                    return <tr key={index}>
                                        <td>{sinhVien.maSinhVien}</td>
                                        <td>{sinhVien.tenSinhVien}</td>
                                        <td>{sinhVien.email}</td>
                                        <td>{sinhVien.soDienThoai}</td>
                                        <button className="btn btn-primary">Chỉnh sửa</button>
                                        <button className="btn btn-danger">Xóa</button>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps)(DanhSachSinhVien)
