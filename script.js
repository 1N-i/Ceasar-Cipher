const alphabetNormal = "abcdefghijklmnopqrstuvwxyz"

const textNormal = document.getElementById("text-normal")
const textCipher = document.getElementById("text-cipher")


function cipherToNormal() {
    const numOfMoves = document.getElementById("num-of-moves").value

    const alphabetCipher = alphabetNormal.slice(numOfMoves, 26) + alphabetNormal.slice(0, numOfMoves)
    console.log(alphabetCipher)
    let text = ""

    for (const l of textCipher.value) {
        const idx = alphabetCipher.indexOf(l) 
        if (idx === -1) {
            text += l;
        } else {
            text += alphabetNormal[idx];
        }
    }

    textNormal.value = text
}

function normalToCipher() {
    const numOfMoves = document.getElementById("num-of-moves").value

    const alphabetCipher = alphabetNormal.slice(numOfMoves, 26) + alphabetNormal.slice(0, numOfMoves)
    console.log(alphabetCipher)
    let text = ""

    for (const l of textNormal.value) {
        const idx = alphabetNormal.indexOf(l) 
        if (idx === -1) {
            text += l;
        } else {
            text += alphabetCipher[idx];
        }
    }

    textCipher.value = text
}