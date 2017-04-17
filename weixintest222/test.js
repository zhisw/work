
require(['zepto', 'iscroll', 'listloading','startScore','swiper'], function(){
	 var homeUrl='/user/free/homePage.do'
			 var  homePage={
				"pageNumb":"",
				"lat":"120.208643",
				"lag":"120.208643"
			} 
	    var hotRangeparams={
			"pageNumb":1
			}
	   var apiUrl='http://118.178.227.195:8088/meike-mener';
	   var numb=0;
	   var numb1=0;
	   var one_three=''
	    var RangeUrl="/user/free/popularList.do"
	   localStorage.page1Stop=false;
	   localStorage.page2Stop=false;
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
    $('#main').height(hei);
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
			var res=JSON.parse(res)
			if(res.code==200){
				
			
		if(RangeUrl=="/user/free/popularList.do"){
				for(var i1=0;i1<hotRangData.length;i1++){
			__html+='<a class="showDetail2"><li class="page2ListBox mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></li></a>'	
	}
		}
		if(RangeUrl=="/user/free/creditList.do"){
				for(var i1=0;i1<hotRangData.length;i1++){
		__html+='<a class="showDetail2"><li class="page2ListBox mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body"><div>'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span></div><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p> <div id="starttwo" class="block clearfix starttwo'+(i1+(hotRangeparams.pageNumb-1)*10)+'"><div  class="star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' star_score" style="height:19px;"></div><span class="fenshu  fenshu'+(i1+(hotRangeparams.pageNumb-1)*10)+'"></span></p></div></div><span class="rangeDatebtn rangeListBtn">约TA</span></li></a>'	
			}
		}	
$('#order-list').append(__html);

 for(var i1=0;i1<hotRangData.length;i1++){
 	var rateAvg=hotRangData[i1].rateAvg
 	//var rateAvg=3.4
 	 var rateAvgCount=parseInt((rateAvg*10)/10)
 	 //alert(rateAvgCount)
	  scoreFun($('.starttwo'+(i1+(hotRangeparams.pageNumb-1)*10)+''),{
           fen_d:21,//每一个a的宽度
           ScoreGrade:5//a的个数 10或者
       })
	  console.log(rateAvg)
	  
	  console.log(rateAvgCount)
	  if(rateAvg!=0){
	  	 $('.fenshu'+(i1+(hotRangeparams.pageNumb-1)*10)+'').html(rateAvg.toFixed(1))
		   $('.star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).attr('class',"clibg") 
		   var rateAvgCountWidth=rateAvg*18
		   $('.star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).css("width",rateAvgCountWidth)
   	}else{
   		 $('.fenshu'+(i1+(hotRangeparams.pageNumb-1)*10)+'').html(rateAvg.toFixed(1))
   		}
	}
  var flg = false;
     cb(flg)  
}else if(res.code==400){
	 cb(true) 
}   

 $('.showDetail2').on('tap',function(){
	  	$(".page2").addClass("positionPage2");
	  	$('#showDetail').show();
	  	localStorage.page2Stop=true;
	  })
 
    })
       },	
       pullDownAction : function(cb, flg){
 	   hotRangeparams.pageNumb=1;
          var __html1=''
    var  hotRangeparams1=JSON.stringify(hotRangeparams);
    //alert(RangeUrl)
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data;
			var __html1='';
		if(RangeUrl=="/user/free/popularList.do"){
			$(".creditList").hide();
			$(".popularList").show();
		for(var i=0;i<3;i++){	
			$('.one_three').find("img").eq(i).attr("src",hotRangData[i].photo);
			$('.one_three').find(".rangerName").eq(i).html(hotRangData[i].nickName);
			$('.one_three').find(".rangerAge").eq(i).html(hotRangData[i].age+"岁");
			$('.one_three').find(".rangerHeight").eq(i).html(hotRangData[i].height+"cm");
			$('.one_three').find(".rangerWeight").eq(i).html(hotRangData[i].weight+"kg");
			$('.one_three').find(".hadOrderNum").eq(i).html("已接"+hotRangData[i].haveOrder+"单");
		}
				for(var i1=3;i1<hotRangData.length;i1++){
			__html1+='<a class="showDetail2"><li class="page2ListBox mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></li></a>'	
	}
		}
		if(RangeUrl=="/user/free/creditList.do"){
			$(".creditList").show();
			$(".popularList").hide();
		for(var i=0;i<3;i++){	
			$('.one_three').find("img").eq(i).attr("src",hotRangData[i].photo);
			$('.one_three').find(".rangerName").eq(i).html(hotRangData[i].nickName);
			$('.one_three').find(".rangerAge").eq(i).html(hotRangData[i].age+"岁");
			$('.one_three').find(".rangerHeight").eq(i).html(hotRangData[i].height+"cm");
			$('.one_three').find(".rangerWeight").eq(i).html(hotRangData[i].weight+"kg");
			$('.one_three').find(".hadOrderNum").eq(i).html("已接"+hotRangData[i].haveOrder+"单");
		}
			
				for(var i1=3;i1<hotRangData.length;i1++){
		__html1+='<a class="showDetail2"><li class="page2ListBox mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p> <div id="starttwo" class="block clearfix starttwo'+(i1+(hotRangeparams.pageNumb-1)*10)+'"><div  class="star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' star_score" style="height:19px;"></div><span class="fenshu  fenshu'+(i1+(hotRangeparams.pageNumb-1)*10)+'"></span></p></div></div><span class="rangeDatebtn rangeListBtn">约TA</span></li></a>'	
			}
		}
	  $('#order-list').html(__html1);
	 for(var i1=0;i1<hotRangData.length;i1++){
 	var rateAvg=hotRangData[i1].rateAvg
 	//var rateAvg=3.4
 	 var rateAvgCount=parseInt((rateAvg*10)/10)
 	 //alert(rateAvgCount)
	  scoreFun($('.starttwo'+(i1+(hotRangeparams.pageNumb-1)*10)+''),{
           fen_d:21,//每一个a的宽度
           ScoreGrade:5//a的个数 10或者
      })
	  console.log(rateAvg)
	 
	  console.log(rateAvgCount)
	  if(rateAvg!=0){
	  		$('.fenshu'+(i1+(hotRangeparams.pageNumb-1)*10)+'').html(rateAvg.toFixed(1)) 
		   $('.star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).attr('class',"clibg") 
		   var rateAvgCountWidth=rateAvg*21
		   $('.star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).css("width",rateAvgCountWidth)
   		}else{
   			$('.fenshu'+(i1+(hotRangeparams.pageNumb-1)*10)+'').html(rateAvg.toFixed(1)) 
   		}
}
	  cb()
	  $('.showDetail2').on('tap',function(){
	  	$(".page2").addClass("positionPage2");
	  	$('#showDetail').show();
	  	localStorage.page2Stop=true;
	  })
	  
 		})
	},
	Realtimetxt: '官人不要，请放开我！',
    loaderendtxt: '我是有底线的'
})
   } 	
   
    
    	
  	$(".creditList").hide();
	$(".popularList").show();
    var listloading = new Listloading('#listloading', {
    	
        disableTime: true,  // 是否需要显示时间
        pullUpAction : function(cb){   // 上拉加载更多   
        var __html=''
        hotRangeparams.pageNumb++;
      var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data
			var res=JSON.parse(res)
			if(res.code==200){	
	for(var i1=0;i1<hotRangData.length;i1++){
			__html+='<a class="showDetail2"><li class="page2ListBox mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></li></a>'	
			
	}	
	$('#order-list').append(__html);
	 var flg = false;
     cb(flg)  
}else if(res.code==400){
	 cb(true) 
}		
     $('.showDetail2').on('tap',function(){
	  	$(".page2").addClass("positionPage2");
	  	$('#showDetail').show();
	  	localStorage.page2Stop=true;
	  }) 			        
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
	__html+='<a class="showDetail2"><li class="page2ListBox mui-table-view-cell mui-media"><span style="float: left;" class="rangeNumb">'+(i1+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div><span class="rangeDatebtn rangeListBtn">约TA</span></li></a>'	
}
    
	 $('#order-list').html(__html);
	 
	   cb();
	   
	    $('.showDetail2').on('tap',function(){
	  	$(".page2").addClass("positionPage2");
	  	$('#showDetail').show();
	  	localStorage.page2Stop=true;
	  })
	
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
        
        
        
        /*星星评分*/
        
        
      /*首页数据*/  
      
function homePageData(homeUrl){  
 var listloading = new Listloading('#main', {
        disableTime: true,  // 是否需要显示时间
        pullUpAction : function(cb){   // 上拉加载更多   
      		homePage.pageNumb= homePage.pageNumb+1;   		 
        	var homePagenumb=JSON.stringify(homePage);	
        	argument=homePagenumb;
        	var numb1=(homePage.pageNumb-1)*10
        	   $.ajax({
                type: 'post',
                url: apiUrl+homeUrl,
                data:{json:homePagenumb},
                async:true,
                success: function(res){		
                	//alert("succceess")
                	var res=JSON.parse(res);
                    var data=res.data.babyList;
                	var datalength=res.data.babyList.length;
                	if(res.code==400){
                		 cb(true)         		
                	}else{
                	var str=''
                	var str1=''
                	var str2=''
					var bubbleImg=""
                      for(var i = 0; i < datalength; i++){
                      	haveorderId.push(data[i].id);
                      	haveorderStatus.push(data[i].haveOrder);
               		for(var m=0;m<data[i].bestTags.length;m++){
               			if(data[i].bestTags[m]!=''){	
					 bubbleImg+='<div class="bubble'+m+' ">'+data[i].bestTags[m]+'</div><img src="images/circle.png" class="circle'+m+'">'
					}
               			}
    str+='<a class="showDetail" id="'+data[i].id+'"><div class="conent"><div class="imgbox"><img src='+data[i].showIndexImg+' alt="妹子图片" class="sisterimg"></a><img src="images/sister-bg.png" class="sisterbg"><img src='+data[i].gradeImg+' class="gradeImg">'+bubbleImg+'<div class="sisterinfo"><span class="sistername">'+data[i].nickName+'</span> <span class="number">'+data[i].orderCounter+'单</span> <span class="money">￥'+data[i].gradePrice+'</span><span class="moneyafter">.00</span></div><div class="distance"><span class="distancenum">'+data[i].distance+'</span><span class="afterdistance">km</span></div><div class="infobox"><span class="datebtn" id="'+data[i].id+'"    haveOrder="'+data[i].haveOrder+'"  ontouchend="clickme('+(i+numb1)+')">下单</span><div class="figure"><span class="age btn" >'+data[i].age+'岁</span><span class="height btn">'+data[i].height+'cm</span><span class="weight btn">'+data[i].weight+'kg</span></div><div class="serverrange"><span class="server">技能    </span></a>'
	 						
	 			for(var a=0;a<data[i].scaleName.length;a++){
	 			str1+='<span class="range1 btn">'+data[i].scaleName[a]+'</span>'
                	}
	 			str2="</div></div></div></div>"
	 			str+=str1+str2;
	 			str1='';
	 			$("#list").append(str);
	 			str=' '                    
                bubbleImg=" "
                    }    
               $('#list').append(str);	
                }
                	
                 var flg = false;
     			   cb(flg)   
     		$('.showDetail').on("tap",function(e){
            if ( e && e.stopPropagation ){
   			 		e.stopPropagation() 	
			}else{
    			window.event.cancelBubble = true; 
			}
			var babyId=$(this).attr("id")
			localStorage.page1Stop=true;
				$('#showDetail').fadeIn()
				$(".page1").hide();	
				console.log($(this).attr("id"))
				var showDetaiParams={
					"userId":"",
					"babyId":babyId
				}	
				console.log(showDetaiParams)
				var showDetaiParams=JSON.stringify(showDetaiParams)
				$.post(apiUrl+"/user/free/babyDetail.do",{json:showDetaiParams},function(res){
					console.log(res)
					var data=JSON.parse(res).data
					console.log(data)
					console.log(data.baby.background)
					$('.babyImgBox').css({'background':'url('+data.baby.background+')'})
					$('.babyImgBox').css({'backgroundSize':"100%" })
					$('.babyImg img').attr('src',data.baby.photo)
					$('.Baby_name').html(data.baby.nickName)
					$('.Baby_order').html(data.baby.haveOrder+"单")
					localStorage.detailRateAvg=data.rateAvg;
					$('.gradeBabyImg').attr("src",data.baby.gradeImg)
					$('.PriceNum').html(data.baby.gradePrice.toFixed(2))
				})
				
	//alert(data.baby.gradeImg)	
	/*详情页星星评分*/	
	var detailRateAvg=0
	var detailRateAvgCount=parseInt((localStorage.detailRateAvg*10)/10)
	detailRateAvg=localStorage.detailRateAvg;
			  scoreFun($('.starttwoBaby'),{
          		 	fen_d:21,//每一个a的宽度
          	 		ScoreGrade:5//a的个数 10或者
      	})
		if(localStorage.detailRateAvg!=0){
	  		$('.fenshuDetail').html(parseFloat(detailRateAvg).toFixed(1)) 
		   $('.star_scoreDetail a').eq(detailRateAvgCount-1).attr('class',"clibg") 
		   var detailRateAvgCountWidth=detailRateAvg*21;
		   $('.star_scoreDetail a').eq(detailRateAvgCount-1).css("width",detailRateAvgCountWidth)
   		}else{
   			$('.fenshuDetail').html(parseFloat(detailRateAvg).toFixed(1)) 
   		}		
   		
  
   		
             })  
              
            
            },
                error: function(xhr, type){
                    console.log('Ajax error!');
                }
                
                 
            }); 
					//console.log(__html)
        },
        pullDownAction : function(cb, flg){  // 下拉刷新
            // true则为默认加载 false为下拉刷新 
           if (flg) {
                console.log('默认加载');
           }
    var  hotRangeparams1=JSON.stringify(hotRangeparams);
		 homePage.pageNumb= 1;   		 
        	var homePagenumb=JSON.stringify(homePage);	
        	argument=homePagenumb;
        	var numb1=(homePage.pageNumb-1)*10
        	   $.ajax({
                type: 'post',
                url: apiUrl+homeUrl,
                data:{json:homePagenumb},
                async:true,
                success: function(res){	
                	var res=JSON.parse(res);
                	console.log(res)
                    var data=res.data.babyList;
                	var datalength=res.data.babyList.length;
                	if(res.code==400){
                		$('.dropload-load').html('暂无数据')
                		alert('别再扯啦，请下载APP查看更多宝贝')        		
                	}else{
                	var str=''
                	var str1=''
                	var str2=''
					var bubbleImg=""
                      for(var i = 0; i < datalength; i++){
               		for(var m=0;m<data[i].bestTags.length;m++){
               			if(data[i].bestTags[m]!=''){	
					 bubbleImg+='<div class="bubble'+m+' ">'+data[i].bestTags[m]+'</div><img src="images/circle.png" class="circle'+m+'">'
					}
               			}
    str+='<a class="showDetail" id="'+data[i].id+'"><div class="conent"><div class="imgbox"><img src='+data[i].showIndexImg+' alt="妹子图片" class="sisterimg"></a><img src="images/sister-bg.png" class="sisterbg"><img src='+data[i].gradeImg+' class="gradeImg">'+bubbleImg+'<div class="sisterinfo"><span class="sistername">'+data[i].nickName+'</span> <span class="number">'+data[i].orderCounter+'单</span> <span class="money">￥'+data[i].gradePrice+'</span><span class="moneyafter">.00</span></div><div class="distance"><span class="distancenum">'+data[i].distance+'</span><span class="afterdistance">km</span></div><div class="infobox"><span class="datebtn" id="'+data[i].id+'"    haveOrder="'+data[i].haveOrder+'"  ontouchend="clickme('+(i+numb1)+')">下单</span><div class="figure"><span class="age btn" >'+data[i].age+'岁</span><span class="height btn">'+data[i].height+'cm</span><span class="weight btn">'+data[i].weight+'kg</span></div><div class="serverrange"><span class="server">技能    </span></a>'
	 						
	 			for(var a=0;a<data[i].scaleName.length;a++){
	 			str1+='<span class="range1 btn">'+data[i].scaleName[a]+'</span>'
                	}
	 			str2="</div></div></div></div>"
	 			str+=str1+str2;
	 			str1='';
	 			$("#list").append(str);
	 			str=' '                    
                bubbleImg=" "
                    }    
               $('#list').append(str);
                	} 
        	 cb() 
        	
        	/*首页图片点击进入详情*/	
        	$('.showDetail').on("tap",function(e){
            if ( e && e.stopPropagation ){
   			 		e.stopPropagation() 	
			}else{
    			window.event.cancelBubble = true; 
			}
			var babyId=$(this).attr("id")
			localStorage.page1Stop=true;
				$('#showDetail').fadeIn()
				$(".page1").hide();	
				console.log($(this).attr("id"))
				var showDetaiParams={
					"userId":"",
					"babyId":babyId
				}	
				console.log(showDetaiParams)
				var showDetaiParams=JSON.stringify(showDetaiParams)
				$.post(apiUrl+"/user/free/babyDetail.do",{json:showDetaiParams},function(res){
					console.log(res)
					var data=JSON.parse(res).data
					console.log(data)
					console.log(data.baby.background)
					$('.babyImgBox').css({'background':'url('+data.baby.background+')'})
					$('.babyImgBox').css({'backgroundSize':"100%" })
					$('.babyImg img').attr('src',data.baby.photo)
					$('.Baby_name').html(data.baby.nickName)
					$('.Baby_order').html(data.baby.haveOrder+"单")
					localStorage.detailRateAvg=data.rateAvg;
					$('.gradeBabyImg').attr("src",data.baby.gradeImg)
					$('.PriceNum').html(data.baby.gradePrice.toFixed(2))
				})
				
	//alert(data.baby.gradeImg)	
	/*详情页星星评分*/	
	var detailRateAvg=0
	var detailRateAvgCount=parseInt((localStorage.detailRateAvg*10)/10)
	detailRateAvg=localStorage.detailRateAvg;
			  scoreFun($('.starttwoBaby'),{
          		 	fen_d:21,//每一个a的宽度
          	 		ScoreGrade:5//a的个数 10或者
      	})
		if(localStorage.detailRateAvg!=0){
	  		$('.fenshuDetail').html(parseFloat(detailRateAvg).toFixed(1)) 
		   $('.star_scoreDetail a').eq(detailRateAvgCount-1).attr('class',"clibg") 
		   var detailRateAvgCountWidth=detailRateAvg*21;
		   $('.star_scoreDetail a').eq(detailRateAvgCount-1).css("width",detailRateAvgCountWidth)
   		}else{
   			$('.fenshuDetail').html(parseFloat(detailRateAvg).toFixed(1)) 
   		}
   	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
   	});
   		//$('.gradeBabyImg').attr("src",data.baby.gradeImg)
   		
   		
				
             }) 	
                },
                error: function(xhr, type){
                    console.log('Ajax error!');
                }    
            }); 
        },
        Realtimetxt: '官人不要，请放开我！',
        loaderendtxt: '我是有底线的',
        // iscroll的API 
        iscrollOptions: {
            scrollbars: true   // 显示iscroll滚动条
        }
    });
   }
	homePageData(homeUrl)
	
	
		$('.grade').on("touchend",function(){
			$('#main').html('<div><div class="list" id="list"></div></div>')
			homeUrl="/user/free/gradeList.do";
			homePageData(homeUrl)
		})
		
		$('.distanced').on("touchend",function(){
			$('#main').html('<div><div class="list" id="list"></div></div>')
			homeUrl="/user/free/distanceList.do";
			homePageData(homeUrl)
		})
		$('.new').on("touchend",function(){
			$('#main').html('<div><div class="list" id="list"></div></div>')
			homeUrl="/user/free/newList.do";
			homePageData(homeUrl)
		})
		$('.More').on("touchend",function(){
			$('#main').html('<div><div class="list" id="list"></div></div>')
			homeUrl="/user/free/filtrateBaby.do";
			homePageData(homeUrl)
		})

		$('.serchbox a').on("tap",function(){
			$(this).addClass("blueBottom").siblings().removeClass('blueBottom')
		})
			 
});

require.config({
    paths: {
        "zepto": "js/zepto.min",
        "iscroll": "js/iscroll.min",
        "listloading": "js/listloading.min",
        "startScore":"js/startScore",
        "swiper":"js/swiper.min"
        
    }
});