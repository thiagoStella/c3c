function Calculate() {
	let a = parseFloat(document.getElementById("a").value);
	let b = parseFloat(document.getElementById("b").value);
	let c = parseFloat(document.getElementById("c").value);


	let delta = (b * b) - (4 * a * c);

	let x1 = (-(b) + Math.sqrt(delta)) / (2 * a);
	let x2 = (-(b) - Math.sqrt(delta)) / (2 * a);

	let produtoRaizes = x1 * x2;

	$("#calculosDelta").fadeOut(function() {
			$("#calculosDelta").html("Δ = " + b + "² - 4 * " + a + " * " + c).fadeIn(500);
		});

	
	$("#delta").fadeOut(function() {
			$("#delta").html("Δ = " + delta).fadeIn(1000);
		});


	if (delta > 0) {
		//document.getElementById("bhaskara").innerHTML = 

		$("#bhaskara").fadeOut(function() {
			$("#bhaskara").html("X¹ = " + x1 + "<br>X² = " + x2).fadeIn(2000);
		});

	} else if (delta < 0) {
		$("#bhaskara").fadeOut(function() {
			$("#bhaskara").html("Como o valor de delta é negativo, não existem raízes reais para este número.").fadeIn(2000);
		});
	} else if (delta == 0) {
		$("#bhaskara").fadeOut(function() {
			$("#bhaskara").html("Como Δ = 0, a equação possui uma única solução real.").fadeIn(2000);
		});
	} 

	if (document.getElementById("a").value.length == 0 || document.getElementById("b").value.length == 0 || document.getElementById("c").value.length == 0) {
		alert("Preencha todos os campos!")
		//window.location.reload()
		document.getElementById("delta").innerHTML = "Δ = indefinido";
	}
}
