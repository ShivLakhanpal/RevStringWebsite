
function reverseFunc(string){
 return string.split("").reverse().join("")
};

function charFreq(string) {
    var outputFreq = {};
    for (var i=0; i<string.length;i++) {
        var char = string.charAt(i);
        if (outputFreq[char]) {
           outputFreq[char]++;
        } else {
           outputFreq[char] = 1;
        }
    }

    return JSON.stringify(outputFreq);
};


function outputname() {
var formOutput, str;
formOutput=document.getElementById("form1");
str=formOutput.elements["string"].value;

document.getElementById("output").innerHTML+= "<br>"+"<br>"+"The reversed string is: " + "<b>"+reverseFunc(str)+"<br>" + "<br>";
document.getElementById("output").innerHTML+="List of unique characters of original string (doesn't show duplicates): " + "<b>" + "[" + str.split('').filter(function(element, char, string){ return string.indexOf(element) === char; }).join(', ') + "]"+"<br>";
document.getElementById("output").innerHTML+= "<br>"+"The frequency of characters is: " + "<b>"+charFreq(str) + "<br";
};
