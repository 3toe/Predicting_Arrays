var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
   console.log(arr[i]);
}

// Prediction:
// The numbers in the arr array, each printed on their own line, from left to right)

var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
   if(arr[i] % 2 == 0){
   console.log(arr[i]);
   } 
   else{
   console.log("That is odd!");
   }
}

// Prediction (the following output):
// That is odd!
// That is odd!
// 8
// 4
// 2
// 0
// That is odd!

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
   if(arr[i] < 0){
      newArr.push(arr[i]);
      arr[i] = arr[i] * -1;
   }
   else if(arr[i] == 0){
      arr[i] = "Zero";
   }
   else{
      arr[i] = arr[i] * -1;
   }
}
console.log(arr);
console.log(newArr);

// Prediction (the following output):
// [-1,-3,-8,5,zero,2,-4,1]
// [-5, -2, -1]