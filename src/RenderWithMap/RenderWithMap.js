import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'Iphone X', price: 1000 },
        { id: 2, name: 'Samsung Note 10 Plus', price: 2000 },
        { id: 3, name: 'HTC M10', price: 3000 }
    ]

    renderProducts = () => {
        let arrJSXProduct = this.productList.map((product, index) => {
            return <div className="col-4" key="{index}">
                <div className="card text-left">
                    <img className="card-img-top" src="https://picsum.photos/200/200" alt={product.name} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        })

        return arrJSXProduct;
    }

    renderTable = () => {
        return this.productList.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <button className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="container">
                {/* <div className="row">
                    {this.renderProducts()}
                </div> */}
                <h3>Danh sách sản phẩm</h3>
                <table className="table text-left">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
