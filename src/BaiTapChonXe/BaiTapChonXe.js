import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgCar: './img/black-car.jpg'
    }

    handleChangeColor = (imgColor) => {
        // Lấy img được click gán vào state thông qua phương thức setState
        this.setState({ imgCar: `./img/${imgColor}-car.jpg` })
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-8">
                        <img style={{ width: '100%' }} src={this.state.imgCar} />
                    </div>

                    <div className="col-4">
                        <div className="card text-left">
                            <div className="card-header">
                                Exterior Color
                            </div>

                            <div className="card-body">

                                <div onClick={() => {
                                    this.handleChangeColor('black');
                                }} className="row p-2" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '75%' }} src="./img/icon-black.jpg" alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h5>Crystal Black</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div onClick={() => {
                                    this.handleChangeColor('steel');
                                }} className="row p-2 mt-2" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '75%' }} src="./img/icon-steel.jpg" alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h5>Modern Steel</h5>
                                        <p>Metallic</p>
                                    </div>
                                </div>

                                <div onClick={() => {
                                    this.handleChangeColor('silver');
                                }} className="row p-2 mt-2" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '75%' }} src="./img/icon-silver.jpg" alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h5>Lunar Silver</h5>
                                        <p>Metallic</p>
                                    </div>
                                </div>

                                <div onClick={() => {
                                    this.handleChangeColor('red');
                                }} className="row p-2 mt-2" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="image col-4">
                                        <img style={{ width: '75%' }} src="./img/icon-red.jpg" alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h5>Rallye Red</h5>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
