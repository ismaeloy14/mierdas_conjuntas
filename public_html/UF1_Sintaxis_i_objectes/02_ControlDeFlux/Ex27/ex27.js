//Declarem els contadors
var contNeg = 0 //negatius
var contPos = 0 //positius
var contMult = 0 //multiples de 15
var contTotal = 0 //suma total

for (var i=0; i<10; i++)
{
	//Demanem un numero 10 cops
    var num = parseInt(prompt("Ingressa un numero","2")) 
	if (num >= 0)
	{
		contPos ++
	}
	else
	{
		contNeg ++
	}
	if (num % 15 == 0)
	{
		contMult ++
	}
	contTotal += num
}
alert("Positius: "+ contPos)
alert("Negatius: "+ contNeg)
alert("Multiples de 15: "+ contMult)
alert("Suma total: "+ contTotal)