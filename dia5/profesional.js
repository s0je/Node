class Professional{

    constructor(id, image, name, age, genre, weight, height, hairColor, race, isRetired, nationality, oscarsNumber, profesion)
    {   
        this.image = image;
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profesion = profesion;
    }

    printAll()
    {
       console.log(`Image : ${this.image}\n Name: ${this.name}\n Genre: ${this.genre}\n Weigth: ${this.weight}\n Height: ${this.height}\n Hair color: ${this.hairColor}\n Race: ${this.race}\n Is retired?: ${this.isRetired}\n Nationality: ${this.nationality}\n Number of Oscars: ${this.oscarsNumber} \n Profession: ${this.profesion}`);
    }
}

module.exports = {Professional: Professional}