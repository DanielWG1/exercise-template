function union_arrays (x, y) {

    var obj = {};
    
    for (let i = 0; i < x.length; i++){
       obj[x[i]] = x[i];
    }
    for (let i = 0; i < y.length; i++){
       obj[y[i]] = y[i];
    }
  
    var res = []
    for (var k in obj) {
        res.push(obj[k]);
    }
    return res;
  }
  
  console.log(union_arrays([1,2,3], [2,6,8]));