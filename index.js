var score=97;
score >= 95 && score <= 100
?console.log("excellent")
:score >= 80 && score <= 94
?console.log("good")
:score >= 60 && score <= 79
?console.log("avarage")
:score >= 35 && score <= 59
?console.log("need improve")
:console.log("fail");

// str = "helllllllll";
// console.log(str.length);


var str="HELLO";
var op = ""
for(i=0;i<str.length ;i++){
    op+=str[i]
console.log(op)
}

var day="sunday"
day == "sunday" || day == "saturday"
?console.log("weekend")
:day == "monday" || day == "tuesday"  || day =="wednesday" || day == "thursday" ||day == "friday"
?console.log("week")
:console.log("invalid")


var arr="madam";
var op= "";
for(i=arr.length-1;i >= 0; i--){
    op += arr[i];
   
}arr == op
console.log(op)
 ? console.log("palindrome") :console.log("not a palindrome")


