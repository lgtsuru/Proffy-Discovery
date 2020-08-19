const subjects = [

    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Selecione uma opção",
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//FUNCIONALIDADE

function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}

function convertHoursToMinutes(time){
    console.log(time)
    const [hour,minutes] = time.split(":")
    return Number((hour*60) + minutes)
}



module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}