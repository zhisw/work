

/*
$('.rangeMainBox').dropload({

})*/
var hotRangeparams={
		"pageNumb":1
	}
	var rangeStr='';
apiUrl='http://118.178.227.195:8088/meike-mener';


/*mui.init({
    subpages:[{
      url:"twopage.html",
      id:"twopage.html",
     styles:{
					top: '45px',
					bottom: '0px',
				}
    }]
  });*/
	/*var contentWebview = null;
		document.querySelector('header').addEventListener('doubletap',function () {
			if(contentWebview==null){
				contentWebview = plus.webview.currentWebview().children()[0];
			}
			contentWebview.evalJS("mui('.rangeMainBox').pullRefresh().scrollTo(0,0,100)");
		});*/

/*var hotRangeparams={
		"pageNumb":1
	}
 $('.rangeMainBox').dropload({//上拉加载
        scrollArea : window,
         domUp : {
            domClass   : 'dropload-up',
            domRefresh : '<div class="dropload-refresh">↓下拉刷新-魅客宝贝</div>',
            domUpdate  : '<div class="dropload-update">↑释放更新-魅客宝贝</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-魅客宝贝...</div>'
        },
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多-魅客宝贝</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-魅客宝贝...</div>',
            domNoData  : '<div class="dropload-noData">暂无数据-魅客宝贝</div>'
        },
         loadUpFn : function(me){
         	alert(3)
         },
        loadDownFn : function(me){
        	alert(1)
        	rangeFunction()

        }
       } )*/
/*mui.init({
				pullRefresh: {
					container: '.rangeMainBox',
					down: {
						callback: pulldownRefresh
					},
					up: {
						auto:true,
						contentrefresh: '正在加载...',
						callback: pullupRefresh
					}
				}
			});
*/

function pulldownRefresh() {
     //业务逻辑代码，比如通过ajax从服务器获取新数据；
 
     //注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
    
     alert(3)

    // mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
}

function pullupRefresh(){
	
		alert(4)
		var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+"/user/free/popularList.do",{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data
for(var i1=0;i1<hotRangData.length;i1++){
			rangeStr+='<li class="mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+1)+'</span><a href="javascript:;" class=""><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></a></li>'	
		}
		console.log(rangeStr)
		$('.rangerBox').append(rangeStr)
		hotRangeparams.pageNumb++;

	})
	//this.endPullupToRefresh((hotRangeparams.pageNumb==5));
}

$('.hotRange').on("tap",function(){
	rangeFunction();
	
})
function rangeFunction(){
	var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+"/user/free/popularList.do",{json:hotRangeparams1},function(res){
		var hotRangData=JSON.parse(res).data
		
		console.log(hotRangData)
		for(var i=0;i<3;i++){
			$('.one_three').find("img").eq(i).attr("src",hotRangData[i].photo);
			$('.one_three').find(".rangerName").eq(i).html(hotRangData[i].nickName);
			$('.one_three').find(".rangerAge").eq(i).html(hotRangData[i].age+"岁");
			$('.one_three').find(".rangerHeight").eq(i).html(hotRangData[i].height+"cm");
			$('.one_three').find(".rangerWeight").eq(i).html(hotRangData[i].weight+"kg");
			$('.one_three').find(".hadOrderNum").eq(i).html("已接"+hotRangData[i].haveOrder+"单");
		}
		for(var i1=0;i1<hotRangData.length;i1++){
			rangeStr+='<li class="mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+1)+'</span><a href="javascript:;" class=""><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></a></li>'	
		}
		$('.rangerBox').append(rangeStr)
		//hotRangeparams.pageNumb++;
	})
}