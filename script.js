function shortcut(s1, s2) {
 if(s1 !="" && s2 !=""){
	return s1.charAt(0).concat(s2.charAt(0));
}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
