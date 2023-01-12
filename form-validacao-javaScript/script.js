const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-requerid')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

form.addEventListener('submit', (event) => {
    event.preventDefault()

    nameValidate()
    emailValidate()
    mainPasswordValidate()
    comparePassword()
})


function setError(index) {
    campos[index].style.border = '2px solid #ee2e31'
    spans[index].style.display = 'block'
}

function removeError(index) {
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}

function nameValidate() {
    if(campos[0].value.length < 3) {
        //console.log('Nome deve ter 3 caracteres')
        setError(0)

    } else {
        //console.log('Validado o nome')
        removeError(0)
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[1].value)) {
        //console.log('Validado')
        setError(1)
    } else {
        //console.log('Não validado')
        removeError(1)
    }
}

function mainPasswordValidate() {
    if(campos[2].value.length < 8) {
        setError(2)
    } else {
        removeError(2)
        comparePassword()
    }
}

function comparePassword() {
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8) {
        removeError(3)
    } else {
        setError(3)
    }
}