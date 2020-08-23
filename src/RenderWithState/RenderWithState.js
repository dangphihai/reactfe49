import React, { Component } from 'react'

export default class RenderWithState extends Component {
    // Quản lý những giá trị thay đổi tron giao diện
    state = {
        login: false
    }

    //Thuộc tính
    // login = false;
    userName = 'Hải';

    renderLogin = () => {
        if(this.state.login) {
        return <p>Hello {this.userName}</p>
        }
        return <div><button className='btn btn-primary' onClick= {() => {
            this.handleLogin();
        }}>Đăng nhập</button></div>
    }

    handleLogin = () => {
        // this.state.login = true;
        let newState = {login: true};
        this.setState(newState, () => {
            console.log( this.state.login);
        }); // setState là phương thức bất đồng bộ
        console.log( this.state.login);
    }

    render() {
        return (
            <div>
                {/* {this.login ? <p>Hello {this.userName}</p> : <div><button>Log in</button></div>} */}
                {this.renderLogin()}
            </div>
        )
    }
}
