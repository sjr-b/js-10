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