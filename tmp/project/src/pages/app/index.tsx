import * as React from 'react';
import { menuConfig } from 'constants/index';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import LeftMenu from './leftMenu';

import './index.styl';
import { ClickParam } from 'antd/lib/menu';

const App: React.FC<RouteConfigComponentProps> = props => {
	function handleMenuClick(params: ClickParam) {
		props.history.push(params.key);
	}
	return (
		<div className="app-wrapper">
			<div className="app-header">header content</div>
			<div className="app-content">
				<div className="app-left-menu">
					<LeftMenu onClick={handleMenuClick} menuConfig={menuConfig} />
				</div>
				<div className="app-right-content">{renderRoutes(props.route.routes)}</div>
			</div>
		</div>
	);
};

export default App;
