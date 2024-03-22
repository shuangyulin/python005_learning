
var projectName = '在线学习与推荐系统的设计与实现';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '学习资源',
	url: './pages/xuexiziyuan/list.html'
}, 
{
	name: '资源评价',
	url: './pages/ziyuanpingjia/list.html'
}, 

{
	name: '公告信息',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/djangoqn3mz/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"科目","menuJump":"列表","tableName":"kemu"}],"menu":"科目管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","修改","删除"],"menu":"学习资源","menuJump":"列表","tableName":"xuexiziyuan"}],"menu":"学习资源管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除"],"menu":"学习记录","menuJump":"列表","tableName":"xuexijilu"}],"menu":"学习记录管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除"],"menu":"资源评价","menuJump":"列表","tableName":"ziyuanpingjia"}],"menu":"资源评价管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","学习"],"menu":"学习资源列表","menuJump":"列表","tableName":"xuexiziyuan"}],"menu":"学习资源模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"资源评价列表","menuJump":"列表","tableName":"ziyuanpingjia"}],"menu":"资源评价模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"学习资源","menuJump":"列表","tableName":"xuexiziyuan"}],"menu":"学习资源管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","审核"],"menu":"学习记录","menuJump":"列表","tableName":"xuexijilu"}],"menu":"学习记录管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","审核"],"menu":"资源评价","menuJump":"列表","tableName":"ziyuanpingjia"}],"menu":"资源评价管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","学习"],"menu":"学习资源列表","menuJump":"列表","tableName":"xuexiziyuan"}],"menu":"学习资源模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"资源评价列表","menuJump":"列表","tableName":"ziyuanpingjia"}],"menu":"资源评价模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","资源评价","修改"],"menu":"学习记录","menuJump":"列表","tableName":"xuexijilu"}],"menu":"学习记录管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"资源评价","menuJump":"列表","tableName":"ziyuanpingjia"}],"menu":"资源评价管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","学习"],"menu":"学习资源列表","menuJump":"列表","tableName":"xuexiziyuan"}],"menu":"学习资源模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"资源评价列表","menuJump":"列表","tableName":"ziyuanpingjia"}],"menu":"资源评价模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
