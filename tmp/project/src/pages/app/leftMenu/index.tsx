import * as React from 'react';
import { Menu, Icon } from 'antd';
import { IMenuItem } from 'constants/index';
import { ClickParam } from 'antd/lib/menu';

// import './index.styl';

const { Item: MenuItem } = Menu;

interface IProps {
	menuConfig: IMenuItem[];
	onClick: (params: ClickParam) => void;
}

const LeftMenu: React.FC<IProps> = props => {
	const { menuConfig, onClick } = props;
	return (
		<div className="LeftMenu-wrapper">
			<Menu onClick={onClick}>
				{menuConfig.map(menu => {
					return (
						<MenuItem key={menu.key}>
							<Icon type={menu.icon} /> {menu.name}
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
};

export default LeftMenu;
