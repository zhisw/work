$('.hotRange').on("tap",function(){
	
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
		
	})
})