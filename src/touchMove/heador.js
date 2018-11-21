import React, { Component } from 'react';

class Heador extends Component {

    render() {
        return (
            <div className="Heador">
                <span className="left iconfont">&#xe624;</span>
                <div className="city">
                    北京<span className="iconfont">&#xe600;</span>上海
                </div>
                <div className="search">
                    <span className="iconfont">&#xe647;</span>
                </div>
            </div>
        )
    }
}

export default Heador;