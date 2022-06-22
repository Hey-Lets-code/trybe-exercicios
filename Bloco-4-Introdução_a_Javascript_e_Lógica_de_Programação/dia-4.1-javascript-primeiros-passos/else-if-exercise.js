const currentHour = 23;
let message = "";

if (currentHour >=22){
    message = "Não deveríamos comer nada, é hora de dormir"
}
else if(currentHour>=18 && currentHour<22){
    message = "Rango da Noite!";
}
else if(currentHour >=14 && currentHour <18){
    message = "Vamos fazer um bolo pro café da tarde? :D"
}
else if(currentHour >=11 && currentHour < 14){
    message = "Hora do almoço";
}
else{
    message = "Hmmmm, cheiro de café recém passado"
}

console.log (message);