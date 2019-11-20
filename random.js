const min = 0
const max = 11;

var fraseList = new Array(max);
var randomList = new Array();

montaFrasesList();
montaListDinamica();
exibirMensagemDinamica();

var ultimaMensagem = 0;

function exibirMensagemDinamica() {
	console.log("exibir mensagem dinamica!");
	
	for(var i = 0; i <= randomList.length-1; i++){
		if(i != ultimaMensagem){
			ultimaMensagem = i;
			console.log(fraseList[randomList[ultimaMensagem]]);
		}
		
	}
}

function montaListDinamica(){
	for(var i = 0; randomList.length < max+1; i++){
		var num = gerar();
		//n�o contains
		if(!(randomList.indexOf(num) > -1)){
			randomList[randomList.length++] = num;
		}
	}

	console.log('a lista random �: ');

	for (var y = 0; y < randomList.length; y++){
		console.log(randomList[y]);
	}

}

function montaFrasesList(){
	fraseList[0] = 'A pior ambi��o do ser humano � desejar colher os frutos daquilo que nunca plantou';
	fraseList[1] = 'Aproveite o m�ximo poss�vel de cada segundo da sua vida, afinal, o amanh� n�o lhe pertence';
	fraseList[2] = 'A vida tem as suas dificuldades, mas voc� sempre tem a possibilidade de dar a volta por cima';
	fraseList[3] = 'S� fracassei na vida quando eu n�o falei o que sentia';
	fraseList[4] = 'Honestidade � um presente caro. N�o espere isso de pessoas baratas.';
	fraseList[5] = 'Nunca mostre tuas feridas...O sangue atrai tubar�es.';
	fraseList[6] = 'N�o conseguimos mudar coisa alguma sem antes aceit�-la.';
	fraseList[7] = 'Melhor do que ser conhecido � ser uma pessoa que vale a pena conhecer.';
	fraseList[8] = 'O pior bobo � o que se acha muito esperto.';
	fraseList[9] = 'Tr�s regras: n�o prometa nada quando estiver feliz; n�o responda nada quanto estiver irritado; n�o decida nada quanto estiver triste';
	fraseList[10] = 'S� os tolos sabem de tudo. O s�bio aprende algo novo todo dia.';
	fraseList[11] = 'Seus joelhos te levam a lugares que seus p�s nunca levariam.';
	fraseList[12] ='Ter sucesso � falhar repetidamente, mas sem perder o entusiasmo';
	fraseList[13] = 'N�o importa o qu�o devagar voc� v�, desde que voc� n�o pare';
	fraseList[14] = 'Aquele que n�o luta pelo futuro que quer, deve aceitar o futuro que vier';
	fraseList[15] = 'Aprender � a �nica coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende';
	fraseList[16] = 'Descobri que quanto mais eu estudo, mais sorte eu pare�o ter nas provas';
	fraseList[17] = '� fazendo que se aprende, aquilo que se deve aprender a fazer';
	fraseList[18] = 'Nenhum obst�culo � t�o grande se sua vontade de vencer for maior';
	fraseList[19] = 'H� cinco degraus para se alcan�ar a sabedoria: Calar, ouvir, lembrar, sair, estudar.';
	fraseList[20] = 'Comece onde est�. Use o que voc� tem. Fa�a o que puder.'
	fraseList[21] = 'O sucesso normalmente vem para quem est� ocupado demais para pensar nele';
	
}

function gerar(){	
	return Math.floor(Math.random() * (max - min + 1) + min);
}
