const palindromo = document.getElementById('texto')
const botao = document.getElementById('botao')
const botaoNumero = document.getElementById('botao-listar')
const botaoTroca = document.getElementById('botao-trocar')
const botaoLimpar = document.getElementById('botao-limpar')

botao.addEventListener('click',()=>{
    const div = document.getElementById('resposta')
    const resposta = document.createElement('p')

    /*//soluão 1
    if(!palindromo.value ===! ""){
        alert('Digite uma palavra!')
    }else{
        if(verificaPalindromo(palindromo.value)){
            resposta.innerHTML = ` 
                Parabéns a palavra ${palindromo.value} é um palindromo!!!
            `
            resposta.style.color = 'green'
        }else{
            resposta.innerHTML = `A palavra ${palindromo.value} não é um palindromo `
            resposta.style.color = 'red'
        }
    }
    */
    //solução 2
    if(!palindromo.value ===! ""){
        alert('Digite uma palavra!')
    }else{
        if(verificaPalindromo2(palindromo.value)){
            resposta.innerHTML = ` 
                Parabéns a palavra ${palindromo.value} é um palindromo!!!
            `
            resposta.style.color = 'green'
        }else{
            resposta.innerHTML = `A palavra ${palindromo.value} não é um palindromo `
            resposta.style.color = 'red'
        }
    }

    div.appendChild(resposta)
    palindromo.value = ""
})
var array = []

botaoNumero.addEventListener('click',()=>{
    const numero = document.getElementById('numero')
    const divLista = document.getElementById('resposta-lista')
    const lista = document.createElement('span')  
    
    if(numero.value === ""){
        alert('Insira um número!')
    }else{
        divLista.appendChild(lista)
        array.push(numero.value)
    
        lista.innerHTML = `${numero.value},`
    }
    
    
})

botaoTroca.addEventListener('click',()=>{
    const divTrocada = document.getElementById('lista-trocada')
    const listaTrocada = document.createElement('p')
    divTrocada.appendChild(listaTrocada)

    listaTrocada.innerHTML = numerosPares(array)
    
    botaoTroca.disabled = true
    botaoNumero.disabled = true
    numero.disabled = true
})

botaoLimpar.addEventListener('click', ()=>{
    location.reload()
})

//solução 1
function verificaPalindromo(string){
    if(!string) return;
   return string.split("").reverse().join("") === string
}

//solução2
function verificaPalindromo2(string){
    if(!string) return

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]){
            return false
        }
    }
    return true
}

function numerosPares(numeros){
    if(!numeros) return

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            numeros[i] = 0
        }
    }
    return numeros   

}
