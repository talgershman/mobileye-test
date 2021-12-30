const promiseA = new Promise((resolve) => {
    setTimeout(() => {
        const spanElem = document.createElement('span')
        spanElem.innerText = 'A resolved'
        document.querySelector('.result').appendChild(spanElem).appendChild(document.createElement('br'))
        resolve()
    }, 2000)
})

const promiseB = new Promise((resolve) => {
    setTimeout(() => {
        const spanElem = document.createElement('span')
        spanElem.innerText = 'B resolved'
        document.querySelector('.result').appendChild(spanElem).appendChild(document.createElement('br'))
        resolve()
    }, 1000)
})

const promiseC = new Promise((resolve) => {
    setTimeout(() => {
        const spanElem = document.createElement('span')
        spanElem.innerText = 'C resolved'
        document.querySelector('.result').appendChild(spanElem).appendChild(document.createElement('br'))
        resolve()
    }, 4000)
})
const promiseD = new Promise((resolve) => {
    setTimeout(() => {
        const spanElem = document.createElement('span')
        spanElem.innerText = 'D resolved'
        document.querySelector('.result').appendChild(spanElem).appendChild(document.createElement('br'))
        resolve()
    }, 2000)
})
const promiseE = new Promise((resolve) => {
    setTimeout(() => {
        const spanElem = document.createElement('span')
        spanElem.innerText = 'E resolved'
        document.querySelector('.result').appendChild(spanElem).appendChild(document.createElement('br'))
        resolve()
    }, 5000)
})

async function runner() {
}
  
runner();
