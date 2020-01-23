function addTemplate() {
    let oneText = ['Past', 'Lively', 'Upcomming']
    let twoText = ['Matches', 'Opposition', 'Matches']

    let headerPerfil = document.querySelector('.header-perfil-detall-options-one')

    let temp = document.querySelector('#selectsquare')

    let div = temp.content.querySelectorAll('.square div')

    for (i = 0; i < oneText.length; i++) {
        div[0].textContent = oneText[i]
        div[1].textContent = twoText[i]
        headerPerfil.appendChild(document.importNode(temp.content, true))
    }
}
