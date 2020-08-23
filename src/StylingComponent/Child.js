import React, { Component } from 'react'
import './Styling.scss' // Ảnh hưởng đến toàn bộ web
import style from './Styling.module.scss' // Chỉ ảnh hưởng đến Child.js, có thể đặt tên bất kì thay vì style, className = {style.name}

export default class Child extends Component {
    render() {
        return (
            <div>
                <div className={style.content}>
                    child component
                </div>
                <p style={{border:'1px solid red', background:'orange', fontSize:'20px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, hic!
                </p>
            </div>
        )
    }
}
