import React, { Component } from "react";

/**
 * 三种创建组件的形式：
 * 1、函数式的 无状态组件
 * 2、ES5 原生方式定义组件
 * 3、ES6 形式 extends React.Component
 * @see https://www.cnblogs.com/wonyun/p/5930333.html React创建组件的三种方式
 */

/**
 * 无状态组件，可读性好，减少代码量
 */
// function App(props /*,context*/) {
// 	return <div> Hello {props.name}</div>
// }

// const App = (props) => {
// 	<div>hello {props.name}.</div>;
// };

// ReactDOM.render(App);

/**
 * React.createClass  自动绑定函数，导致不必要的性能开销
 */

/**
 * ES6 extends 创建组件  需要自己绑定函数
 */
class App extends Component {
	static propTypes = {
		num: Number
	};

	static defaultProps = {
		num: 1
	};

	constructor(props) {
		super(props);

		this.state = {
			num: props.num
		};

		this.up = this.up.bind(this);
		this.down = this.down.bind(this);
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.up}>up</button>
				<span>{this.state.num}</span>
				<button onClick={this.down}>down</button>
			</div>
		);
	}

	up() {
		this.setState({
			num: this.state.num + 1
		});
	}

	down() {
		this.setState({
			num: this.state.num - 1
		});
	}
}

export default App;
