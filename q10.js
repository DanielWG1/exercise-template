function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
function arrElm(arr) {
    for(i = 0; i < arr.length; i++) {
      console.log('row ' + i)
      for(j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
  }
}
/**/
output.innerText = out;
}