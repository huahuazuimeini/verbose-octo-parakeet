  $(function(){
	  //思路：要在文本框中输入信息行，表格立刻过滤中对应的记录，首先应该触发的是文本框的键盘弹起事件，在事件中我们要过滤出想要的记录
	  //      如果过滤？现在有两种思路：
	  //      1.找到包含指定文本的记录行，隐藏其它行
	  //      2.先隐藏所有行，然后找到包含指定文本的记录行，再显示它
	  //注意问题：在某些浏览器中，有这要一个特点，就是刷新网页后，其值会保持不变，这就意味着刷新网页后，文本框中的值未必改变，但是表格中的数据又全出来了
       $("#filterName").keydown(function(){
	      $("table tbody tr")
					.hide()
					.filter(":contains('$(this).val()')")
					.show();
	   });
  });