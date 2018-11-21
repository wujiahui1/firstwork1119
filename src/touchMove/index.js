import React, { Component } from 'react';
import $ from 'jquery'

import './css/iconfont.css'
import './css/index.css'
import './css/reset.css'
import Heador from './heador'

import Content from './content'

class TouchMove extends Component {
    constructor(props) {
        super(props);
        // flag 判断用户是否在滑动
        this.state = {
            flag: false,
            list: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const that = this;
        $.ajax({
            url: '/serverHttp.js',
            dataType: 'text',
            success: function(data) {
                var listArr = JSON.parse(data)
                that.setState({
                    list: listArr
                });
                console.log(listArr)
            },
            error: function(err) {
                console.log(err);
            }
        })
    }

    handleChange() {
        this.setState({
            flag: !this.state.flag
        });
    }

    render() {
        return (
            <div>
                <Heador/>
                <Content handleTouch={this.handleChange} list={this.state.list}/>
            </div>
        )
    }
}

export default TouchMove;