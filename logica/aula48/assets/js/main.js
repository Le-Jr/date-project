const dataAtual = new Date();

let numberDay = dataAtual.getDay();
let dayMonth = dataAtual.getDate();
let numberMonth = dataAtual.getMonth();
let anoAtual = dataAtual.getFullYear();


let hourDay = dataAtual.getHours();
let minDay = dataAtual.getMinutes();


function dataFormatada(){
    const diaSemana = changeDay(numberDay);
    const mesAtual = changeMonth(numberMonth);
    let textoModificado = document.querySelector(".tempo")

    console.log(diaSemana,dayMonth, mesAtual, anoAtual, hourDay + ":" +'0'+minDay )
    return textoModificado.innerHTML = `${diaSemana}, ${dayMonth} de ${mesAtual} de ${anoAtual} ${formataHora(hourDay)}:${formataHora(minDay)}`
    
}

function formataHora(num){
    return num < 10 ?  '0' + num : num
}


dataFormatada();



function changeDay(numberDay) {
    let weekDay = ['Domingo','Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

    switch(numberDay){
        case 0:
            return weekDay[0]
        break
        case 1:
            return weekDay[1]
        break
        case 2:
            return weekDay[2]
        break
        case 3:
            return weekDay[3]
        break
        case 4:
            return weekDay[4]
        break
        case 5:
            return weekDay[5]
        break
        case 6:
            return weekDay[6]
        break
        default:
            return ''
        break 
    }
    
}

function changeMonth(numberMonth) {
    let monthDay = ['Janeiro','Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho']

    switch(numberMonth){
        case 0:
            return monthDay[0]
        break
        case 1:
            return monthDay[1]
        break
        case 2:
            return monthDay[2]
        break
        case 3:
            return monthDay[3]
        break
        case 4:
            return monthDay[4]
        break
        case 5:
            return monthDay[5]
        break
        case 6:
            return monthDay[6]
        break
        default:
            return ''
        break 
    }
    
}