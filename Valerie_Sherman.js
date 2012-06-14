
//alert("JavaScript works!");
// Valerie Sherman 6/1/2012 _ Deliverable 1
//push to git repository
	
var string1 = " arrive to work at ";
var string2 = "8 AM.";
var string3 = TurnCompOn();
console.log("I" + string1 + string2 + string3 + " and go get breakfast");

function TurnCompOn(){
	var step1="Pushing the Power button";
	var step2="Check to see if there is any patch"
	var patch="no";
	var step3 = "";
	if (patch=="yes")
		step3 = "reboot my machine";
	else
		step3 = checkEmail();
	var TurnCompOnOutput = "\nI turn my computer on by " + step1 +" now i " + step2 + " if the patch is " + patch + " then " + step3;
	return TurnCompOnOutput;
}
function checkEmail(){
	var step1 = "open outlook";
	var any= false;
	var anyjunk = "";
	var tr = "";
	if (anyJunk(any)){
		tr = "there";
		anyjunk = " delete the junk mail and then";
	}
	else{
		tr = "not there";
	}
	var anyways = " jump to emails that require response"
	var checkEmailOutput = "I " + step1 + " and see if any junk mail is " + tr + " go" + anyjunk + anyways;
	return checkEmailOutput;
}

function anyJunk(any){
	if (any)
		return true;
	else
		return false;
}