function customMap(arr) {

    for(var i=0;i<arr.length;i++)
    {
        arr[i]=arr[i]*arr[i];
    }
    return arr;
   
  }
  
  const arr = [1, 2, 3];
  var result = customMap(arr);
  console.log(result);