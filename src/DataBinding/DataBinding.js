import React, { Component } from 'react'

export default class DataBinding extends Component {

    // Thuộc tính
    product = {
        id: 1,
        name: 'iphoneX',
        price: 1000
    }

    renderCard = () => {
        return <div className="card text-left">
            <img className="card-img-top" src="http://picsum.photos/1920/1080" alt />
            <div className="card-body">
                <h4 className="card-title">{this.product.name}</h4>
                <p className="card-text">{this.product.price}</p>
            </div>
        </div>
    }

    render() {
        // Binding data
        let title = 'helloooo!';
        let photo = 'http://picsum.photos/200/200';

        // Binding function
        let renderImg = () => {
            return <img src='http://picsum.photos/300/300' />
        }

        return (
            <div>
                <h1 id="title">{title}</h1>
                <img src={photo} />
                <img src="./img/logo.jpg" />

                <div>
                    {renderImg()}
                </div>

                <div>
                    {this.renderCard()}
                </div>

                <div className="card text-left">
                    <img className="card-img-top" src="http://picsum.photos/800/800" alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.product.name}</h4>
                        <p className="card-text">{this.product.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}
