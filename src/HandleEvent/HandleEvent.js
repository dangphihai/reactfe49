import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('Hello');
    }

    showInfo = (name) => {
        alert(`${name}`)
    }

    render() {


        return (
            <div className="container">
                {/*Cách 1: Truyền callback function thông qua thuộc tính */}
                <button onClick={this.handleClick}>Click me</button>

                <button onClick={this.showInfo.bind(this, 'Mẫn đẹp trai')}>show info</button>

                {/* Cách 2: Truyền trực tiếp qua thuộc tính */}
                <button onClick={() => {
                    // Click vào gọi nhiều hàm thực hiện
                    alert('Ha ha ha');
                    this.handleClick();
                }}>Show message</button>
                <br/>
                <button onClick={() => {
                    this.showInfo('Mẫn');
                }}>Show info</button>

            </div>
        )
    }
}
