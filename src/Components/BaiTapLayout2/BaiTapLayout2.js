import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import SliderComponent from './SliderComponent'
import Footer from './Footer'
import ProductListComponent from './ProductListComponent'

export default class BaiTapLayout2 extends Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <SliderComponent></SliderComponent>
                <ProductListComponent></ProductListComponent>
                <Footer></Footer>
            </div>
        )
    }
}
