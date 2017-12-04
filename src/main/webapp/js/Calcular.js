/* Cria a classe Calcular */
Calcular = function () {
}

/*calcula o maior numero */
Calcular.prototype.maior = function () {
	numero1 = document.getElementById("numero1").value;
	numero2 = document.getElementById("numero2").value;
	if (numero1 > numero2) {
		window.alert("Maior numero :" + numero1);
	} else {
		window.alert("Maior numero :" + numero2);
	}
}

/* calcula a soma dos numero */
Calcular.prototype.soma = function(){
	n1 = document.getElementById("n1").value;
	n2 = document.getElementById("n2").value;
	
	soma = (parseInt(n1)+parseInt(n2));
	window.alert("A soma dos numeros : "+soma);
}



c = new Calcular();