//JS Classes

/*Create a PlayerCharacter and a NonPlayerCharacter with a common ancestor Character. 
The characters are located in a 10x10 game field, meaning they have x and y position. 
All characters appear at a random location. 
Create those three classes, and make sure you can query where each character is.
Make sure the Character class cannot be instantiated.
Add an option to set both x and y ( at the same time ) using a setter.
Keep count of created characters using a static property.
Throw an error if the user tries to set x and y that are out of bounds ( 10x10 ).
*/
 
class Character{
    static count = 0;

    constructor(){
        this.x = Math.round(Math.random()*10);
        this.y = Math.round(Math.random()*10);
        Character.count++;
    }

    set location(coordinates){
        if(coordinates[0] > 10 || coordinates[1] > 10 || coordinates[0] <= 0 || coordinates[1] <= 0){
            throw "Out of bounds";
        }
        this.x = coordinates[0];
        this.y = coordinates[1];
    }

    get location(){
        return [this.x, this.y];
    }

}

class NonPlayerCharacter extends Character{
    constructor(x,y){
        super(x,y)
    }
}

class PlayerCharacter extends Character{
    constructor(x,y){
        super(x,y);
    }
}

var first = new PlayerCharacter();
var second = new NonPlayerCharacter();
var third = new NonPlayerCharacter();

