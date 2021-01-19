function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let list= [7, 4, 9, 1, 0];
	out= bubble(list);
    output.innerText = out;
}

function bubble (list) {
	
	// Take the list length
	let len = list.length;
	
	// Loop len-1 times. Each time we move the highest number to the right.
    for (let i = 0; i < len-1; i++) {
		
		// Loop over the array and swap the higher nuimberf from right to left.
		// The loop goes up to 'len-i' since the rest of the array is already sorted by previous iterations.
        for (let j = 0; j < len-1-i; j++) {
            if (list[j] > list[j + 1]) {
				
				// Swap
                let tmp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tmp;
            }
        }
    }
    return list;
}