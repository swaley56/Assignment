class Person{
    constructor(firstName,lastName,midddleName,age,gender,stateOfOrigin){
        this.name={firstName,lastName,midddleName};
        this.age={age};
        this.gender={gender};
        this.state={stateOfOrigin};
    };
    Biodata(){
        console.log("My names are" +this.name.firstName"+"this.name.midddleName+
        this.name.lastName+."I am"+ this.age+"years old." + ".I am"+ "a"+ this.gender +".I am" + "from"+this.stateOfOrigin);
        
    };
 
}

const Person=newPerson("Mohammed","O","Zubair","20","Male","Lagos")
person.Biodata();