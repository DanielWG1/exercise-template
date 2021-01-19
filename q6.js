function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    let nums = [2, 4, 6];
            let numsCopy = nums.slice();
            for (i = 0; i < numsCopy.length; i++) {
                if (numsCopy[i] === '-') console.log('found - in:', i);
                if (numsCopy[i] % 2 === 0 && numsCopy[(i + 1)] % 2 === 0) {
                    numsCopy.splice(i+1, 0, "-");
                    i++;
                }
            }
/**/out= numsCopy;
    output.innerText = out;
}