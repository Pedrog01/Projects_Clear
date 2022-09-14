// aqui comecei a rever os conceitos de operadores logicos e outros...

let a = 10;
let b = "10";

console.log(a == b && b != a);


// Controle de Fluxo (if/else)

let c = 15;
let d = 30
if(c <= d ){
    console.log("C é menos que D");
}else{

    console.log("D é menor que C");
}

// Contole de Fluxo(Semáfaro/Casos)

let cor = "Roxo";

switch(cor){

    case cor = "verde":
    console.log("Siga em frente");
    break

    case cor = "Amarelo":
    console.log("Atenção ");
    break

    case cor = "Vermelho":
    console.log("Pare");
    break
}

// Tabuada (for)
let n = 5;

for( let i=0; i <= 10; i++){

    console.log(`${i} X ${n} = ${i*n}`)

}




