import React, { Component } from 'react'
import data from './DataFilms.json'

export default class BaiTapRenderFilm extends Component {
    renderMovies = () => {
        return data.map((movie, index) => {
            return <div className="col-2" key={index}>
                <div className="card text-left ml-3">
                    <img className="card-img-top" src={movie.hinhAnh} style={{ height: 250 }} />
                    <div className="card-body">
                        <h4 className="card-title" style={{ height: 50 }}>{movie.tenPhim.length > 20 ? <span>{movie.tenPhim.substr(0, 20)} ... </span> : <span>{movie.tenPhim}</span>}</h4>
                        <p className="card-text" style={{ height: 75 }}>{movie.moTa.length > 75 ? <span>{movie.moTa.substr(0, 75)} ... </span> : movie.moTa}</p>
                    </div>
                </div>
            </div >
        })
    }

    render() {
        return (
            <div style={{ backgroundImage: 'url("./img/avanger.jpg")', width: '100%', backgroundSize: '100%', minHeight: 1000 }}>
                <div style={{ width: '100%', minHeight: 1000, backgroundColor: 'rgba(0,0,0,.5)' }}>
                    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'rgba(150,100,150,.5' }}>
                        <a className="navbar-brand" href="#">CYBERLEARN-MOVIE</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Film</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="#">Action 1</a>
                                        <a className="dropdown-item" href="#">Action 2</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <h3 className="mt-2 mb-2 text-center display-4 text-light">Danh sách phim</h3>
                    <div className="row">
                        {this.renderMovies()};
                </div>
                </div>

            </div>

        )
    }
}
