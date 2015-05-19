//first get the parent element that contains all the hardware items, and then store every item into an array
var assetIDS = document.getElementById("aggr").nextSibling.getElementsByTagName("tr");
var biggest = 0;

//we will now loop through every value in our given array of size assetIDS.length
for(var i = 0; i < assetIDS.length; i++) 
{
	//get number of current element
	var current = assetIDS[i].firstChild.firstChild.innerHTML;
	//if no title, then ignore
	if(current === "(no title)") {
		continue;
	}
	
	//strip letters off string
	current = current.replace(/\D/g,'');
	//if current element is bigger than last biggest number, replace
	if (parseInt(current) > biggest) {
		biggest = parseInt(current);
	}
} //biggest number is now found

//display biggest number + 1
var nextNum = parseInt(biggest) + 1;
alert("Next available number is: " + nextNum);