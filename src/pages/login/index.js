import React, {Component, Fragment} from 'react';
import Login from './login'
import Register from './register'

class Index extends Component {
	constructor() {
		super()
		this.state = {
            formType: 'login'
        }
    }
    
    switchForm = (value) => {
        this.setState({
            formType: value
        })
    }

	render() {
		return (
			<div>
                {this.state.formType === 'login' ? <Login switchForm={this.switchForm}></Login> : <Register switchForm={this.switchForm}></Register>}
			</div>
		)
	}

}
 
export default Index;