
require(['zepto', 'iscroll', 'listloading','startScore','swiper'], function(){
	 var homeUrl='/user/free/gradeList.do'
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
	   localStorage.concernStop=false;
	  $('.hotRange').on("click",function(){
	  	$('.trustRange').removeClass('titleBaclkground')
	  	$('.hotRange').addClass('titleBaclkground')
	  	//$('.imgId').addClass('showDetail2')
	  //	$('.imgId').removeClass('showDetail')
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
	 	/*$('.imgId').addClass('showDetail')
	  	$('.imgId').removeClass('showDetail2')*/
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
    //$('.detailBox').height(hei)
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
        var numb1=(hotRangeparams.pageNumb-1)*10;
      var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data
			var res=JSON.parse(res)
			if(res.code==200){
				
			
		if(RangeUrl=="/user/free/popularList.do"){
				for(var i1=0;i1<hotRangData.length;i1++){
			__html+='<a class="showDetail2 mui-table-view" id="'+hotRangData[i1].id+'"><li class="page2ListBox mui-table-view-cell mui-media"><span class="detailTap" id="'+hotRangData[i1].id+'"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div></span><span class="rangeDatebtn rangeListBtn" id="'+hotRangData[i1].id+'"   ontouchend="clickme2('+(i1+numb1)+')">约TA</span></li></a>'	
	}
		}
		if(RangeUrl=="/user/free/creditList.do"){
				for(var i1=0;i1<hotRangData.length;i1++){
		__html+='<a class="showDetail2 mui-table-view"  ><li class="page2ListBox mui-table-view-cell mui-media"><span class="detailTap" id="'+hotRangData[i1].id+'"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body"><div>'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span></div><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p> <div id="starttwo" class="block clearfix starttwo'+(i1+(hotRangeparams.pageNumb-1)*10)+'"><div  class="star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' star_score" style="height:19px;"></div><span class="fenshu  fenshu'+(i1+(hotRangeparams.pageNumb-1)*10)+'"></span></p></div></div></span><span class="rangeDatebtn rangeListBtn" id="'+hotRangData[i1].id+'"  ontouchend="clickme2('+(i1+numb1)+')">约TA</span></li></a>'	
			}
		}	
$('#order-list').append(__html);

 for(var i1=0;i1<hotRangData.length;i1++){
 	var rateAvg=hotRangData[i1].rateAvg
 	var rateAvgCount=parseInt((rateAvg*10)/10)
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
   		  $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   		$('.star_scoreDetail a').eq(0).removeClass("clibg")
   		}
	}
  var flg = false;
     cb(flg)  
}else if(res.code==400){
	 cb(true) 
}   

	  $('.detailTap').on('tap',function(e){
	  	
	  	$(".page2").addClass("positionPage2");
	  	$('#showDetail').show();
	  	localStorage.page2Stop=true;
	  	$(".detaiWrapper").scrollTop(0)
	  	var swiperStr='';
        //$('.mui-bar-tab~.mui-content').css('paddingTop',0)
       // $('.mui-bar-tab~.mui-content').css('paddingBottom',0)
           if ( e && e.stopPropagation ){
   			 		e.stopPropagation() 	
			}else{
    			window.event.cancelBubble = true; 
			}
			var babyId=$(this).attr("id")
			
				console.log($(this).attr("id"))
				var showDetaiParams={
					"userId":sessionStorage.userId,
					"babyId":babyId
				}	
				console.log(showDetaiParams)
				var showDetaiParams=JSON.stringify(showDetaiParams)
				$.post(apiUrl+"/user/free/babyDetail.do",{json:showDetaiParams},function(res){
					//alert(2)
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
					$('.imgNum').html(data.showImgs.length)
					$(".babyAge").html(data.baby.age+"岁")
					$(".babyHeight").html(data.baby.height+"cm")
					$(".babyWeight").html(data.baby.weight+"kg")
					$(".babyThreeNum").html(data.baby.bwh)
					$(".babyConstellation").html(data.baby.sign)
					$(".babyAdress").html(data.baby.origo)
					$(".babyClassess").html(data.baby.selfRate)
					$(".babyGlamour").html(data.baby.charm)
					$(".babyFace").html(data.baby.face)
					$(".babyBody").html(data.baby.shape)
					$(".babyHairstyle").html(data.baby.haird)
					$(".babybloodType").html(data.baby.blood)
					$(".babyNation").html(data.baby.nation)
					$('.concerned').attr('babyId',babyId)
					$('.concerned').attr('isAttention',data.isAttention)
					for(var i=0;i<data.showImgs.length;i++){
						swiperStr+='<div class="swiper-slide"><img src="'+data.showImgs[i]+'" class="swipwerImg"  data-preview-src="" data-preview-group="1"  /></div>'
					}
					$('.swiper-wrapper').html(swiperStr)	
					isDate(babyId)
					$('.goDate').attr('babyId',babyId)
					$('.concerned').attr('babyId',babyId)
					$('.concerned').attr('isAttention',data.isAttention)
						if(data.isAttention=='1'){
			 			$('.concernImg').attr('src',"images/hadConcern.png")
			 			$('.concernTitle').html("已关注")
			 		}else if(data.isAttention=='2'){
			 			$('.concernImg').attr('src',"images/noConcern.png")
			 			$('.concernTitle').html("关注")
			 		}
				})
	//详情页星星评分	
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
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
   	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
         observer:true,
        observeParents:true,	
        initialSlide :1,
   	});	
	 })
    })
       },	
       pullDownAction : function(cb, flg){
 	   hotRangeparams.pageNumb=1;
 	   var numb1=(hotRangeparams.pageNumb-1)*10
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
			$('.one_three').find(".imgId").eq(i).attr("id",hotRangData[i].id)
			$('.one_three').find(".rangeDatebtn").eq(i).attr("id",hotRangData[i].id)
			$('.one_three').find("img").eq(i).attr("src",hotRangData[i].photo);
			$('.one_three').find(".rangerName").eq(i).html(hotRangData[i].nickName);
			$('.one_three').find(".rangerAge").eq(i).html(hotRangData[i].age+"岁");
			$('.one_three').find(".rangerHeight").eq(i).html(hotRangData[i].height+"cm");
			$('.one_three').find(".rangerWeight").eq(i).html(hotRangData[i].weight+"kg");
			$('.one_three').find(".hadOrderNum").eq(i).html("已接"+hotRangData[i].haveOrder+"单");
		}
				for(var i1=3;i1<hotRangData.length;i1++){
			__html1+='<a class="showDetail2 mui-table-view" ><li class="page2ListBox mui-table-view-cell mui-media"><span class="detailTap" id="'+hotRangData[i1].id+'"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div></span><span class="rangeDatebtn rangeListBtn" id="'+hotRangData[i1].id+'"   ontouchend="clickme2('+(i1+numb1)+')">约TA</span></li></a>'	
	}
		}
		if(RangeUrl=="/user/free/creditList.do"){
			$(".creditList").show();
			$(".popularList").hide();
		for(var i=0;i<3;i++){
			$('.one_three').find(".imgId").eq(i).attr("id",hotRangData[i].id)
			$('.one_three').find(".rangeDatebtn").eq(i).attr("id",hotRangData[i].id)
			$('.one_three').find("img").eq(i).attr("src",hotRangData[i].photo);
			$('.one_three').find(".rangerName").eq(i).html(hotRangData[i].nickName);
			$('.one_three').find(".rangerAge").eq(i).html(hotRangData[i].age+"岁");
			$('.one_three').find(".rangerHeight").eq(i).html(hotRangData[i].height+"cm");
			$('.one_three').find(".rangerWeight").eq(i).html(hotRangData[i].weight+"kg");
			$('.one_three').find(".hadOrderNum").eq(i).html("已接"+hotRangData[i].haveOrder+"单");
		}
			
				for(var i1=3;i1<hotRangData.length;i1++){
		__html1+='<a class="showDetail2 mui-table-view" id="'+hotRangData[i1].id+'"><li class="page2ListBox mui-table-view-cell mui-media"><span class="detailTap" id="'+hotRangData[i1].id+'"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p> <div id="starttwo" class="block clearfix starttwo'+(i1+(hotRangeparams.pageNumb-1)*10)+'"><div  class="star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' star_score" style="height:19px;"></div><span class="fenshu  fenshu'+(i1+(hotRangeparams.pageNumb-1)*10)+'"></span></p></div></div></span><span class="rangeDatebtn rangeListBtn" id="'+hotRangData[i1].id+'"  ontouchend="clickme2('+(i1+numb1)+')">约TA</span></li></a>'	
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
	  var detailRateAvg=0
	  if(rateAvg!=0){
	  		$('.fenshu'+(i1+(hotRangeparams.pageNumb-1)*10)+'').html(rateAvg.toFixed(1)) 
		   $('.star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).attr('class',"clibg") 
		   var rateAvgCountWidth=rateAvg*21
		   $('.star_score'+(i1+(hotRangeparams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).css("width",rateAvgCountWidth)
   		}else{
   			$('.fenshuDetail').html(parseFloat(detailRateAvg).toFixed(1)) 
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
}
	  cb()
	  /*$('.showDetail2').on('tap',function(){
	  	$(".page2").addClass("positionPage2");
	  	$('#showDetail').show();
	  	localStorage.page2Stop=true;
	  })*/
	 /*点击进入详情*/
	  $('.detailTap').on('tap',function(e){
	  	$(".page2").addClass("positionPage2");
	  	$('#showDetail').show();
	  	localStorage.page2Stop=true;
	  	$(".detaiWrapper").scrollTop(0)
	  	var swiperStr='';
        //$('.mui-bar-tab~.mui-content').css('paddingTop',0)
        //$('.mui-bar-tab~.mui-content').css('paddingBottom',0)
           if ( e && e.stopPropagation ){
   			 		e.stopPropagation() 	
			}else{
    			window.event.cancelBubble = true; 
			}
			var babyId=$(this).attr("id")
			
				console.log($(this).attr("id"))
				var showDetaiParams={
					"userId":sessionStorage.userId,
					"babyId":babyId
				}	
				console.log(showDetaiParams)
				var showDetaiParams=JSON.stringify(showDetaiParams)
				$.post(apiUrl+"/user/free/babyDetail.do",{json:showDetaiParams},function(res){
					//alert(2)
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
					$('.imgNum').html(data.showImgs.length)
					$(".babyAge").html(data.baby.age+"岁")
					$(".babyHeight").html(data.baby.height+"cm")
					$(".babyWeight").html(data.baby.weight+"kg")
					$(".babyThreeNum").html(data.baby.bwh)
					$(".babyConstellation").html(data.baby.sign)
					$(".babyAdress").html(data.baby.origo)
					$(".babyClassess").html(data.baby.selfRate)
					$(".babyGlamour").html(data.baby.charm)
					$(".babyFace").html(data.baby.face)
					$(".babyBody").html(data.baby.shape)
					$(".babyHairstyle").html(data.baby.haird)
					$(".babybloodType").html(data.baby.blood)
					$(".babyNation").html(data.baby.nation)
					for(var i=0;i<data.showImgs.length;i++){
						swiperStr+='<div class="swiper-slide"><img src="'+data.showImgs[i]+'" class="swipwerImg"  data-preview-src="" data-preview-group="1"  /></div>'
					}
					$('.swiper-wrapper').html(swiperStr)
					isDate(babyId)//判断是否在约宝内
					$('.goDate').attr('babyId',babyId)
					$('.concerned').attr('babyId',babyId)
					$('.concerned').attr('isAttention',data.isAttention)
					if(data.isAttention=='1'){
			 			$('.concernImg').attr('src',"images/hadConcern.png")
			 			$('.concernTitle').html("已关注")
			 		}else if(data.isAttention=='2'){
			 			$('.concernImg').attr('src',"images/noConcern.png")
			 			$('.concernTitle').html("关注")
			 		}
				})
	//详情页星星评分	
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
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
   	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
         observer:true,
        observeParents:true,	
        initialSlide :1,
   	});	
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
       	var numb1=(hotRangeparams.pageNumb-1)*10
      var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data
			var res=JSON.parse(res)
			if(res.code==200){	
	for(var i1=0;i1<hotRangData.length;i1++){
			__html+='<a class="showDetail2 mui-table-view" id="'+hotRangData[i1].id+'"><li class="page2ListBox mui-table-view-cell mui-media"><span class="detailTap2" id="'+hotRangData[i1].id+'"><span style="float: left;" class="rangeNumb">'+(i1+(hotRangeparams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div></span><span class="rangeDatebtn rangeListBtn" id="'+hotRangData[i1].id+'"  ontouchend="clickme2('+(i1+numb1)+')">约TA</span></li></a>'	
			
	}	
	$('#order-list').append(__html);
	 var flg = false;
     cb(flg)  
}else if(res.code==400){
	 cb(true) 
}		
     $('.detailTap2').on('tap',function(e){
     	//$('.mui-bar-tab~.mui-content').css('paddingTop',0)
       // $('.mui-bar-tab~.mui-content').css('paddingBottom',0)
	  	$(".page2").addClass("positionPage2");
	  	$('#showDetail').show();
	  	localStorage.page2Stop=true;
	  	//$("body").scrollTop(0)
	  	$(".detaiWrapper").scrollTop(0)
	  	var swiperStr='';
        	//$('.mui-bar-tab~.mui-content').css('paddingTop',0)
           if ( e && e.stopPropagation ){
   			 		e.stopPropagation() 	
			}else{
    			window.event.cancelBubble = true; 
			}
			var babyId=$(this).attr("id")
			
				console.log($(this).attr("id"))
				var showDetaiParams={
					"userId":sessionStorage.userId,
					"babyId":babyId
				}	
				console.log(showDetaiParams)
				var showDetaiParams=JSON.stringify(showDetaiParams)
				$.post(apiUrl+"/user/free/babyDetail.do",{json:showDetaiParams},function(res){
					//alert(2)
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
					$('.imgNum').html(data.showImgs.length)
					$(".babyAge").html(data.baby.age+"岁")
					$(".babyHeight").html(data.baby.height+"cm")
					$(".babyWeight").html(data.baby.weight+"kg")
					$(".babyThreeNum").html(data.baby.bwh)
					$(".babyConstellation").html(data.baby.sign)
					$(".babyAdress").html(data.baby.origo)
					$(".babyClassess").html(data.baby.selfRate)
					$(".babyGlamour").html(data.baby.charm)
					$(".babyFace").html(data.baby.face)
					$(".babyBody").html(data.baby.shape)
					$(".babyHairstyle").html(data.baby.haird)
					$(".babybloodType").html(data.baby.blood)
					$(".babyNation").html(data.baby.nation)
					
					for(var i=0;i<data.showImgs.length;i++){
						swiperStr+='<div class="swiper-slide"><img src="'+data.showImgs[i]+'" class="swipwerImg"  data-preview-src="" data-preview-group="1"  /></div>'
					}
					$('.swiper-wrapper').html(swiperStr)
					isDate(babyId)
					$('.goDate').attr('babyId',babyId)
					$('.concerned').attr('babyId',babyId)
					$('.concerned').attr('isAttention',data.isAttention)
						if(data.isAttention=='1'){
			 			$('.concernImg').attr('src',"images/hadConcern.png")
			 			$('.concernTitle').html("已关注")
			 		}else if(data.isAttention=='2'){
			 			$('.concernImg').attr('src',"images/noConcern.png")
			 			$('.concernTitle').html("关注")
			 		}
				})
	//详情页星星评分	
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
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
   	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
         observer:true,
        observeParents:true,	
        initialSlide :1,
   	});	
	  }) 			        
    })
        },
        pullDownAction : function(cb, flg){  // 下拉刷新
            // true则为默认加载 false为下拉刷新   
           if (flg) {
                console.log('默认加载');
            }
          hotRangeparams.pageNumb=1;
          	var numb1=(hotRangeparams.pageNumb-1)*10
          //alert(RangeUrl)
          var __html=''
    var  hotRangeparams1=JSON.stringify(hotRangeparams);
	$.post(apiUrl+RangeUrl,{json:hotRangeparams1},function(res){
			var hotRangData=JSON.parse(res).data
			for(var i=0;i<3;i++){
			$('.one_three').find(".imgId").eq(i).attr("id",hotRangData[i].id);
			$('.one_three').find(".rangeDatebtn").eq(i).attr("id",hotRangData[i].id)
			$('.one_three').find("img").eq(i).attr("src",hotRangData[i].photo);
			$('.one_three').find(".rangerName").eq(i).html(hotRangData[i].nickName);
			$('.one_three').find(".rangerAge").eq(i).html(hotRangData[i].age+"岁");
			$('.one_three').find(".rangerHeight").eq(i).html(hotRangData[i].height+"cm");
			$('.one_three').find(".rangerWeight").eq(i).html(hotRangData[i].weight+"kg");
			$('.one_three').find(".hadOrderNum").eq(i).html("已接"+hotRangData[i].haveOrder+"单");
			}
for(var i1=3;i1<hotRangData.length;i1++){
	__html+='<a class="showDetail2 mui-table-view" id="'+hotRangData[i1].id+'"><li class="page2ListBox mui-table-view-cell mui-media"><span class="detailTap2" id="'+hotRangData[i1].id+'"><span style="float: left;" class="rangeNumb">'+(i1+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p><p class="hadOrderNum">已接'+hotRangData[i1].haveOrder+'单</p></div></span><span class="rangeDatebtn rangeListBtn" id="'+hotRangData[i1].id+'"  ontouchend="clickme2('+(i1+numb1)+')">约TA</span></li></a>'	
}
    
	 $('#order-list').html(__html);
	 
	   cb();
	   
	
	 $('.detailTap2').on('tap',function(e){
	  	$(".page2").addClass("positionPage2");
	  	$('#showDetail').show();
	  	localStorage.page2Stop=true;
	  	$(".detaiWrapper").scrollTop(0)
	  	var swiperStr='';
      
           if ( e && e.stopPropagation ){
   			 		e.stopPropagation() 	
			}else{
    			window.event.cancelBubble = true; 
			}
			var babyId=$(this).attr("id")
			
				console.log($(this).attr("id"))
				var showDetaiParams={
					"userId":sessionStorage.userId,
					"babyId":babyId
				}	
				console.log(showDetaiParams)
				var showDetaiParams=JSON.stringify(showDetaiParams)
				$.post(apiUrl+"/user/free/babyDetail.do",{json:showDetaiParams},function(res){
					//alert(2)
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
					$('.imgNum').html(data.showImgs.length)
					$(".babyAge").html(data.baby.age+"岁")
					$(".babyHeight").html(data.baby.height+"cm")
					$(".babyWeight").html(data.baby.weight+"kg")
					$(".babyThreeNum").html(data.baby.bwh)
					$(".babyConstellation").html(data.baby.sign)
					$(".babyAdress").html(data.baby.origo)
					$(".babyClassess").html(data.baby.selfRate)
					$(".babyGlamour").html(data.baby.charm)
					$(".babyFace").html(data.baby.face)
					$(".babyBody").html(data.baby.shape)
					$(".babyHairstyle").html(data.baby.haird)
					$(".babybloodType").html(data.baby.blood)
					$(".babyNation").html(data.baby.nation)
					
					for(var i=0;i<data.showImgs.length;i++){
						swiperStr+='<div class="swiper-slide"><img src="'+data.showImgs[i]+'" class="swipwerImg"  data-preview-src="" data-preview-group="1"  /></div>'
					}
					$('.swiper-wrapper').html(swiperStr)
					isDate(babyId)
					$('.goDate').attr('babyId',babyId)
					$('.concerned').attr('babyId',babyId)
					$('.concerned').attr('isAttention',data.isAttention)
						if(data.isAttention=='1'){
			 			$('.concernImg').attr('src',"images/hadConcern.png")
			 			$('.concernTitle').html("已关注")
			 		}else if(data.isAttention=='2'){
			 			$('.concernImg').attr('src',"images/noConcern.png")
			 			$('.concernTitle').html("关注")
			 		}
					
				})
	//详情页星星评分	
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
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
   	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
         observer:true,
        observeParents:true,	
        initialSlide :1,
   	});	
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
      
function homePageData(homeUrl,params){  
 var listloading = new Listloading('#main', {
        disableTime: true,  // 是否需要显示时间
        pullUpAction : function(cb){   // 上拉加载更多   
      		params.pageNumb= params.pageNumb+1;   		 
        	var homePagenumb=JSON.stringify(params);	
        	argument=homePagenumb;
        	var numb1=(params.pageNumb-1)*10
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
    str+='<li class="showDetail" id="'+data[i].id+'"><div class="conent"><div class="imgbox"><img src='+data[i].showIndexImg+' alt="妹子图片" class="sisterimg"></a><img src="images/sister-bg.png" class="sisterbg"><img src='+data[i].gradeImg+' class="gradeImg">'+bubbleImg+'<div class="sisterinfo"><span class="sistername">'+data[i].nickName+'</span> <span class="number">'+data[i].orderCounter+'单</span> <span class="money">￥'+data[i].gradePrice+'</span><span class="moneyafter">.00</span></div><div class="distance"><span class="distancenum">'+data[i].distance+'</span><span class="afterdistance">km</span></div></li><div class="infobox"><span class="datebtn" id="'+data[i].id+'"    haveOrder="'+data[i].haveOrder+'"  ontouchend="clickme('+(i+numb1)+')">下单</span><div class="figure"><span class="age btn" >'+data[i].age+'岁</span><span class="height btn">'+data[i].height+'cm</span><span class="weight btn">'+data[i].weight+'kg</span></div><div class="serverrange"><span class="server">技能    </span>'
	 						
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
        	var swiperStr='';
        	//$('.mui-bar-tab~.mui-content').css('paddingTop',0)
            if ( e && e.stopPropagation ){
   			 		e.stopPropagation() 	
			}else{
    			window.event.cancelBubble = true; 
			}
			var babyId=$(this).attr("id")
			localStorage.page1Stop=true;
			$(".detaiWrapper").scrollTop(0)
				$('#showDetail').fadeIn()
				$(".page1").hide();	
				console.log($(this).attr("id"))
				var showDetaiParams={
					"userId":sessionStorage.userId,
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
					$('.imgNum').html(data.showImgs.length)
					$(".babyAge").html(data.baby.age+"岁")
					$(".babyHeight").html(data.baby.height+"cm")
					$(".babyWeight").html(data.baby.weight+"kg")
					$(".babyThreeNum").html(data.baby.bwh)
					$(".babyConstellation").html(data.baby.sign)
					$(".babyAdress").html(data.baby.origo)
					$(".babyClassess").html(data.baby.selfRate)
					$(".babyGlamour").html(data.baby.charm)
					$(".babyFace").html(data.baby.face)
					$(".babyBody").html(data.baby.shape)
					$(".babyHairstyle").html(data.baby.haird)
					$(".babybloodType").html(data.baby.blood)
					$(".babyNation").html(data.baby.nation)
					
					
					for(var i=0;i<data.showImgs.length;i++){
						swiperStr+='<div class="swiper-slide"><img src="'+data.showImgs[i]+'" class="swipwerImg"  data-preview-src="" data-preview-group="1"  /></div>'
					}
					$('.swiper-wrapper').html(swiperStr)
					
					isDate(babyId)
					$('.goDate').attr('babyId',babyId)
					$('.concerned').attr('babyId',babyId)
					$('.concerned').attr('isAttention',data.isAttention)
						if(data.isAttention=='1'){
			 			$('.concernImg').attr('src',"images/hadConcern.png")
			 			$('.concernTitle').html("已关注")
			 		}else if(data.isAttention=='2'){
			 			$('.concernImg').attr('src',"images/noConcern.png")
			 			$('.concernTitle').html("关注")
			 		}
				})
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
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
   	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
         observer:true,
        observeParents:true,	
        initialSlide :1,
   	});
	
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
    	var  hotRangeparams1=JSON.stringify(params);
			 params.pageNumb= 1;   		 
        	var homePagenumb=JSON.stringify(params);	
        	argument=homePagenumb;
        	var numb1=(params.pageNumb-1)*10
        	
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
    str+='<li class="showDetail" id="'+data[i].id+'"><div class="conent"><div class="imgbox"><img src='+data[i].showIndexImg+' alt="妹子图片" class="sisterimg"></a><img src="images/sister-bg.png" class="sisterbg"><img src='+data[i].gradeImg+' class="gradeImg">'+bubbleImg+'<div class="sisterinfo"><span class="sistername">'+data[i].nickName+'</span> <span class="number">'+data[i].orderCounter+'单</span> <span class="money">￥'+data[i].gradePrice+'</span><span class="moneyafter">.00</span></div><div class="distance"><span class="distancenum">'+data[i].distance+'</span><span class="afterdistance">km</span></div></li><div class="infobox"><span class="datebtn" id="'+data[i].id+'"    haveOrder="'+data[i].haveOrder+'"  ontouchend="clickme('+(i+numb1)+')">下单</span><div class="figure"><span class="age btn" >'+data[i].age+'岁</span><span class="height btn">'+data[i].height+'cm</span><span class="weight btn">'+data[i].weight+'kg</span></div><div class="serverrange"><span class="server">技能    </span>'
	 						
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
        	var swiperStr='';
        	//$('.mui-bar-tab~.mui-content').css('paddingTop',0)
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
					"userId":sessionStorage.userId,
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
					$('.imgNum').html(data.showImgs.length);
					$(".babyAge").html(data.baby.age+"岁")
					$(".babyHeight").html(data.baby.height+"cm")
					$(".babyWeight").html(data.baby.weight+"kg")
					$(".babyThreeNum").html(data.baby.bwh)
					$(".babyConstellation").html(data.baby.sign)
					$(".babyAdress").html(data.baby.origo)
					$(".babyClassess").html(data.baby.selfRate)
					$(".babyGlamour").html(data.baby.charm)
					$(".babyFace").html(data.baby.face)
					$(".babyBody").html(data.baby.shape)
					$(".babyHairstyle").html(data.baby.haird)
					$(".babybloodType").html(data.baby.blood)
					$(".babyNation").html(data.baby.nation)
					$('.goDate').attr('babyId',babyId)
					for(var i=0;i<data.showImgs.length;i++){
						swiperStr+='<div class="swiper-slide"><img src="'+data.showImgs[i]+'" class="swipwerImg"  data-preview-src="" data-preview-group="1"  /></div>'
					}
					$('.swiper-wrapper').html(swiperStr)
					isDate(babyId)
					$('.concerned').attr('babyId',babyId)
					$('.concerned').attr('isAttention',data.isAttention)
					if(data.isAttention=='1'){
			 			$('.concernImg').attr('src',"images/hadConcern.png")
			 			$('.concernTitle').html("已关注")
			 		}else if(data.isAttention=='2'){
			 			$('.concernImg').attr('src',"images/noConcern.png")
			 			$('.concernTitle').html("关注")
			 		}
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
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   			
   		}
   	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
         observer:true,
        observeParents:true,	
        freeMode : true
   	});
	
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
	homePageData(homeUrl,homePage)
	
	
		$('.grade').on("touchend",function(){
			$('.chooseRange').hide();
			$('#main').html('<div><div class="list" id="list"></div></div>')
			homeUrl="/user/free/gradeList.do";
			$('#main').show()
			homePageData(homeUrl,homePage)
		})
		
		$('.distanced').on("touchend",function(){
			$('.chooseRange').hide();
			$('#main').html('<div><div class="list" id="list"></div></div>')
			homeUrl="/user/free/distanceList.do";
			$('#main').show()
			homePageData(homeUrl,homePage)
		})
		$('.new').on("touchend",function(){
			$('.chooseRange').hide();
			$('#main').html('<div><div class="list" id="list"></div></div>')
			homeUrl="/user/free/newList.do";
			$('#main').show()
			homePageData(homeUrl,homePage)
		})
		$('.More').on("touchend",function(){
			$('#main').hide();
			$('.chooseRange').show();
		/*	$('#main').html('<div><div class="list" id="list"></div></div>')
			homeUrl="/user/free/filtrateBaby.do";
			homePageData(homeUrl)*/
		})
		var filtrateParams={
			"pageNumb":"1",
	        "lat":"120.208643",
	        "lag":"120.208643",
			"minAge":"",
			"maxAge":"",
			"minHeight":"",
			"maxHeight":"",
			"minWeight":"",
			"maxWeight":"",
			"minGradePrice":"",
			"maxGradePrice":""
		}
		$('.surebtn').on("click",function(){
			//alert(filtrateParams.minAge)
			filtrateParams.minAge=$('.ageRange .minAge').html();
			filtrateParams.maxAge=$('.ageRange .maxAge').html();
			filtrateParams.minHeight=$('.minHeight').html();
			filtrateParams.maxHeight=$('.maxHeight').html();
			filtrateParams.minWeight=$('.minWeight').html();
			filtrateParams.maxWeight=$('.maxWeight').html();
			filtrateParams.minGradePrice=$('.minMoney').html();
			filtrateParams.maxGradePrice=$('.maxMoney').html();
			console.log(filtrateParams)
			$('#main').show();
			$('.chooseRange').hide();
			$('#main').html('<div><div class="list" id="list"></div></div>')
			homeUrl="/user/free/filtrateBaby.do";
			homePageData(homeUrl,filtrateParams)
			
		})


		$('.serchbox a').on("tap",function(){
			$(this).addClass("blueBottom").siblings().removeClass('blueBottom')
		})
		/*$('.datebtn').on('touchend',function(){
			alert(1)
		})*/
		
		
		

function oldOrderFunction(homeUrl,params){  
 var listloading = new Listloading('#oldOrderLoad', {
        disableTime: true,  // 是否需要显示时间
        pullUpAction : function(cb){   // 上拉加载更多   
      	params.pageNumb++;
      		console.log(params)
      		var params1=JSON.stringify(params)
        	   $.ajax({
                type: 'post',
                url: apiUrl+homeUrl,
                data:{json:params1},
                async:true,
                success: function(res){		
                	//alert("succceess")
                    var res=JSON.parse(res);
                	var resData=res.data;
                	console.log(res)
                	var oldOrderStr='';
             if(res.code=="200"){
             	for(var i=0;i<resData.length;i++){
      oldOrderStr+='<ul class="mui-table-view"><li class="mui-table-view-cell 	oldOrderBox"><div class="oldOrderLeft"><div class="orderNumAndPrice"><div class="orderNum"><span class="orderNumTitle">订单号:</span><span class="orderNumContent">'+resData[i].orderId+'</span></div><div class="orderPrice"><span class="orderPriceTitle">￥'+resData[i].payMoney+'</span><span class="orderPriceEnd">.00</span></div></div><div class="orderTimeBox"><div class="orderTime"><span class="orderTimeTitle">下单时间:</span><span class="orderTimeContent">'+resData[i].orderTime+'</span></div></div></div><div class="oldOrderRight"><a href="#evaluate">评价</a><span class="mui-icon mui-icon-arrowdown arrowIcon" orderId='+resData[i].orderId+' userIsrate='+resData[i].userIsrate+'></span></div></li><div class="oldDatailSpace"></div></ul>'	
             	}
             	$('.oldOrderList').append(oldOrderStr)
             	  var flg = false;
     			   cb(flg)  
             }else{
             	 cb(true)   
             	
             }
                
                	
               
            },
                error: function(xhr, type){
                    console.log('Ajax error!');
                }
                
                 
            }); 
					//console.log(__html)
        },
        pullDownAction : function(cb, flg){  // 下拉刷新
            // true则为默认加载 false为下拉刷新 
            console.log(params)
           if (flg) {
                console.log('默认加载');
           }
           var params1=JSON.stringify(params)
        	   $.ajax({
                type: 'post',
                url: apiUrl+homeUrl,
                data:{json:params1},
                async:true,
                success: function(res){	
                	var res=JSON.parse(res);
                	var resData=res.data;
                	console.log(res)
                	var oldOrderStr='';
             if(res.code=="200"){
             	for(var i=0;i<resData.length;i++){
      oldOrderStr+='<ul class="mui-table-view"><li class="mui-table-view-cell 	oldOrderBox"><div class="oldOrderLeft"><div class="orderNumAndPrice"><div class="orderNum"><span class="orderNumTitle">订单号:</span><span class="orderNumContent">'+resData[i].orderId+'</span></div><div class="orderPrice"><span class="orderPriceTitle">￥'+resData[i].payMoney+'</span><span class="orderPriceEnd">.00</span></div></div><div class="orderTimeBox"><div class="orderTime"><span class="orderTimeTitle">下单时间:</span><span class="orderTimeContent">'+resData[i].orderTime+'</span></div></div></div><div class="oldOrderRight"><a href="#evaluate">评价</a><span class="mui-icon mui-icon-arrowdown arrowIcon" orderId='+resData[i].orderId+' userIsrate='+resData[i].userIsrate+'></span></div></li><div class="oldDatailSpace"></div></ul>'	
             	}
            $('.oldOrderList').append(oldOrderStr)
             	 
             }
  			cb()
        	
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
		
		
		
		/*历史订单*/
		var oldOrderParams={
			"userId":"1454",
			"pageNumb":"1"
		}
$('.oldOrder').on('tap',function(event){
		var hei = $(window).height()-80;
	  	$('#oldOrderLoad').height(hei)
	  	$('#oldOrderLoad').html('<div><div class="oldOrderList"></div></div>')
	var  oldOrderUrl='/user/orderHistory.do';
	oldOrderFunction(oldOrderUrl,oldOrderParams);
})
   

$(document).on("touchend",'.arrowIcon',function(event){
	if($(this).hasClass('mui-icon-arrowdown')){
		$(this).removeClass('mui-icon-arrowdown')
		$(this).addClass('mui-icon-arrowup')
		$(this).parents('.mui-table-view').find(".oldDatailSpace").show()
	}else{
		$(this).removeClass('mui-icon-arrowup')
		$(this).addClass('mui-icon-arrowdown')
		$(this).parents('.mui-table-view').find(".oldDatailSpace").hide()
	}
	var oldOrderParams={
		"orderId":"",
		"userIsrate":""
	}
	var that=$(this);
	oldOrderParams.orderId=$(this).attr("orderId")
	oldOrderParams.userIsrate=$(this).attr("userIsrate")
	console.log(oldOrderParams)
	var oldOrderParams1=JSON.stringify(oldOrderParams)
	var oldDetailStr='';
	var oldDetailStr1='';
	var oldDetailStr2='';
	that.parents('.mui-table-view').find(".oldDatailSpace").html('')
	$.ajax({//历史订单详情
		type:"post",
		url:apiUrl+"/user/orderHistoryDetail.do",
		async:true,
		data:{
			json:oldOrderParams1
		},
		success:function(res){
			var resData=JSON.parse(res).data
			console.log(resData)
			for(var i=0;i<resData.length;i++){
			 oldDetailStr+='<div class="orderDetailListBox"><img src="'+resData[i].babyPhoto+'" class="oldDetailPhoto"/><div class="oldDetailBox"><div class="oldDetailInfo"><div class="oldDetailName">'+resData[i].babyName+'</div><div class="oldDetailPayMoney">￥'+(resData[i].payMoney).toFixed(2)+'</div></div><div class="detailScale">'
			 for(var i1=0;i1<resData[i].scale.split(" ").length;i1++){
			 	oldDetailStr1+='<span class="scaleTitle">'+resData[i].scale.split(" ")[i1]+'</span>';
			 }
			oldDetailStr2='</div></div>';
			oldDetailStr+=oldDetailStr1+oldDetailStr2;
			}
			console.log(oldDetailStr)
			that.parents('.mui-table-view').find(".oldDatailSpace").append(oldDetailStr)
			
		},
		error:function(){
			alert("err")
		}
		
	});
})


function isDate(id){
	if(sessionStorage.hadDateBabyArr){
		
		var hadDateBaby1=JSON.parse(sessionStorage.hadDateBabyArr)
		if(hadDateBaby1.length>0){
			//alert(id)
		for(var i=0;i<hadDateBaby1.length;i++){
			//console.log($(this).attr("id"))
			if(hadDateBaby1[i].babyId==id){
				$('.goDate').html('已加入')
			}else{
				$('.goDate').html('立即下单')
			}
				}
			}else{
				$('.goDate').html('立即下单')
			}
		
	}
}
/*关注的人列表*/
var concrenBabyParams={
	"userId":sessionStorage.userId,
	"pageNumb":"1"
}
 function concernBaby(RangeUrl){
 	//alert("rangeDataLoad")
 var list1loading= new Listloading("#concernedBox", {
		disableTime: true,
	  pullUpAction : function(cb){   // 上拉加载更多   
        var __html=''
        concrenBabyParams.pageNumb++;
        var numb1=(concrenBabyParams.pageNumb-1)*10;
      var  concernBabyParams1=JSON.stringify(concrenBabyParams);
	$.post(apiUrl+RangeUrl,{json:concernBabyParams1},function(res){
			var hotRangData=JSON.parse(res).data
			var res=JSON.parse(res)
			if(res.code==200){
		
				for(var i1=0;i1<hotRangData.length;i1++){
		__html+='<a class="showDetail2 mui-table-view"  ><li class="page2ListBox mui-table-view-cell mui-media"><span class="detailTap" id="'+hotRangData[i1].id+'"><span style="float: left;" class="rangeNumb">'+(i1+(concrenBabyParams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body"><div>'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span></div><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p> <div id="starttwo" class="block clearfix starttwo'+(i1+(concrenBabyParams.pageNumb-1)*10)+'"><div  class="star_score'+(i1+(concrenBabyParams.pageNumb-1)*10)+' star_score" style="height:19px;"></div><span class="fenshu  fenshu'+(i1+(concrenBabyParams.pageNumb-1)*10)+'"></span></p></div></div></span><span class="concernBtn" id="'+hotRangData[i1].id+'"  ontouchend="clickme3('+(i1+numb1)+')">约TA</span></li></a>'	
		}	
$('.concernList').append(__html);

 for(var i1=0;i1<hotRangData.length;i1++){
 	var rateAvg=hotRangData[i1].rateAvg
 	//var rateAvg=3.4
 	 var rateAvgCount=parseInt((rateAvg*10)/10)
 	 //alert(rateAvgCount)
	  scoreFun($('.starttwo'+(i1+(concrenBabyParams.pageNumb-1)*10)+''),{
           fen_d:21,//每一个a的宽度
           ScoreGrade:5//a的个数 10或者
      })
	  console.log(rateAvg)
	 
	  console.log(rateAvgCount)
	  var detailRateAvg=0
	  if(rateAvg!=0){
	  		$('.fenshu'+(i1+(concrenBabyParams.pageNumb-1)*10)+'').html(rateAvg.toFixed(1)) 
		   $('.star_score'+(i1+(concrenBabyParams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).attr('class',"clibg") 
		   var rateAvgCountWidth=rateAvg*21
		   $('.star_score'+(i1+(concrenBabyParams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).css("width",rateAvgCountWidth)
   		}else{
   			$('.fenshu').html(parseFloat(detailRateAvg).toFixed(1)) 
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
}

  var flg = false;
     cb(flg)  
}else if(res.code==400){
	 cb(true) 
}   
})

$('.detailTap').on("tap",function(e){
        	var swiperStr='';
        	//$('.mui-bar-tab~.mui-content').css('paddingTop',0)
            if ( e && e.stopPropagation ){
   			 		e.stopPropagation() 	
			}else{
    			window.event.cancelBubble = true; 
			}
			var babyId=$(this).attr("id")
			localStorage.concernStop=true;
				$('#showDetail').fadeIn()
				$(".page5").hide();	
				console.log($(this).attr("id"))
				var showDetaiParams={
					"userId":sessionStorage.userId,
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
					$('.imgNum').html(data.showImgs.length);
					$(".babyAge").html(data.baby.age+"岁")
					$(".babyHeight").html(data.baby.height+"cm")
					$(".babyWeight").html(data.baby.weight+"kg")
					$(".babyThreeNum").html(data.baby.bwh)
					$(".babyConstellation").html(data.baby.sign)
					$(".babyAdress").html(data.baby.origo)
					$(".babyClassess").html(data.baby.selfRate)
					$(".babyGlamour").html(data.baby.charm)
					$(".babyFace").html(data.baby.face)
					$(".babyBody").html(data.baby.shape)
					$(".babyHairstyle").html(data.baby.haird)
					$(".babybloodType").html(data.baby.blood)
					$(".babyNation").html(data.baby.nation)
					$('.goDate').attr('babyId',babyId)
					for(var i=0;i<data.showImgs.length;i++){
						swiperStr+='<div class="swiper-slide"><img src="'+data.showImgs[i]+'" class="swipwerImg"  data-preview-src="" data-preview-group="1"  /></div>'
					}
					$('.swiper-wrapper').html(swiperStr)
					isDate(babyId)
					$('.concerned').attr('babyId',babyId)
					$('.concerned').attr('isAttention',data.isAttention)
					if(data.isAttention=='1'){
			 			$('.concernImg').attr('src',"images/hadConcern.png")
			 			$('.concernTitle').html("已关注")
			 		}else if(data.isAttention=='2'){
			 			$('.concernImg').attr('src',"images/noConcern.png")
			 			$('.concernTitle').html("关注")
			 		}
				})/*post结束*/
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
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
   	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
         observer:true,
        observeParents:true,	
        initialSlide :1,
   	});
					
	 
    })
       },	
       pullDownAction : function(cb, flg){
 	   concrenBabyParams.pageNumb=1;
 	   var numb1=(concrenBabyParams.pageNumb-1)*10
          var __html1=''
    var  concrenBabyParams1=JSON.stringify(concrenBabyParams);
    //alert(RangeUrl)
	$.post(apiUrl+RangeUrl,{json:concrenBabyParams1},function(res){
		console.log(res)
			var hotRangData=JSON.parse(res).data;
			console.log(hotRangData)
			var __html1='';
			
				for(var i1=0;i1<hotRangData.length;i1++){
		__html1+='<a class="showDetail2 mui-table-view" id="'+hotRangData[i1].id+'"><li class="page2ListBox mui-table-view-cell mui-media"><span class="detailTap" id="'+hotRangData[i1].id+'"><span style="float: left;" class="rangeNumb">'+(i1+(concrenBabyParams.pageNumb-1)*10+1)+'</span><img class="mui-media-object mui-pull-left imgPhoto" src="'+hotRangData[i1].photo+'"><div class="mui-media-body">'+hotRangData[i1].nickName+' <span class="rangerAge margin-left_10  fontColor">'+hotRangData[i1].age+'岁</span><p class="mui-ellipsis"><span class="rangerHeight Back">'+hotRangData[i1].height+'cm</span><span class="rangerWeight2  Back">'+hotRangData[i1].weight+'kg</span></p> <div id="starttwo" class="block clearfix starttwo'+(i1+(concrenBabyParams.pageNumb-1)*10)+'"><div  class="star_score'+(i1+(concrenBabyParams.pageNumb-1)*10)+' star_score" style="height:19px;"></div><span class="fenshu  fenshu'+(i1+(concrenBabyParams.pageNumb-1)*10)+'"></span></p></div></div></span><span class="concernBtn" id="'+hotRangData[i1].id+'"  ontouchend="clickme3('+(i1+numb1)+')">约TA</span></li></a>'	
		}
	  $('.concernList').html(__html1);
	 for(var i1=0;i1<hotRangData.length;i1++){
 	var rateAvg=hotRangData[i1].rateAvg
 	//var rateAvg=3.4
 	 var rateAvgCount=parseInt((rateAvg*10)/10)
 	 //alert(rateAvgCount)
	  scoreFun($('.starttwo'+(i1+(concrenBabyParams.pageNumb-1)*10)+''),{
           fen_d:21,//每一个a的宽度
           ScoreGrade:5//a的个数 10或者
      })
	  console.log(rateAvg)
	 
	  console.log(rateAvgCount)
	  var detailRateAvg=0
	  if(rateAvg!=0){
	  		$('.fenshu'+(i1+(concrenBabyParams.pageNumb-1)*10)+'').html(rateAvg.toFixed(1)) 
		   $('.star_score'+(i1+(concrenBabyParams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).attr('class',"clibg") 
		   var rateAvgCountWidth=rateAvg*21
		   $('.star_score'+(i1+(concrenBabyParams.pageNumb-1)*10)+' a').eq(rateAvgCount-1).css("width",rateAvgCountWidth)
   		}else{
   			$('.fenshu').html(parseFloat(detailRateAvg).toFixed(1)) 
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
}
	  cb()
	  
	  
	  
	  		$('.detailTap').on("tap",function(e){
        	var swiperStr='';
        	//$('.mui-bar-tab~.mui-content').css('paddingTop',0)
            if ( e && e.stopPropagation ){
   			 		e.stopPropagation() 	
			}else{
    			window.event.cancelBubble = true; 
			}
			var babyId=$(this).attr("id")
			localStorage.concernStop=true;
				$('#showDetail').fadeIn()
				$(".page5").hide();	
				console.log($(this).attr("id"))
				var showDetaiParams={
					"userId":sessionStorage.userId,
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
					$('.imgNum').html(data.showImgs.length);
					$(".babyAge").html(data.baby.age+"岁")
					$(".babyHeight").html(data.baby.height+"cm")
					$(".babyWeight").html(data.baby.weight+"kg")
					$(".babyThreeNum").html(data.baby.bwh)
					$(".babyConstellation").html(data.baby.sign)
					$(".babyAdress").html(data.baby.origo)
					$(".babyClassess").html(data.baby.selfRate)
					$(".babyGlamour").html(data.baby.charm)
					$(".babyFace").html(data.baby.face)
					$(".babyBody").html(data.baby.shape)
					$(".babyHairstyle").html(data.baby.haird)
					$(".babybloodType").html(data.baby.blood)
					$(".babyNation").html(data.baby.nation)
					$('.goDate').attr('babyId',babyId)
					for(var i=0;i<data.showImgs.length;i++){
						swiperStr+='<div class="swiper-slide"><img src="'+data.showImgs[i]+'" class="swipwerImg"  data-preview-src="" data-preview-group="1"  /></div>'
					}
					$('.swiper-wrapper').html(swiperStr)
					isDate(babyId)
					$('.concerned').attr('babyId',babyId)
					$('.concerned').attr('isAttention',data.isAttention)
					if(data.isAttention=='1'){
			 			$('.concernImg').attr('src',"images/hadConcern.png")
			 			$('.concernTitle').html("已关注")
			 		}else if(data.isAttention=='2'){
			 			$('.concernImg').attr('src',"images/noConcern.png")
			 			$('.concernTitle').html("关注")
			 		}
				})/*post结束*/
				
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
   			// $('.star_scoreDetail a').eq(0).attr('class',"clibg") 
   			 
   			 for(var i=0;i<5;i++){
   			 	if($('.star_scoreDetail a').eq(i).hasClass("clibg")){
   			 		$('.star_scoreDetail a').eq(i).removeClass("clibg")
   			 	}
   			 
   			 }
   		}
   	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
         observer:true,
        observeParents:true,	
        initialSlide :1,
   	});
	  
	  				})/*tap结束*/
	  
	  
 		})
	},
	Realtimetxt: '官人不要，请放开我！',
    loaderendtxt: '我是有底线的'
})
   }


var concernUrl="/user/myAttentions.do"
$('.concernEnter').on("touchend",function(){
		var hei = $(window).height()-100;
	  	$('#concernedBox').height(hei);	
	  	$('#concernedBox').html('<div><div class="concernList"></div></div>')
	  	console.log(concrenBabyParams)
	concernBaby(concernUrl)
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