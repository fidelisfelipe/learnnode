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
		//não contains
		if(!(randomList.indexOf(num) > -1)){
			randomList[randomList.length++] = num;
		}
	}

	console.log('a lista random é: ');

	for (var y = 0; y < randomList.length; y++){
		console.log(randomList[y]);
	}

}

function montaFrasesList(){
	fraseList[0] = 'A pior ambição do ser humano é desejar colher os frutos daquilo que nunca plantou';
	fraseList[1] = 'Aproveite o máximo possível de cada segundo da sua vida, afinal, o amanhã não lhe pertence';
	fraseList[2] = 'A vida tem as suas dificuldades, mas você sempre tem a possibilidade de dar a volta por cima';
	fraseList[3] = 'Só fracassei na vida quando eu não falei o que sentia';
	fraseList[4] = 'Honestidade é um presente caro. Não espere isso de pessoas baratas.';
	fraseList[5] = 'Nunca mostre tuas feridas...O sangue atrai tubarões.';
	fraseList[6] = 'Não conseguimos mudar coisa alguma sem antes aceitá-la.';
	fraseList[7] = 'Melhor do que ser conhecido é ser uma pessoa que vale a pena conhecer.';
	fraseList[8] = 'O pior bobo é o que se acha muito esperto.';
	fraseList[9] = 'Três regras: não prometa nada quando estiver feliz; não responda nada quanto estiver irritado; não decida nada quanto estiver triste';
	fraseList[10] = 'Só os tolos sabem de tudo. O sábio aprende algo novo todo dia.';
	fraseList[11] = 'Seus joelhos te levam a lugares que seus pés nunca levariam.';
	fraseList[12] ='Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo';
	fraseList[13] = 'Não importa o quão devagar você vá, desde que você não pare';
	fraseList[14] = 'Aquele que não luta pelo futuro que quer, deve aceitar o futuro que vier';
	fraseList[15] = 'Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende';
	fraseList[16] = 'Descobri que quanto mais eu estudo, mais sorte eu pareço ter nas provas';
	fraseList[17] = 'É fazendo que se aprende, aquilo que se deve aprender a fazer';
	fraseList[18] = 'Nenhum obstáculo é tão grande se sua vontade de vencer for maior';
	fraseList[19] = 'Há cinco degraus para se alcançar a sabedoria: Calar, ouvir, lembrar, sair, estudar.';
	fraseList[20] = 'Comece onde está. Use o que você tem. Faça o que puder.'
	fraseList[21] = 'O sucesso normalmente vem para quem está ocupado demais para pensar nele';
	
}

function gerar(){	
	return Math.floor(Math.random() * (max - min + 1) + min);
}
