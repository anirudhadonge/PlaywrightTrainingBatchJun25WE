/**
 * set of named constants
 */
/**
 * There is typo error 
 * Controlling the value from one place , ANY here would reflect different places where enum used.
 */
enum month{
    January='January',
    February="February"
}

function GetMonthNumber(nameOfMonth:string):number{

    switch(nameOfMonth){
        case "January":
            return 1;
        case "February":
            return 2;
        default:
            return 0;
    }
}

console.log(GetMonthNumber("janvary"));
console.log(GetMonthNumber("janvary"));
console.log(GetMonthNumber("janvary"));
console.log(GetMonthNumber("janvary"));
console.log(GetMonthNumber(month.January));
console.log(GetMonthNumber(month.January));
