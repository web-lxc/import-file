//窗口加载触发
(function(window){
//            获取屏幕宽度
    var winW = document.documentElement.clientWidth || document.body.clientWidth;

//          设置根元素的font-size  （winW / 10 + "px"利于方便计算除10 ） 
    document.documentElement.style.fontSize = winW / 10 + "px";
  			
//当用户试图调整窗口的大小时触发onresize方法，重新计算font-size
    window.onresize=function(){
        var winW = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = winW / 10 + "px";
    }
})(window);