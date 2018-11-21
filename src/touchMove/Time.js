import React, { Component } from 'react';

function TimeItem(props) {
        return (
            <div>
                <ul>
                    <li><span>{props.item.date}</span></li>
                    <li><span>{props.item.name}</span></li>
                    <li><span className='iconfont'>&#xe675;{props.item.price}</span></li>
                </ul>
            </div>
        )
}

class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list : [{
                date: '02-05',
                name: '今天',
                price: '363'
            }, {
                date: '02-05',
                name: '今天',
                price: '363'
            }, {
                date: '02-05',
                name: '今天',
                price: '363'
            }, {
                date: '02-05',
                name: '今天',
                price: '363'
            }, {
                date: '02-05',
                name: '今天',
                price: '363'
            }]
        }
    }

    render() {
        return (
            <div className={this.props.flag === false ? 'time': 'timeAnim'}>
                {
                    this.state.list.map((item, index) =>
                        <TimeItem
                            key={index}
                            item={item}
                        />
                    )
                }
                <div>
                    <div className="line"></div>
                    <ul>
                        <li><span className="iconfont">&#xe7ca;</span></li>
                        <li><span>更多日期</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Time;