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

// This is the sixth problem, caughtSpeeding.
function caughtSpeeding(speed, birthday){
    if (birthday == true){
        if (speed <= 65){
            return 0;
        } else if (65 < speed && speed <= 85){
            return 1;
        } else {
            return 2;
        }
    } else {
        if (speed <= 60){
            return 0;
        } else if (60 < speed && speed <= 80){
            return 1;
        } else {
            return 2;
        }
    }
}

// This is the seventh problem, fizzBuzz.
function fizz_buzz(num){
    if (num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz";
    } else if (num % 3 == 0){
        return "Fizz";
    } else if (num % 5 == 0){
        return "Buzz";
    } else {
        return num + "!";
    }
}

// This is the eighth problem, teaParty.
function teaParty(tea, candy){
    if (candy >= 5 && tea >= 5){
        if (tea / 2 >= candy || candy / 2 >= tea){
            return 2;
        }
        return 1;
    } else {
        return 0;
    }
}

// This is the ninth problem, blackjack.
function blackjack(first, second){
    if (first > 21 && second > 21){
        return 0;
    } else if (first < second){
        if (second <= 21){
            return second;
        } else {
            return first;
        }
    } else if (second < first){
        if (first <= 21){
            return first;
        } else {
            return second;
        }
    }
}

// This is the tenth problem, loneSum.
function loneSum (a, b, c){
    var sum = 0;
    if (a != b && a != c){
        sum += a;
    }
    if (b != a && b != c){
        sum += b;
    }
    if (c != a && c != b){
        sum += c;
    }
    return sum;
}

/*
* I will be completely honest, I don't know what to do with the functions below.
* So they're just going to sit here and look pretty for now.
 */
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