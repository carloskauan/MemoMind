function selectInput () {
    const inputs = document.querySelectorAll('.form .ctr-input input')

    for (let input of inputs) {
        input.addEventListener('click', (e) => {
            const label = e.target.parentElement.childNodes[1]
            label.classList.add('click')

            e.target.addEventListener('blur', (e) => {
                const label = e.target.parentElement.childNodes[1]
                label.classList.remove('click')
            })
        })
    }
}

window.addEventListener('load', () => {
    selectInput()
})