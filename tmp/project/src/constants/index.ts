export interface IMenuItem {
	key: string;
	name: string;
	href: string;
	icon: string;
}

export const menuConfig: IMenuItem[] = [
	{ key: 'page1', name: '理想', href: 'reimbursement', icon: 'mail' },
	{ key: 'reality', name: '现实', href: '/financial', icon: 'calendar' },
	{ key: 'settings', name: '设置', href: '/settings', icon: 'appstore' },
];
