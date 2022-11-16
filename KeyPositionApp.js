 const readline = require("readline");

	 let keypad = [ 
	 [ ["1"], ["A", "B", "C", "2"], ["D", "E", "F", "3"]],
	 [ ["G", "H", "I", "4"], ["J", "K", "L", "5"],["M", "N", "O", "6"]],
	 [ ["P", "Q", "R", "S", "7"],["T", "U", "V", "8"],["W", "X", "Y", "Z", "9"]],
	 [ ["*"], ["0"], ["#"]]  ];
	  
 const readInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
 });

  readInput.question("User Input ? ", function (character) {
	result = 0;
	for (let i = 0; i < keypad.length; i++) {
    for (let j = 0; j < keypad[i].length; j++) {
		for (let k = 0; k < keypad[i][j].length; k++) {
		let value = keypad[i][j][k];
		let input = String(character).toUpperCase()
		let result = (value === input) ? true : false
		if(result){
			process.stdout.write("Result: [" + (i+1) + ", " + (j+1) +"]" );
			break;
		}	
			
		}
			
	}
    }
	
    readInput.close();
  });
