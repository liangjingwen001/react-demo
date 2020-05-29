import React,{useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Context from '../context/context.js';

function TestHook(props) {
	const count = useContext(Context);
	console.log(count)
	
	return (
		<div className="App">
		  <h4>这是test首页</h4>
		</div>
	)
}

export default TestHook;