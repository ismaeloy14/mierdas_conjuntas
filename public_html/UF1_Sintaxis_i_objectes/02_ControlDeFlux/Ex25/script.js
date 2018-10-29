/* 
25. Realitzar un programa que llegeixi els costats de 4 triangles, i calcular:
a) De cada un d'ells, quin tipus de triangle és: equilàter (tres costats iguals), isòsceles (dos costats
iguals), o escalè (cap costat igual)
b) Quantitat de triangles de cada tipus.
c) Tipus de triangle del qual hi ha menor quantitat.
*/

//Declarem les variables 
var Costat1 = [];
var Costat2 = [];
var Costat3 = [];
var tipusTriangle = [];
var isosceles = 0;
var equilater = 0;
var escale = 0;
var menys;

//i les demanem amb un for, alhora que les analitzem
for(var i=0;i<4;i++){
    parseFloat(Costat1[i] = prompt("Introduiex primer costat del triangle " + (i+1) + ":"));
    parseFloat(Costat2[i] = prompt("Introduiex segon costat del triangle " + (i+1) + ":"));    
    parseFloat(Costat3[i] = prompt("Introduiex tercer costat del triangle " + (i+1) + ":"));
    if(Costat1[i] == Costat2[i] && Costat2[i] == Costat3[i]) {
        equilater++; tipusTriangle[i] = "Equilater";
    }
    else if((Costat1[i] == Costat2[i] && Costat2[i] != Costat3[i]) || (Costat2[i] == Costat3[i] && Costat3[i] != Costat1[i]) || (Costat3[i] == Costat1[i] && Costat1[i] != Costat2[i])){
        isosceles++; tipusTriangle[i] = "Isosceles";
    }    
    else {
        escale++; tipusTriangle[i] = "Escale";
    }
}

//Ara comprovem de quin tipus de triangle hi ha menys
if(equilater < isosceles){
    if(equilater < escale) menys = "Equilater";
    else if (equilater = escale) menys = "Escale i Equilater";
    else menys = "Escale";
}

else if(isosceles < escale){
    if(isosceles < equilater) menys = "Isosceles";
    else if (isosceles = equilater) menys = "Isosceles i Equilater";
    else menys = "Equilater";
}

else if(escale < equilater){
    if(escale < isosceles) menys = "Escale";
    else if(escale = isosceles) menys = "Escale i Isosceles";
    else menys = "Isosceles"
}

else menys = "Tenim el mateix numero de triangles dels tres tipus"

//I ho mostrem per pantalla
alert("Triangle 1: " + tipusTriangle[0]+
     "\nTriangle 2: " + tipusTriangle[1] +
     "\nTriangle 3: " + tipusTriangle[2] +
     "\nTriangle 4: " + tipusTriangle[3] +
     "\nNumero triangles equilaters: " + equilater +
     "\nNumero triangles isosceles: " + isosceles +
     "\nNumero triangles escalens: " + escale +
     "\nMenor quantitat: " + menys);