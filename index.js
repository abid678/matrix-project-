var nextbtn = document.querySelector("#nextbtn");
var modiolusA = document.querySelector("#output2");

nextbtn.addEventListener("click",function(){

//variables for input number start

var A11,A12,A13,A21,A22,A23,A31,A32,A33,CF1,CF2,CF3,CF4,CF5,CF6,CF7,CF8,CF9,X,Y,Z, B1,B2,B3,M1,M2,M3;

// input number for variables 
    A11= Number(document.querySelector("#A11").value);
    A12 = Number(document.querySelector("#A12").value);
    A13 = Number(document.querySelector("#A13").value);				
    A21 = Number(document.querySelector("#A21").value);	 
    A22 = Number(document.querySelector("#A22").value);
    A23 = Number(document.querySelector("#A23").value);
    A31 = Number(document.querySelector("#A31").value);
    A32 = Number(document.querySelector("#A32").value);
    A33 = Number(document.querySelector("#A33").value);
    X = Number(document.querySelector("#X").value);
     Y = Number(document.querySelector("#Y").value);
      Z = Number(document.querySelector("#Z").value)
     

	// variable for input number end 
	
	//CO-FACTORS variables start
  	 CF1=((A22*A33)-(A23*A32));
    CF2=-((A21*A33)-(A23*A31));
    CF3=((A21*A32)-(A22*A31));
    CF4=-((A12*A33)-(A13*A32));
    CF5=((A11*A33)-(A13*A31));
    CF6=-((A11*A32)-(A12*A31));
    CF7=((A12*A23)-(A13*A22));
    CF8=-((A11*A23)-(A13*A21));
    CF9=((A11*A22)-(A12*A21));
	
	//variables + - × start for |A|
	
	var result, result1, result2, result3;
	
	result1 = A11*((A22*A33)-(A23*A32));
	result2 = A12*((A21*A33)-(A23*A31));
  result3 = A13*((A21*A32)-(A22*A31));
  result  = result1-result2+result3;

if(result == 0) {

	output2.innerHTML = "please enter number or try again <br><br> You must enter all the input box";
	
				
}else {

 		output1.innerHTML = " |A| <br><br>= " + A11 +"*"+"{"+"("+(A22*A33)+")" + "-" +"("+(A23*A32)+")"+"}"+"-"+ A12 +"*"+"{"+"("+(A21*A33)+")" + "-" +"("+(A23*A31)+")"+"}"+"+"+ A13 +"*"+"{"+"("+(A21*A32)+")" + "-" +"("+(A22*A31)+")"+"}";
 		
 		output3.innerHTML =  "= " +"("+A11*((A22*A33)-(A23*A32)) +")" +"-"+"("+ A12*((A21*A33)-(A23*A31))+")"+"+"+"("+ A13*((A21*A32)-(A22*A31))+")";
 		
 		output4.innerHTML = "= "+ result + "<br><br>The result of |A| is = "+ result +"<hr>";
 		output2.style.display = "none";
 		
 		//CO-FACTOR output start
 	 output5.innerHTML = "Co-factors : <br>" ;
 	output6.innerHTML = "The Co-factor of "+ A11 
 	+ " is = "+ CF1+"<br>"+ 
 	"The Co-factor of "+ A12 
 	+ " is = "+ CF2+"<br>"+
 	 "The Co-factor of "+ A13 
 	+ " is = "+ CF3+"<br>"+
 	 "The Co-factor of "+ A21 
 	+ " is = "+ CF4+"<br>"+
 	 "The Co-factor of "+ A22 
 	+ " is = "+ CF5+"<br>"+
 	 "The Co-factor of "+ A23 
 	+ " is = "+ CF6+"<br>"+
 	 "The Co-factor of "+ A31
 	+ " is = "+ CF7+"<br>"+
 	 "The Co-factor of "+ A32 
 	+ " is = "+ CF8+"<br>"+
 	 "The Co-factor of "+ A33 
 	+ " is = "+ CF9+"<br>"+"<hr>"+"<br><br>" ;
 	
 	cofactorA.style.display = "block";
 	AmatrixShow.style.display = "block";
 				a11.innerHTML =CF1;
 				a12.innerHTML =CF2;
 				a13.innerHTML =CF3;
 				a21.innerHTML =CF4;
 				a22.innerHTML =CF5;
 				a23.innerHTML =CF6;
 				a31.innerHTML =CF7;
 				a32.innerHTML =CF8;
 				a33.innerHTML =CF9;
 				
 	AdjA.style.display = "block";
 	AmatrixShow2.style.display = "block";
				a1.innerHTML = CF1;
				a2.innerHTML = CF4;
				a3.innerHTML = CF7; 
				a4.innerHTML = CF2;	
				a5.innerHTML = CF5;
				a6.innerHTML = CF8;
				a7.innerHTML = CF3;
				a8.innerHTML = CF6;
				a9.innerHTML = CF9;		
		AAA.style.display = "block";			
		A1.style.display = "block";	
		A1.innerHTML ="= (1/" + result +")" + "×";		
		AA.style.display = "block";		
			
				ab1.innerHTML = CF1;
				ab2.innerHTML = CF4;
				ab3.innerHTML = CF7; 
				ab4.innerHTML = CF2;	
				ab5.innerHTML = CF5;
				ab6.innerHTML = CF8;
				ab7.innerHTML = CF3;
				ab8.innerHTML = CF6;
				ab9.innerHTML = CF9;	
				
				x.innerHTML = X;
				y.innerHTML = Y;
				z.innerHTML = Z;
		
				
				
	martrixShow.style.display = "block";
	xyz.style.display = "block";
				b1.innerHTML = CF1;
				b2.innerHTML = CF4;
				b3.innerHTML = CF7; 
				b4.innerHTML = CF2;	
				b5.innerHTML = CF5;
				b6.innerHTML = CF8;
				b7.innerHTML = CF3;
				b8.innerHTML = CF6;
			  b9.innerHTML = CF9;		
			  
			hr1.style.display = "block";	
			hr2.style.display = "block";	
			hr3.style.display = "block";	
			hr4.style.display = "block";	
 		AC1.innerHTML ="= (1/" + result +")" + "×";	
 		ACC1.innerHTML ="= (1/" + result +")" + "×";
 		ACC2.innerHTML ="= (1/" + result +")" + "×";
 		
 		ACC1.style.display = "block";	
 		ACC2.style.display = "block";	
 		abcd.style.display ="block";	
 		
 		martrixShow2.style.display = "block";
 		
 		bb1.innerHTML = "("+ CF1*X +")"+ "+" + "(" + CF4*Y + ")" + "+" + "(" + CF7*Z + ")";	
 			bb2.innerHTML = "("+ CF2*X +")"+ "+" + "(" + CF5*Y + ")" + "+" + "(" + CF8*Z + ")";	
 				bb3.innerHTML = "("+ CF3*X +")"+ "+" + "(" + CF6*Y + ")" + "+" + "(" + CF9*Z + ")";		
 		
       
 	hr5.style.display = "block";
 	martrixShow3.style.display = "block";
 	
 	
 	
  	B1=((CF1*X)+(CF4*Y)+(CF7*Z));   
    B2=((CF2*X)+(CF5*Y)+(CF8*Z));   
    B3=((CF3*X)+(CF6*Y)+(CF9*Z));    
     
    M1=B1/result;     
    M2=B2/result;     
    M3=B3/result;     
 	
 	
	bb4.innerHTML = B1;
 	bb5.innerHTML = B2;
 	bb6.innerHTML = B3;
 	
 	
 	
 	
 	
 	hr6.style.display = "block";
 	
 	martrixShow4.style.display = "block";
 	
 	bb7.innerHTML = M1;
 	bb8.innerHTML = M2;
 	bb9.innerHTML = M3;
 	
 	ax.style.display = "block";
 	hr7.style.display = "block";
 	
 	xr.innerHTML = M1;
 	yr.innerHTML = M2;
 	zr.innerHTML = M3;
 	
 	xyzresult.innerHTML = "The result of X is = " + M1 +"<br><br><br>The result of Y is = " + M2 + "<br><br><br>The result of Z is = " + M3;
 	
 	//else end heare (result)
		}
});





var commnetBtn = document.querySelector("#commentBtn");

commentBtn.addEventListener("click",function(){
var Name = document.querySelector("#name").value;
var Comment = document.querySelector("#comment").value;

	//	userComment.innerHTML = Name + "&nbsp" + ":" +"<br>" + Comment;
if(Name == 0 && Comment == 0) {
		alert("YOU DIDN’T ENTER YOUR NAME AND COMMENT TOO ! ");		
}	
	
else if(Name == 0) {
				alert("please enter your name ! ");
}
else if(Comment == 0) {
				alert("please enter your Comment ! ");
}
else {
				userComment.innerHTML = Name + "&nbsp" + ":" +"<br>" + Comment;
}

});

connectMe.addEventListener("click",function(){

 connectMe.style.display = "none";
 contactDetails.style.display = "block";
});
















