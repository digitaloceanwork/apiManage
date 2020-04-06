import React, { useState, useEffect, Fragment } from 'react';
import { Table } from 'antd';
import ApiDrawer from './apiDrawer';
import apiConfig from './apiConfig';

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
	width: 200,
    render: text => <a>{text}</a>,
  },
  {
    title: 'URL',
    dataIndex: 'url',
    key: 'url',
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    url: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    url: 42,
  },
  {
    key: '3',
    name: 'Joe Black',
    url: 32,
  },
];

const ApiTable = (props) => {
	const [tableData, setTableData] = useState(data);
	const [drawerVisible, setDrawerVisible] = useState(false);
	useEffect(() => {
		setTableData(apiConfig);
	});
	return (
		<React.Fragment>
			<Table
				columns={columns}
				dataSource={tableData}
				onRow={record => {
					return {
					  onClick: event => {
						  setDrawerVisible(true);
					  }
					};
				  }}
				pagination={false}
				rowKey={record => record.name}
			/>
			<ApiDrawer
				drawerVisible={drawerVisible}
				onCloseDrawer={() => {setDrawerVisible(false)}} />
		</React.Fragment>
	);
};

export default ApiTable;