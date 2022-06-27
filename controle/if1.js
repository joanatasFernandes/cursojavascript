function soBoaNoticia(nota){
    if(nota >= 7){
        console.log(`Aprovado com ${nota}`);
    }
}
soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdade(valor) {
    if(valor)  {
        console.log('É verdade...' + valor);
    }
}

// Testando o resultado real se for verdadeiro , seja qualquer entrada o programa pega o valor e converte para boolean 
seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);
seForVerdade(-1);
seForVerdade(' ');
seForVerdade('?');
seForVerdade([]);
seForVerdade([1, 2]);
seForVerdade({});

