import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {

	addPerson = () => {
		const name = this.nameNode.value
		const age = this.ageNode.value * 1
		const personObj = { id: nanoid(), name, age }
		this.props.addPerson(personObj)
		this.nameNode.value = ''
		this.ageNode.value = ''
	}

	render() {
		return (
			<div>
				<h2>我是Person组件,上方组件求和为{this.props.count}</h2>
				<input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
				<input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{
						this.props.persons.map((p) => {
							return <li key={p.id}>{p.name}--{p.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

export default connect(
	// state 可以拿到所有redux内存储的数据
	state => ({
		persons: state.persons,
		count: state.count
	}),//映射状态
	{ addPerson }//映射操作状态的方法
)(Person)

// 无论哪种方式，mapStateToProps 的作用都是将 Redux 的 state 映射到组件的 props 中，使得组件可以访问 Redux 的状态。
// const mapStateToProps = (state) => ({
//  count: state.count,
//  personCount: state.persons.length,
//});