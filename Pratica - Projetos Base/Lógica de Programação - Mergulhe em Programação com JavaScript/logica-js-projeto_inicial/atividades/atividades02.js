let weekDay = prompt("Qual é o dia da semana?");

if (weekDay === "Sábado" || weekDay === "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

if (!isNaN(weekDay)) {
    let number = parseFloat(weekDay);
    if(number < 0) {
        alert("Número negativo!");
    } else {
        alert("Número positivo!");
    }
}



// let isContinue = true;
// let points = 0;
// let max = 100;
// let min = 0;
// while (isContinue) {
//     let randomNumber = Math.floor(Math.random() * (max - min) + min);
//     let choose = prompt("Digite um número de 0 a 100");

//     points = (points + (parseInt(choose) - randomNumber));
//     console.log(`POINTS: ${points}`);

//     if(points >= 100) {
//         alert("Parabéns, você venceu!");
//         isContinue = false;
//     } else {
//         alert(`Pontuação atual: ${points}`);
//     }
// }



let bank = 10000;
let money = prompt("Digite o valor que deseja depositar:");
bank = bank + parseInt(money);
alert(`O salda atual da sua conta é: ${bank}`);

let yourName = prompt("Qual é o seu nome?");
alert(`Welcome ${yourName}!!!`);