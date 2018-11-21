import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 2,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        var sun = e.target.parentNode.parentNode.childNodes;
        // 给所有子节点 都去掉颜色
        sun.forEach((val) => {
            val.style.color = '#999';
        })
        e.target.parentNode.style.color = 'blue';
    }
    render() {
        return (
            <div className={this.props.flag === false ? 'footer' : 'footerAnim'}>
                <div
                     ref="1"
                     onClick={this.handleClick}
                     style={{color: this.state.num === 1 ? 'blue' : '#999'}}
                >
                    <span className="iconfont">&#xe938;</span>
                    <span>筛选</span>
                </div>
                <div
                    ref="2"
                    style={{color: this.state.num === 2 ? 'blue' : '#999'}}
                    onClick={this.handleClick}
                >
                    <span className="iconfont">&#xe63d;</span>
                    <span>排序</span>
                </div>
                <div
                    ref="3"
                    style={{color: this.state.num === 3 ? 'blue' : '#999'}}
                    onClick={this.handleClick}
                >
                    <span className="iconfont">&#xe631;</span>
                    <span>时间</span>
                </div>
                <div
                    ref="4"
                    style={{color: this.state.num === 4 ? 'blue' : '#999'}}
                    onClick={this.handleClick}
                >
                    <span className="iconfont">&#xe85b;</span>
                    <span>价格</span>
                </div>
            </div>
        )
    }
}

export default Footer;