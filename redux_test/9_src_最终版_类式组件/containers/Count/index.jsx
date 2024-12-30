import React, { Component } from 'react'
//引入action
import {
	increment,
	decrement,
	incrementAsync
} from '../../redux/actions/count'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//定义UI组件
class Count extends Component {

	state = { carName: '奔驰c63' }

	//加法
	increment = () => {
		const { value } = this.selectNumber
		this.props.increment(value * 1)
	}
	//减法
	decrement = () => {
		const { value } = this.selectNumber
		this.props.decrement(value * 1)
	}
	//奇数再加
	incrementIfOdd = () => {
		const { value } = this.selectNumber
		if (this.props.count % 2 !== 0) {
			this.props.increment(value * 1)
		}
	}
	//异步加
	incrementAsync = () => {
		const { value } = this.selectNumber
		this.props.incrementAsync(value * 1, 500)
	}

	render() {
		//console.log('UI组件接收到的props是',this.props);
		return (
			<div>
				<h2>我是Count组件,下方组件总人数为:{this.props.renshu}</h2>
				<h4>当前求和为：{this.props.count}</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	// state 可以拿到所有redux内存储的数据
	state => ({
		count: state.count,  // 将 Redux 中的 `count` 状态映射为 `this.props.count`
		personCount: state.persons.length  // 将 Redux 中的 `persons` 数组长度映射为 `this.props.personCount`
	}),
	{ increment, decrement, incrementAsync } // 将 action creators 映射为 `this.props` 的方法
)(Count)

// 总结
// props 的来源：
// Redux 的 state：通过 mapStateToProps 将 Redux 的状态映射为 props。
// Action Creators：通过 mapDispatchToProps 将 action creators 映射为 props 的方法。
// 这些 props 通过 connect 函数自动传递给 Count 组件，使得组件可以访问 Redux 的状态和派发 actions。