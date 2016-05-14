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
	// 定义图片以及文字资源
	var img_series_left=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'];
	var left_length=img_series_left.length;
	var img_detail_lfwords=['湖边小屋','森林长廊','临安城','艺术大桥'];

	var img_series_right=['images/5.jpg','images/6.jpg','images/7.jpg'];
	var right_length=img_series_right.length;
	var img_detail_rgwords=['bleach','animation','Janpanese'];
	// var right
	//初始化页面结构
	//定义控制参数control_argument并初始化为0
	var control_argument=0;
	nextPic();
	// 按钮控制
	next_btn.onclick=nextPic;
	pre_btn.onclick=lastPic;

	// 函数定义
	function nextPic(){
		if(control_argument>left_length-1){
			control_argument=0;
		}
		content_change(control_argument);
		control_argument++;
	}
	function lastPic(){		
		// 注意因为初始化时候参数增加了1的缘故，这里应该从1开始
		if(control_argument<=1){
			control_argument=left_length-1;
		}
		// alert(control_argument);
		content_change(control_argument);
		control_argument--;
	}

	function content_change(index){
		img_left.src=img_series_left[index];
		img_detail_left.innerHTML=img_detail_lfwords[index];
		img_left_index.innerHTML=index+1+'/'+left_length;
	}
}