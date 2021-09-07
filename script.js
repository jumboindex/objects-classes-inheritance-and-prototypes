// School class - base
class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    } 
    get name() {
        return this.name;
    }

    get level() {
        return this.level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(numberOfStudents) {
        if (typeof numberOfStudents === 'number') this._numberOfStudents = numberOfStudents;
        else console.log('Invalid input: numberOfStudents must be set to a Number.');
    }

    quickFacts() {
        return console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
    
        let randomNumber = Math.floor((Math.random() * substituteTeachers.length));
        return substituteTeachers[randomNumber];
    }

}

// primary school class - extends school
 class PrimarySchool extends School{
     constructor(name, numberOfStudents, pickUpPolicy){
     super(name, 'primary', numberOfStudents)
     this._pickupPolicy = pickUpPolicy;
     }

     get pickUpPolicy() {
         return this._pickupPolicy;
     }

 }

// secondary school class - extends school

class SecondarySchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
        super(name, 'secondary', numberOfStudents)
        this._sportsTeam = sportsTeam; 
    }

    get sportsTeam() {
        console.log(this._sportsTeam);
    }
}


// create primary school
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
/* console.log(lorraineHansbury.quickFacts());
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])); */

// create secondary school 
const magnaCartaSchool = new SecondarySchool('The Magna Carta School of Excellence', 1500, ['Rugby', 'Hockey', 'Football', 'Tennis']);
/* console.log(magnaCartaSchool);
console.log(magnaCartaSchool.sportsTeam)
 */
// checking prototypes
let primaryProto = Object.getPrototypeOf(lorraineHansbury);
let secondaryProto = Object.getPrototypeOf(magnaCartaSchool);
let protoSchool = Object.getPrototypeOf(School);

/* console.log( primaryProto);
console.log(secondaryProto);
console.dir(protoSchool); */

// magnaCartaSchool --> SecondarySchool.prototype --> School.prototype --> Object.prototype --> null 
console.log(secondaryProto);
console.log(SecondarySchool.prototype);
console.log(School.prototype);

// lorraineHansbury --> PrimarySchool.prototype --> School.prototype --> Object.prototype --> null 
console.log('--------------------------')
console.log(primaryProto);
console.log(PrimarySchool.prototype);
console.log(School.prototype);