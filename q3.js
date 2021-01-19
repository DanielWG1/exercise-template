function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    const list= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const n= 3;
    out=  list.slice(0, n+1);

/**/
    output.innerText = out;
}