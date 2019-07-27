function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = true) {
    // criando a barreira
    this.elemento = novoElemento('div', 'barreira')
    // criando a borda e o corpo
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    // setando altura
    this.setAltura = function(altura){
        return corpo.style.height = `${altura}px`
    }
}

// const b = new Barreira(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(alt, abert, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSup = Math.random() * (alt - abert)
        const alturaInf = alt - abert - alturaSup
        this.superior.setAltura(alturaSup)
        this.inferior.setAltura(alturaInf)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

const b = new ParDeBarreiras(700, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)