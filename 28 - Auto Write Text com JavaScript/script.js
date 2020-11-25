const magicTextHeader = document.querySelector('#magic-text')

const text = 'Texto inserido automagicamente com JavaScript!'

let indexCharacter = 0;

function writeText() {
  magicTextHeader.innerText = text.slice(0, indexCharacter);
  indexCharacter++;
  if(indexCharacter > text.length - 1) {
    setTimeout(() => {
      indexCharacter = 0;  
    }, 2000);
  }
}

setInterval(writeText, 100);
