// const fs = require('fs');
// console.log(fs, 'fs');

// const { Button } = require('antd');
// const React = require('react');
// const ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import ApiTable from './apiTable';
import fs from 'fs';
console.log(fs, 'fs');

// function App() {
// 	return (
// 		<Button>测试</Button>
// 	);
// }
console.log(React, 'React');

class Welcome extends React.Component {
	handleTest() {
		fs.writeFile('ttt.js', {}, () => {});
	}
  render() {
    return (
      <div>
		<Button onClick={this.handleTest.bind(this)}>测试</Button>
		<ApiTable />
	  </div>
    );
  }
}
ReactDOM.render(<Welcome name='react' />, document.getElementById('root'));

// ReactDOM.render(<Button>测试</Button>, document.getElementById('root'));