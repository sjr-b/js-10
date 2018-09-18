//write first method
function sleep_in(weekday, vacation) {
    if (weekday == true && vacation == false) {
        return false;
    } else {
        return true;
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