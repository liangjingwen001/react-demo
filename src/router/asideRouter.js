const route = [
	{
		title: '控制台',
		icon: 'index',
		key: '/index'
	},
	{
		title: '用户管理',
		icon: 'LaptopOutlined',
		key: '/index/user',
		child: [
			{
				title: '用户列表',
				icon: 'laptop',
				key: '/index/user/list'
			},
			{
				title: '添加用户',
				icon: 'laptop',
				key: '/index/user/add'
			}
		]
	},
	{
		title: '激励申请',
		icon: 'hone',
		key: '/apply'
	},
	{
		title: '添加用户',
		icon: 'laptop',
		key: '/home/genaral/icon2',
		child: [
			{
				title: '三级1',
				icon: 'laptop',
				key: '/user/index2'
			},
			{
				title: '三级2',
				icon: 'laptop',
				key: '/login'
			}
		]
	}
]

export default route;