function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    let arr = [];

    function add(n) {
      arr.push(n);
    }
    
    function printArray() {
      for (let i = 0; i < arr.length; i++){
        console.log('Element ' + i + ' = ' + arr[i])
      }
    }
/**/
    output.innerText = out;
        }