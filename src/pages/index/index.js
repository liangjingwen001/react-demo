import React from 'react';

class Index extends React.Component{
	toDetail = () => {
		this.props.history.push('/detail')
	}
	render() {
		return (
		  <div className="App">
			<h4>这是首页</h4>
		    <button onClick={this.toDetail}>详情页跳转</button>
		  </div>
		);
	}
}

export default Index;