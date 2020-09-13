import { THEM_SINH_VIEN } from "./types/QuanLySinhVienTypes";

const initialState = {
    mangSinhVien: [
        {maSinhVien:1, tenSinhVien:'Nguyễn Văn A', soDienThoai: 1232123, email:'nguyenvana@gmail.com'},
        {maSinhVien:2, tenSinhVien:'Trần Văn B', soDienThoai: 4444444, email:'tranvanb@gmail.com'}
    ]
}

export default (state=initialState, action) => {
    switch(action.type) {
        case THEM_SINH_VIEN: {
            state.mangSinhVien = [...state.mangSinhVien,
            action.sinhVien];
            return {...state}
        }
        default:
            return state
    }
}