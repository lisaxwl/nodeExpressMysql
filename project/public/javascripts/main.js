
	// 左侧树结构加载
	var setting = {};

		var zNodes =[
			{ name:"新闻管理",
			   children: [
				 { name:"新闻视频管理",icon:'/img/skin_/leftlist.png'},
				 { name:"新闻频道管理",icon:'/img/skin_/leftlist.png'},
				 { name:"地方新闻管理",icon:'/img/skin_/leftlist.png'}
			]},
			{ name:"用户信息设置", open:true,
			   children: [
				 { name:"首页", checked:true,icon:'/img/skin_/leftlist.png'},
				 { name:"表单",icon:'/img/skin_/leftlist.png'},
				 { name:"表格",icon:'/img/skin_/leftlist.png'},
				 { name:"自定义设置",icon:'/img/skin_/leftlist.png'}
			]},
			{ name:"工作安排",
			   children: [
				 { name:"工作安排",icon:'/img/skin_/leftlist.png'},
				 { name:"安排管理",icon:'/img/skin_/leftlist.png'},
				 { name:"类型选择",icon:'/img/skin_/leftlist.png'},
				 { name:"自定义设置",icon:'/img/skin_/leftlist.png'}
			]},
			{ name:"数据管理",
			   children: [
				 { name:"工作安排",icon:'/img/skin_/leftlist.png'},
				 { name:"安排管理",icon:'/img/skin_/leftlist.png'},
				 { name:"类型选择",icon:'/img/skin_/leftlist.png'},
				 { name:"自定义设置",icon:'/img/skin_/leftlist.png'}
			]}
		];

	// $.fn.zTree.init($(".tree"), setting, zNodes);
	
	
	$('.sidebar h2').click(function(e) {
        $('.tree-list').toggleClass('outwindow');
		$('.nav').toggleClass('outwindow');
    });
	
	$(document).click(function(e) {
		if(!$(e.target).is('.tab-more')){
			 $('.tab-more').removeClass('active');
			 $('.more-bab-list').hide();
		}
    });