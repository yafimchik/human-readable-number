module.exports = function toReadable (number) {
    if (number == 0) return "zero";
    
    let _tString = "";
    let exp = 0;
    let expH = 2;
    let expK = 3;
    let expM = 6;
    let expB = 9;
    let expT = 12;
    let strNumber = 0;
    let tNumber = 0;
  
    var expToString = function(expN){
        strNumber = String(number);
        exp = strNumber.length;
        let word = "";
        let tNumber = Math.trunc(number / (Math.pow(10,expN)));
        if (_tString != "") _tString += " ";
        _tString += toReadable(tNumber);
        
        switch(expN){
            case 2: word = " hundred";break;
            case 3: word = " thousand";break;
            case 6: word = " million";break;
            case 9: word = " billion";break;
            case 12: word = " trillion";break;
        }
        _tString += word;
        number = number % (Math.pow(10,expN));
        strNumber = String(number);
        exp = strNumber.length;
    }
  
    strNumber = String(number);
    exp = strNumber.length;

    
  
    if (exp > expT){
        expToString(expT);
    }
    if (exp > expB){
        expToString(expB);
    }
    if (exp > expM){
        expToString(expM);
    }
    if (exp > expK){
        expToString(expK);
    }
    if (exp > expH){
        expToString(expH);
    }
    if (number > 0){
        if (number < 20){
            if (_tString != "") _tString += " ";
            switch(number){
                case 1: _tString += "one";break;
                case 2: _tString += "two";break;
                case 3: _tString += "three";break;
                case 4: _tString += "four";break;
                case 5: _tString += "five";break;
                case 6: _tString += "six";break;
                case 7: _tString += "seven";break;
                case 8: _tString += "eight";break;
                case 9: _tString += "nine";break;
                case 10: _tString += "ten";break;
                case 11: _tString += "eleven";break;
                case 12: _tString += "twelve";break;
                case 13: _tString += "thirteen";break;
                case 14: _tString += "fourteen";break;
                case 15: _tString += "fifteen";break;
                case 16: _tString += "sixteen";break;
                case 17: _tString += "seventeen";break;
                case 18: _tString += "eighteen";break;
                case 19: _tString += "nineteen";break;
            }
        } else{
             let dec = Math.trunc(number / 10);
             if (_tString != "") _tString += " ";
            switch(dec){
                case 2: _tString += "twenty";break;
                case 3: _tString += "thirty";break;
                case 4: _tString += "forty";break;
                case 5: _tString += "fifty";break;
                case 6: _tString += "sixty";break;
                case 7: _tString += "seventy";break;
                case 8: _tString += "eighty";break;
                case 9: _tString += "ninety";break;
            }
            tNumber = number % 10;
            if (tNumber > 0){
              if (_tString != "") _tString += " ";
              _tString += toReadable(tNumber);
            }
        }
    }
    return _tString.trim();
  }
  