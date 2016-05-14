window.onload=function (){
	function g(id){return document.getElementById(id);}
	// 获得按钮
	var pre_btn=g('prev');
	var next_btn=g('next');
	// 获得图片框
	var imgBox_left=g('imgBox_left');
	var imgBox_right=g('imgBox_right');
	//获得图片内容和说明文字等
	var img_left=imgBox_left.getElementsByTagName('img')[0];
	var img_detail_left=imgBox_left.getElementsByTagName('p')[0];
	var img_left_index=imgBox_left.getElementsByTagName('p')[1];

	var img_right=imgBox_right.getElementsByTagName('img')[0];
	var img_detail_right=imgBox_right.getElementsByTagName('p')[0];
	var img_right_index=imgBox_right.getElementsByTagName('p')[1];
	// 定义图片以及文字资源
	var img_series_left=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'];
	var left_length=img_series_left.length;
	var img_detail_lfwords=['湖边小屋','森林长廊','临安城','艺术大桥'];

	var img_series_right=['images/5.jpg','images/6.jpg','images/7.jpg'];
	var right_length=img_series_right.length;
	var img_detail_rgwords=['bleach','animation','Janpanese'];
	// var right
	//初始化页面结构
	// 可能是因为在初始化时候用了函数初始化，导致了下表错位的问题出现，所以在这里改为直接初始化，不适用函数初始化
	//定义控制参数control_argument并初始化为0
	content_change(0,0);
	var control_argument=1;
	var control_argument_b=1;	
	// 按钮控制
	next_btn.onclick=nextPic;
	pre_btn.onclick=prevPic;

	// 函数定义
	function nextPic(){

		if(control_argument>left_length-1){
			control_argument=0;
		}
		if(control_argument_b>right_length-1){
			control_argument_b=0;
		}

		content_change(control_argument,control_argument_b);
		console.log(1);
		control_argument++;
		control_argument_b++;
	}
	function prevPic(){
		if(control_argument<0){
			control_argument=left_length-1;
		}
		// 为什么要在这里加上后面那一句>-2呢？
		// 因为在开发过程中，当我只是用了前半句，我做了一个测试，让按钮快速执行，此时就会
		//偶尔的出现bug，control_argument会变为5，可能是JavaScript的程序反应时间问题，但一般
		//不会超过1步，所以这里索性增加到了-2 
		if(control_argument_b<0 && control_argument_b>-2){
			control_argument_b=right_length-1;
		}
		content_change(control_argument,control_argument_b);
		control_argument--;
		control_argument_b--;
	}
	function content_change(index1,index2){
		img_left.src=img_series_left[index1];
		img_detail_left.innerHTML=img_detail_lfwords[index1];
		img_left_index.innerHTML=index1+1+'/'+left_length;
		img_right.src=img_series_right[index2];
		img_detail_right.innerHTML=img_detail_rgwords[index2];
		img_right_index.innerHTML=index2+1+'/'+right_length;
	}
}