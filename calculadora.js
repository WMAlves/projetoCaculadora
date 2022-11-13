onload=()=>{
    document.querySelector('#bt-0').onclick = ()=> digito(0);
    document.querySelector('#bt-1').onclick = ()=> digito(1);
    document.querySelector('#bt-2').onclick = ()=> digito(2);
    document.querySelector('#bt-3').onclick = ()=> digito(3);
    document.querySelector('#bt-4').onclick = ()=> digito(4);
    document.querySelector('#bt-5').onclick = ()=> digito(5);
    document.querySelector('#bt-6').onclick = ()=> digito(6);
    document.querySelector('#bt-7').onclick = ()=> digito(7);
    document.querySelector('#bt-8').onclick = ()=> digito(8);
    document.querySelector('#bt-9').onclick = ()=> digito(9);
    document.querySelector('#bt-comma').onclick = ()=> virgula();
    document.querySelector('#bt-ac').onclick = ()=> AC();

}

// variaveis para armazenamento de valor, o operador e o estado da calculadora

let sValor='0'
let novoNumero=true;

//atualizçaão do visor
const atualizaVisor=()=>{
    let [parteInteira, parteDecimal] = sValor.split(',');
   
    document.getElementById('display').innerHTML=sValor;
};

//função do tratamento de botões de numeros
const digito =(n)=>{
    if(novoNumero){
        sValor=''+ n;
        novoNumero=false;
    }else
    sValor+=n;
    atualizaVisor();      
}

//tratamento de clique no botão de ponto decimal
const virgula=()=>{
    if(novoNumero){
        sValor='0, ';
        novoNumero=false;
    }else if(sValor.indexOf(',')==-1)
        sValor+=','
    atualizaVisor
}

// parei a aula no tempo 39:00 implantação do botão AC

const AC=()=>{
    novoNumero=true;
    sValor='0';
    atualizaVisor();


};

