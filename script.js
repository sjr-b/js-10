// This is problem one, the sleep_in function.
function sleep_in(weekday, vacation) {
    if (weekday == true && vacation == false) {
        return false;
    } else {
        return true;
    }
}

// This is the second problem, monkey_trouble.
function monkey_trouble(a_smile, b_smile){
    if (a_smile == b_smile){
        return true;
    } else {
        return false;
    }
}

// This is the third problem, string_times.
function string_times(string, n){
    var newString = "";
    for(var i = 0; i < n; i++){
        newString += string;
    }
    return newString;
}


// This is the fourth problem, front_times.
function front_times(string, n){
    var str = string.substring(0, 3);
    var newString = "";
    for (var i = 0; i < n; i++){
        newString += str;
    }
    return newString;
}

// This is the fifth problem, string_bits.
function string_bits(string){
    var stringLength = string.length;
    var newString = "";
    for (var i = 0; i < stringLength; i +=2){
        newString += string.charAt(i);
    }
    return newString;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}