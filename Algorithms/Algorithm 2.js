#1
function multiply(x,y){
           console.log(x);
           console.log(y);
       }
       b = multiply(2,3);
       console.log(b);
Answer: 2,3
#2
       function multiply(x,y){
           return x*y;
       }
       b = multiply(2,3);
       console.log(b);
       console.log(multiply(5,2));
Answer: 6,10
#3
       var x = [1,2,3,4,5,10];
       for(var i=0; i<5; i++){
           i = i + 3;
           console.log(i);
       }
Answer: 3,7
#4
       x=15;
       console.log(x);
       function awesome(){
           x=10;
           console.log(x);
       }
       console.log(x);
       awesome();
       console.log(x);
Answer: 15, 15, 10, 10
#5
       for(var i=0; i<15; i+=2){
           console.log(i);
       }
Answer: 0, 2, 4, 6, 8, 10, 12, 14
#6
       for(var i=0; i<3; i++){
           for(var j=0; j<2; j++){
               console.log(i*j);
           }
       }
Answer: 0, 0, 0, 1, 0, 2
#7
       function looping(x,y){
           for(var i=0; i<x; i++){
               for(var j=0; j<x; j++){
                   console.log(i*j);
               }
           }
       }
       z = looping(3,3);
       console.log(z);
Answer: 0, 0, 0, 0, 1, 2, 0, 2, 4
#8
       function looping(x,y){
       for(var i=0; i<x; i++){
           for(var j=0; j<y; j++){
               console.log(i*j);
           }
       }
       return x*y;
       }
       z = looping(3,5);
       console.log(z);
Answer: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15
 #9
       function printUpTo(x){
           // your code here
           if(x < 0) {
               return false;
           } else {
               for (var i=0; i < x + 1; i++) {
                   console.log(i);
               }
           }
       }
       printUpTo(1000);
       y = printUpTo(-10);
       console.log(y);
#10
       function printSum(x){
           sum = 0;
           //your code here
           for (var i = 0; i < x; i++) {
               console.log(i);
               console.log(sum);
               sum += i;
           }
           return sum
       }
       y = printSum(255)
       console.log(y)
#11
       function printSumArray(x){
           sum = 0;
           for(var i=0; i<x.length; i++) {
               //your code here
               sum += x[i];
           }
           return sum;
       }
       console.log(printSumArray([1,2,3]) );
#12
       function arrayMax(arr) {
           max = arr[0];
           for(var i = 1; i < arr.length; i++) {
               if(arr[i] > max) {
                   max = arr[i];
               }
           }
           return max;
       }
       console.log(arrayMax([1,30,5,7]));
