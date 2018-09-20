$(document).ready(function(){
	var expressionInMemory = "0";
	var justPressedEquals = false;
	$(".number,.operation").click(function(){
		if(expressionInMemory.length < 16){
			var newChar = $(this).text();
			if(expressionInMemory === "0"){
				if(newChar !== "0"){
					if(newChar === "."){
						expressionInMemory = "0.";
					} else if(/[\+\-\*\/]/.test(newChar)){
						expressionInMemory += newChar;
					} else {
						expressionInMemory = newChar;
					}
				}
			} else if(newChar === "."){
				if(! expressionInMemory.includes(".")){
					if(justPressedEquals){
						return;
					} else {
						expressionInMemory += newChar;
					}
				} 
			} else if(/[\+\-\*\/]/.test(newChar)){
				var lastChar = expressionInMemory[expressionInMemory.length -1];
				if(/[\+\-\*\/]/.test(lastChar)){
					expressionInMemory = expressionInMemory.replace(lastChar,newChar);	
				} else {
					expressionInMemory += newChar;
				}
			} else {
				if(justPressedEquals){
					expressionInMemory = newChar;
				} else {
					expressionInMemory += newChar;
				}
			}
			$("#display").text(expressionInMemory);
			justPressedEquals = false;
		}
	});

	$("#clear").click(function(){
		expressionInMemory = "0";
		$("#display").text(expressionInMemory);
	});

	$("#equals").click(function(){
		expressionInMemory = eval(expressionInMemory).toFixed(10).toString();
		$("#display").text(expressionInMemory);
		justPressedEquals = true;
	});
});