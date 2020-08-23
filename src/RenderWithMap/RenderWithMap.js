import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'Iphone X', price: 1000 },
        { id: 2, name: 'Samsung Note 10 Plus', price: 2000 },
        { id: 3, name: 'HTC M10', price: 3000 }
    ]

    renderProducts = () => {
        // let content = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];
        //     let cardProduct =
        //         <div key={i} className="col-4">
        //             <div className="card text-left">
        //                 <div className="card-body">
        //                     <h4 className="card-title">{product.name}</h4>
        //                     <p className="card-text">{product.price}</p>
        //                 </div>
        //             </div>
        //         </div>
        //         ;
        //     content.push(cardProduct);
        // }
        // return content;

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

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}
