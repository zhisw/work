
require(['zepto', 'iscroll', 'listloading'], function(){
	    var hotRangeparams={
		"pageNumb":1
	}
	   var apiUrl='http://118.178.227.195:8088/meike-mener';
	   var numb=0;
	   var numb1=0;
	var one_three=''
	    var RangeUrl="/user/free/popularList.do"
	  $('.hotRange').on("click",function(){
	  	$('.trustRange').removeClass('titleBaclkground')
	  	$('.hotRange').addClass('titleBaclkground')
	  	numb++
	  	RangeUrl="/user/free/popularList.do";
	  	var hei = $(window).height()-160;
	  	$('#listloading, .listloadingClass').height(hei)
	  		one_three=$('.one_three').html()
	  		$('#listloading').html('<div><div class="one_three">'+one_three+'</div><ul class="rangerBox" id="order-list"></ul></div>')
	  		rangeDataLoad(RangeUrl)
	  })
	 $('.trustRange').on("click",function(){
	 	$('.hotRange').removeClass('titleBaclkground')
	 	$('.trustRange').addClass('titleBaclkground')
	 	/*firstTab=false;
	 	numb1++*/
	 	one_three=$('.one_three').html()
	  	RangeUrl="/user/free/creditList.do";
	  		var hei = $(window).height()-160;
	  		$('#listloading, .listloadingClass').height(hei);
	  		
	  		$('#listloading').html('<div><div class="one_three">'+one_three+'</div><ul class="rangerBox" id="order-list"></ul></div>')
	  		rangeDataLoad(RangeUrl)
	  
	 })

    var Listloading = require('listloading');
    var m = 3;
    var n = 0;
    var hei = $(window).height()-160;
    var arr = ['baby_food', 'carrycot', 'feeding_bottle', 'feeding_bottle2', 'tricycle', 'rattle', 'rattle6', 'mobile', 'pin', 'safety_seat', 'pin']
    // 创建iscroll之前必须要先设置父元素的高度，否则无法拖动iscroll
    $('#listloading, .listloadingClass').height(hei);
    // 模板
       
    // demo
  
 function rangeDataLoad(RangeUrl){
 	//alert("rangeDataLoad")
 var list1loading= new Listloading("#listloading", {
		disableTime: true,
	  pullUpAction : function(cb){   // 上拉加载更多   
        var __html=''
        hotRangeparams.pageNumb++;
      var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data
for(var i1=0;i1<hotRangData.length;i1++){
		__html+='<li class="mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><a href="javascript:;" class=""><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></a></li>'	

		
}				 $('#order-list').append(__html);
					//console.log(__html)
     			  var flg = false;
     			   cb(flg) 
        if(hotRangData.length==0){
        	 cb() 
        }
             
    })
       },	
       pullDownAction : function(cb, flg){
 	   hotRangeparams.pageNumb=1;
          var __html1=''
    var  hotRangeparams1=JSON.stringify(hotRangeparams);
    //alert(RangeUrl)
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data
			for(var i=0;i<3;i++){	
				$('.one_three').find("img").eq(i).attr("src",hotRangData[i].photo);
			$('.one_three').find(".rangerName").eq(i).html(hotRangData[i].nickName);
			$('.one_three').find(".rangerAge").eq(i).html(hotRangData[i].age+"岁");
			$('.one_three').find(".rangerHeight").eq(i).html(hotRangData[i].height+"cm");
			$('.one_three').find(".rangerWeight").eq(i).html(hotRangData[i].weight+"kg");
			$('.one_three').find(".hadOrderNum").eq(i).html("已接"+hotRangData[i].haveOrder+"单");
			}
for(var i1=3;i1<hotRangData.length;i1++){
	__html1+='<li class="mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+1)+'</span><a href="javascript:;" class=""><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></a></li>'	
}
    
	 $('#order-list').html(__html1);
	  cb()
	 
	 
 		})
	},
	Realtimetxt: '官人不要，请放开我！',
    loaderendtxt: '我是有底线的'
})
   } 	
   
   
   
 
/*  function rangeDataLoad1(RangeUrl){
  	
 	 hotRangeparams.pageNumb=1;
          var __html1=''
    var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data
			for(var i=0;i<3;i++){	
				$('.one_three1').find("img").eq(i).attr("src",hotRangData[i].photo);
			$('.one_three1').find(".rangerName").eq(i).html(hotRangData[i].nickName);
			$('.one_three1').find(".rangerAge").eq(i).html(hotRangData[i].age+"岁");
			$('.one_three1').find(".rangerHeight").eq(i).html(hotRangData[i].height+"cm");
			$('.one_three1').find(".rangerWeight").eq(i).html(hotRangData[i].weight+"kg");
			$('.one_three1').find(".hadOrderNum").eq(i).html("已接"+hotRangData[i].haveOrder+"单");
			}
for(var i1=3;i1<hotRangData.length;i1++){
	__html1+='<li class="mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+1)+'</span><a href="javascript:;" class=""><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></a></li>'	
}
	 $('#order-list1').html(__html1);
	 
 	})
   }*/
    
    var listloading = new Listloading('#listloading', {
    	
        disableTime: true,  // 是否需要显示时间
        pullUpAction : function(cb){   // 上拉加载更多   
        var __html=''
        hotRangeparams.pageNumb++;
      var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data
for(var i1=0;i1<hotRangData.length;i1++){
		__html+='<li class="mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><a href="javascript:;" class=""><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></a></li>'	

		
}				 $('#order-list').append(__html);
					//console.log(__html)
     			
     			
     			  var flg = false;
     			   cb(flg) 
        if(hotRangData.length==0){
        	 cb() 
        }
             
    })
        },
        pullDownAction : function(cb, flg){  // 下拉刷新
            // true则为默认加载 false为下拉刷新
             
           if (flg) {
                console.log('默认加载');
            }
          hotRangeparams.pageNumb=1;
          //alert(RangeUrl)
          var __html=''
    var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
		 alert("zepto")
			var hotRangData=JSON.parse(res).data
			for(var i=0;i<3;i++){	
				$('.one_three').find("img").eq(i).attr("src",hotRangData[i].photo);
			$('.one_three').find(".rangerName").eq(i).html(hotRangData[i].nickName);
			$('.one_three').find(".rangerAge").eq(i).html(hotRangData[i].age+"岁");
			$('.one_three').find(".rangerHeight").eq(i).html(hotRangData[i].height+"cm");
			$('.one_three').find(".rangerWeight").eq(i).html(hotRangData[i].weight+"kg");
			$('.one_three').find(".hadOrderNum").eq(i).html("已接"+hotRangData[i].haveOrder+"单");
			}
for(var i1=3;i1<hotRangData.length;i1++){
	__html+='<li class="mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+1)+'</span><a href="javascript:;" class=""><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></a></li>'	
}
    
	 $('#order-list').html(__html);
	 
	   cb();
	
	})
            // 执行完执行方法之后必须执行回调 回调的作用是通知默认加载已经全部执行完毕，程序需要去创建iscroll或者做下拉刷新动作
            //cb();
        },
        Realtimetxt: '官人不要，请放开我！',
        loaderendtxt: '我是有底线的',
        // iscroll的API 
        iscrollOptions: {
            scrollbars: true   // 显示iscroll滚动条
        }
    });
        
    // 点击事件
  /* listloading.evt('li', 'click', function (dom) {
       // dom.remove();
        listloading.refresh();
    });
    var li = document.getElementsByClassName('trustRange');*/

    /*for (var i = 0; i < li.length; i++) {
        li[i].onclick = (function(i) {
            return function () {
                console.log(i)
            }
        })(i);
    }*/

});

require.config({
    paths: {
        "zepto": "js/zepto.min",
        "iscroll": "js/iscroll.min",
        "listloading": "js/listloading.min"
    }
});