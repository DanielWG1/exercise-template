function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
     
        let nums = [1, 4, 2, 2];
        let numsCopy = nums.slice();
        for (i = 0; i < numsCopy.length; i++) {
            if (numsCopy[i] === '-') 
            if (numsCopy[i] % 2 === 0 && numsCopy[(i + 1)] % 2 === 0) {
                numsCopy.splice(i+1, 0, "-");
                i++;
            }
        }
out= numsCopy;
/**/
    output.innerText = out;
        }