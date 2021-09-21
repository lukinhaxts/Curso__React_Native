class Pessoa {

    constructor(name) {
        this.nome = name;
    }

    inserirIdade(idade) {
        this.idade = idade;
    }

}

class Aluno extends Pessoa {
    inserirEscola(escola){
        this.escola = escola;
    }
}

var Jose = new Aluno("José");
Jose.inserirIdade(17);
Jose.inserirEscola("CEFET");

console.log(Jose);

//------------------------------------------

var x = 10;
console.log(x);

var x = 15
console.log(x);

{
    var x = 5;
    console.log(x);
}

var x = 15
console.log(x);

{
    let x = 5;
    console.log(x);
}

console.log(x);

const y = 15;
console.log(y);

// Teste de erro na reatribuição de valor à uma const
// y = 10;
// console.log(y);

//------------------------------------------

class Animal {
    constructor(raca, nome) {
        this.raca = raca;
        this.nome = nome;
    }
}

class Porco extends Animal {
    constructor(raca, nome, patas) {
        super(raca, nome);
        this.patas = patas;
    }
}

var pig = new Porco("Ad", "A", 4);
console.log(pig);

//-------------------------------------------------

import * as calc from './functions'

console.log(calc.soma(5,10))

//------------------------------------------

const minhaPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("olá");
        }, 3000)
    })

minhaPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

async function chamaPromise() {
    resposta = await minhaPromise();
    console.log(resposta);
}

// chamaPromise();