var count=0;
//var arr[3][3];

document.getElementById('p1').innerHTML="YOUR TURN";
function check(e) {
	if(count%2==0){
	e.innerHTML="&nbsp&nbspX&nbsp&nbsp";
	e.style.color="red";
	count++;
	document.getElementById('p2').innerHTML="YOUR TURN";
	document.getElementById('p1').innerHTML="";

	}
	else{
		e.innerHTML="&nbsp&nbspO&nbsp&nbsp";
		e.style.color="green";
		count++;
		document.getElementById('p1').innerHTML="YOUR TURN";
		document.getElementById('p2').innerHTML="";	
	}
	

}






     
