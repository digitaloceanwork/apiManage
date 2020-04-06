import React from 'react';
import { Drawer } from 'antd';

const ApiDrawer = (props) => {
	return (
		<Drawer
		  title="Basic Drawer"
		  placement="right"
		  width={600}
		  closable={false}
		  onClose={props.onCloseDrawer}
		  visible={props.drawerVisible}
		>
		  <p>Some contents...</p>
		  <p>Some contents...</p>
		  <p>Some contents...</p>
		</Drawer>
	);
};

export default ApiDrawer;