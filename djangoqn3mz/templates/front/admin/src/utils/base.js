const base = {
    get() {
        return {
            url : "http://localhost:8080/djangoqn3mz/",
            name: "djangoqn3mz",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线学习与推荐系统的设计与实现"
        } 
    }
}
export default base
