function intToRoman(input){
    let val = parseInt(input);
    if(val<1) return "Sorry, only positive integers";
    let temp = val;
    let roman = "";

    while(temp>0){
        // we do the letters in descending order so that numerous I's are not displayed 
        if(temp-1000>=0){
            roman+="M";
            temp-=1000;
        }
        else if(temp-900>=0){
            roman+="CM";
            temp-=900;
        }
        else if(temp-500>=0){
            roman+="D";
            temp-=500;
        }
        else if(temp-400>=0){
            roman+="CD";
            temp-=400;
        }
        else if(temp-100>=0){
            roman+="C";
            temp-=100;
        }
        else if(temp-90>=0){
            roman+="XC";
            temp-=90;
        }
        else if(temp-50>=0){
            roman+="L";
            temp-=50;
        }
        else if(temp-40>=0){
            roman+="XL";
            temp-=40;
        }
        else if(temp-10>=0){
            roman+="X";
            temp-=10;
        }
        else if(temp-9>=0){
            roman+="IX";
            temp-=9;
        }
        else if(temp-5>=0){
            roman+="V";
            temp-=5;
        }
        else if(temp-4>=0){
            roman+="IV";
            temp-=4;
        }
        else {
            roman+="I";
            temp-=1;
        }
    }

    // this is the text that will be returned to the website
    return val+" in roman numerals is: "+roman;
}

// variables to access HTML elements
let number = document.getElementById("inp");
let roman = document.getElementById("roman");
let convert = document.getElementById("btn");

// when the convert button is clicked, the integer will be converted to roman
convert.addEventListener("click", function(){
    let val = number.value;
    roman.innerHTML = intToRoman(val);
});


/** this for loop performs a linear search to see if there are any invalid letters in the string
this function is case sensitive so lowercase letters will not be accepted
(the end point will be length-1 since we will check for X after I, V after I etc) */
function romanToInt(input){
    // accumulator for printing the string
    let val = input+"";
    let intval = 0;
    

    // Defines a map rti (roman to integer) with roman keys and integer values
    const rti = new Map([
        ['M',1000],
        ['CM',900],
        ['D',500],
        ['CD',400],
        ['C',100],
        ['XC',90],
        ['L',50],
        ['XL',40],
        ['X',10],
        ['IX',9],
        ['V',5],
        ['IV',4],
        ['I',1]
    ]);

    // I used a while loop to prevent any extra calculations
    let i = 0;
    // end condition is length-1 because I will be accessing two indices at a time
    while(i<val.length-1){
        
        let onestr = val.charAt(i);
        let twostr = val.substring(i,i+2);
        if(!rti.has(onestr)){
            console.log("error");
            return "Whoops, only M, D, C, L, X, V, and I are supported";
        }
        // there should be no invalid letters like A, B, E, or F
        if(rti.has(twostr)){
            intval+=rti.get(twostr);
            i++;
        }
        // takes in two characters at a time (for IV, IX, etc)
        else{
            intval+=rti.get(onestr);
        }
        i++;
    }
    // only if the current index is at the last character will additional calculations be applied
    if(i==val.length-1){
        intval+=rti.get(val.charAt(val.length-1));
    }
    return val+" as an integer is "+intval;
}

// HTML element access
let rom = document.getElementById("inp1");
let integer = document.getElementById("integer");
let btn1 = document.getElementById("btn1");

// when the convert button is clicked, the roman number will be converted to integer
btn1.addEventListener("click",function(){
    let val = rom.value;
    integer.innerHTML = romanToInt(val);
});
