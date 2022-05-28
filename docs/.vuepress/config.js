module.exports = {
	title: 'AnWorld_',
	searchMaxSuggestions: 8, //
	lastUpdated: 'Last Updated', //git最后更新时间
	smoothScroll: true, //滚动效果
	themeConfig: {
		// 顶部导航
		nav: [
			{ text: '首页', link: '/' },
			{ text: '关于我', link: '/about/about' },
			{
				text: '常用站点',
				items: [
					{ text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/' },
					{ text: 'CDN', link: 'https://cdnjs.com/' }
				]
			},
			{ text: 'GitHub', link: 'https://github.com/Anansxo/VuePress-blog', arget: '_blank' },
		],
		// 侧边栏
		sidebar: [
			{
				title: 'HTML',   // 必要的
				path: '/pages/HTML',
			},
			{
				title: 'CSS',   // 必要的
				path: '/pages/CSS',
			},
			{
				title: 'JavaScript',   // 必要的
				path: '/pages/JavaScript',
			},
			{
				title: 'Vue',   // 必要的
				path: '/pages/Vue',
			},
		]
	}
}