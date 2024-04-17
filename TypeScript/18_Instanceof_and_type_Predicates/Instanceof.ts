function  logvalue(x: Date | string){
    if ( x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}


type fish = {swim: () => void}
type bird = {fly: () => void}

function isFish(pet: fish | bird ){
return (pet  as fish).swim !== undefined ;
}
function isBird(pet: fish | bird ){
return (pet  as bird).fly() !== undefined ;
}

function getFood(pet: fish | bird){
    if(isFish(pet)){
        (pet as fish).swim();
        return "Fish Food";
    }
    else{
        (pet as bird).fly();
        return "Bird Food";
    }
}
