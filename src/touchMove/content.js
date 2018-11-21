import React, { Component } from 'react';
import IScroll from 'iscroll/build/iscroll-probe'
import Footer from './Footer'
import Time from './Time'

function ContentItem(props) {
    return (
        <li className="item">
            <div className="list-info">
                <div className="airport">
                    <div className="from-info">
                        <p className="from-time">{props.item.depTime}</p>
                        <p>{props.item.depAirport}{props.item.depTerminal}</p>
                    </div>
                    <div className="airpot-icon">
                        <span className="iconfont">&#xe60e;</span>
                    </div>
                    <div className="to-info">
                        <p className="to-time">{props.item.arrTime}</p>
                        <p>{props.item.arrAirport}{props.item.depAirport}</p>
                    </div>
                </div>
                <div className="company-info">
                    <span>{props.item.shortName}{props.item.code}</span>&nbsp;
                    <span>{props.item.planeFullType}</span>
                </div>
            </div>
            <div className="price1">
                <p className="iconfont price1-price">&#xe675;{props.item.minBarePrice}</p>
                <p className="price1-name">{props.item.cabinDesc}{props.item.discountStr}</p>
                {
                    props.item.message.flag === 'false' ? (<p className="price1-info">{props.item.message.mess}</p>) : ''
                }

            </div>
        </li>
    )
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTop: true,
            isBottom: true,
        }

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);

        // 用来判断鼠标是否滚动
        this.handleScrollStart = this.handleScrollStart.bind(this);
        this.handleScrollEnd = this.handleScrollEnd.bind(this);


        // 用来判断 用户是否是手指滑动
        this.state = {
            touching: false
        }
    }

    componentDidMount() {

        const options = {
            // 默认iscroll会拦截元素的默认事件处理函数，我们需要响应onClick，因此要配置
            preventDefault: false,
            // 禁止缩放
            zoom: false,
            // 支持鼠标事件
            mouseWheel: true,
            // 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
            probeType: 3,
            // 拖拽超过上下界后出现弹射动画效果，用于实现下拉/上拉刷新
            bounce: true,
            // 展示滚动条
            scrollbars: true,

        };
        // 组件挂载的时候  加载IScroll
        this.iScrollInstance = new IScroll('#wrapper', options);
        this.iScrollInstance.on('scrollStart', this.handleScrollStart);
        this.iScrollInstance.on('scrollEnd', this.handleScrollEnd)
        this.iScrollInstance.refresh();

    }


    handleTouchStart() {
        this.props.handleTouch();
    }

    handleTouchEnd() {
        this.props.handleTouch();
    }
    // 鼠标滚动也产生效果
    handleScrollStart(){
        console.log(222)
        this.setState({
            touching: true
        })
        // 在顶端
       /* if(this.iScrollInstance.y > -10) {
            this.setState({
                isTop: true,
                isBottom: true
            })
        } else if(this.iScrollInstance.y < -400){
            this.setState({
                isTop: true,
                isBottom: true,
            })
        } else {
            this.setState({
                isTop: false,
                isBottom: false
            });
            this.setState({
                flag: !this.state.flag
            })
        }*/
    }

    handleScrollEnd(){
        console.log(111)
        this.setState({
            touching: false
        })
        this.iScrollInstance.refresh();
        /*if(this.iScrollInstance.y > -10) {
            this.setState({
                isTop: true,
                isBottom: true
            })
        } else if(this.iScrollInstance.y < -400){
            this.setState({
                isTop: true,
                isBottom: true,
            })
        } else {
            this.setState({
                isTop: false,
                isBottom: false
            });
            this.setState({
                flag: !this.state.flag
            })
        }*/
    }

    render() {
        const height = this.props.list.length * 83 + 'px';
        return (
            <div>
                <Time flag={this.state.touching} />
                <div
                    className="content"
                    id="wrapper"
                    style={{height: window.innerHeight}}
                    onTouchStart={this.handleTouchStart}
                    onTouchEnd={this.handleTouchEnd}
                >
                    <ul id="scroller" className="list-content">
                        {
                            this.props.list.map((item, index) =>
                                <ContentItem
                                    key={index}
                                    item={item}
                                />
                            )
                        }
                        <li style={{height: '50px'}}></li>
                        <li style={{height: '83px'}}></li>
                    </ul>
                </div>
                <Footer flag={this.state.touching} />
            </div>

        )
    }
}

export default Content;