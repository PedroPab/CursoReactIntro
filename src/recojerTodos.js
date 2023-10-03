
const arrayTodos = [
    { text: `La vida es vella`, complete: false },
    { text: `Aprender ortografia`, complete: true },
    { text: `Dormir`, complete: false },
    { text: `Ir al bano`, complete: false },
]

function recogerTodos() {
    let rta
    const todosLocal = localStorage.getItem('TODOS_V1')
    if (!todosLocal) {
        localStorage.setItem('TODOS_V1', '[]')
    }
    else {

        rta = JSON.parse(todosLocal)
        if (rta.length === 0) rta = arrayTodos

    }
    return rta
}

export { recogerTodos }
