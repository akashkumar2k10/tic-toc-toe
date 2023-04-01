var count=0;
//var arr[3][3];
var str = "&nbsp&nbsp&nbsp";
document.getElementById('a1').innerHTML = str;

document.getElementById('a2').innerHTML = str;
document.getElementById('a3').innerHTML = str;
document.getElementById('a4').innerHTML = str;
document.getElementById('a5').innerHTML = str;
document.getElementById('a6').innerHTML = str;
document.getElementById('a7').innerHTML = str;
document.getElementById('a8').innerHTML = str;

document.getElementById('a9').innerHTML = str;
document.getElementById('p').innerHTML="YOUR TURN";

function restart(){
this.count=0;
//var arr[3][3];
var str = "&nbsp&nbsp&nbsp";
document.getElementById('a1').innerHTML = str;

document.getElementById('a2').innerHTML = str;
document.getElementById('a3').innerHTML = str;
document.getElementById('a4').innerHTML = str;
document.getElementById('a5').innerHTML = str;
document.getElementById('a6').innerHTML = str;
document.getElementById('a7').innerHTML = str;
document.getElementById('a8').innerHTML = str;

document.getElementById('a9').innerHTML = str;
document.getElementById('p1').innerHTML="YOUR TURN";
document.getElementById('p2').innerHTML="";	

}

function check(e) {
	console.log("checking the value for  e",e);
	if(e.innerHTML != 'X' && e.innerHTML != 'O'){
	if(count%2==0){
	e.innerHTML="X";
	e.style.color="red";
	count++;
	document.getElementById('p2').innerHTML="YOUR TURN";
	document.getElementById('p1').innerHTML="";

	}
	else{
		e.innerHTML="O";
		e.style.color="green";
		count++;
		document.getElementById('p1').innerHTML="YOUR TURN";
		document.getElementById('p2').innerHTML="";	
	}
}
	

}






     
