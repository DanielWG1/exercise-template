function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    let list= [7, 4, 9, 1, 0];
let bubble = (list) => {
    let len = list.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (list[j] > list[j + 1]) {
                let tmp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tmp;
            }
        }
    }
    return list;
}
out= bubble(list);
/**/
    output.innerText = out;
}