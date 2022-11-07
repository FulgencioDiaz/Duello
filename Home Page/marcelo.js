



const btn = document.querySelector('.addList')
const input = document.querySelector('.nombreLista')
const legend = document.querySelector('legend')
const forms = document.querySelector('.forms')
const visor = document.querySelector('.visor-tarea')
const arrayDivs = [];

const listas = [
    {nombre: '', 
    tareas: ''}
]





btn.onclick = (e) => {
    e.preventDefault()
    
    let nuevaLista = {nombre: input.value, tareas: 'tarea'}
    if(JSON.parse(localStorage.getItem('listas')) === null){
        listas.shift()
        listas.push(nuevaLista)
    localStorage.setItem('listas', JSON.stringify(listas))
    } else{
        listas.push(nuevaLista)
        localStorage.setItem('listas', JSON.stringify(listas))
    }
   
    
    const list = document.createElement("div")
    forms.appendChild(list)
    list.className = 'list'
    list.innerHTML = `<p>${input.value}</p> <div class='addTask'>Añadir tarea</div>`
    input.value = ''

    arrayDivs.push(list);
    if(arrayDivs.length >= 4){
        btn.disabled = true;
    }
    console.log(arrayDivs)

    const addTask = document.querySelector('.addTask')

addTask.addEventListener('click', () => {

    visor.style.display = 'flex'
})
}






