	let outcal=document.getElementById("calout");
	
	function display(num){
		 outcal.value += num;
	}
	function calculate(){
			outcal.value = eval(outcal.value);
		
	}
	function Clear(){
		outcal.value ="";
	}
	function del(){
		outcal.value=outcal.value.slice(0,-1);
	}