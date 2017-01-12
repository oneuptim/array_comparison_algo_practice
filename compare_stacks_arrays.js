//Compare Arrays
arr1 = [1,"string",3,4,5]
arr2 = [1,2,6,4,5]

function Comparison(arr1, arr2){
  if (arr1.length != arr2.length){
    console.log("False")
    return false;
  }
  else{
    for (var i = 0; i < arr1.length; i++){
      if (arr1[i] != arr2[i]){
        console.log("False")
        return false;
      }
    }
  }
  console.log("True")
  return true;

}

Comparison(arr1, arr2)
