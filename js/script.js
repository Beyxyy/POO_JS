class chat{

    
     constructor(info){
      this.race= info.race;
      this.age = info.age;
      this.couleur= info.couleur;
     }

     incrementer(){
        this.age++;
        return this; //renvoyer la classe actuelle pour pouvoir chainer si je return autre chose ca ne me permettra plus de chainer sur des méthodes de la meme class
     }
     afficherAge(){
        console.log(this.age);
        return this;
     }
}

let chat1 = new chat({couleur : 'rouge', age : '12', race : 'bô'});
chat1.incrementer().afficherAge().incrementer().afficherAge();


class Voiture{
    constructor(target){

    }
}

