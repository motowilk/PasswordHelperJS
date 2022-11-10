// SELECTORS
const poleHaslo = document.querySelector('.pole-haslo');
const zbadajButton = document.querySelector('.button-zbadaj');
const listaWynikow = document.querySelector('.lista-wynikow');

// EVENT HANDLERS
zbadajButton.addEventListener('click', rozbijHaslo);
listaWynikow.addEventListener('click', zaznaczSkasuj);

// FUNCTIONS
function rozbijHaslo(event) {
  // Powstrzymaj przed nadaniem formularza
  event.preventDefault();  

  // Rozbijaa poleHaslo na tablicę
  if (poleHaslo.value != null || poleHaslo.value != "") {
    let listaLiter = poleHaslo.value.split('');
    let n = listaLiter.length;

    for (let i = 0; i < n; i++) {
      // Stwórz div: element-wyniku
      const elementWynikuDiv = document.createElement('div');
      elementWynikuDiv.classList.add('element-wyniku');

      // Stwórz li: pole-cyfra
      const cyfra = document.createElement('li');
      cyfra.innerText = (i + 1) + ':';
      cyfra.classList.add('pole-cyfra');
      // Przypnij pole-cyfra do element-wyniku
      elementWynikuDiv.appendChild(cyfra);

      // Stwórz li: pole-litera
      const litera = document.createElement('li');
      litera.innerText = listaLiter[i];
      litera.classList.add('pole-litera');
      // Przypnij pole-litera do element-wyniku
      elementWynikuDiv.appendChild(litera);
      
      // Stwórz guzik: button-zaznacz
      const zaznaczButton = document.createElement('button');
      zaznaczButton.title = "zaznacz";
      zaznaczButton.classList.add('button-zaznacz');
      zaznaczButton.innerHTML = '<i class="fa fa-thin fa-check"></i>';
      // Przypnij guzik do elemnt-wyniku
      elementWynikuDiv.appendChild(zaznaczButton);

      // Stwórz guzik: button-skasuj
      const skasujButton = document.createElement('button');
      skasujButton.title = "skasuj";
      skasujButton.classList.add('button-skasuj');
      skasujButton.innerHTML = '<i class="fa fa-thin fa-trash"></i>';
      // Przypnij guzik do: element-wyniku
      elementWynikuDiv.appendChild(skasujButton);

      // Przypnij cały element-wyniku do ul: lista-wyników
      listaWynikow.appendChild(elementWynikuDiv);
    }

    // Wyczyść poleHasla
    poleHaslo.value = "";
  }
}

function zaznaczSkasuj (e) {
  console.log(e.target);
  const item = e.target;

  // zaznacz or skasuj
  if (item.title === "zaznacz") {
    item.parentElement.querySelector('.pole-cyfra').remove();
    item.parentElement.querySelector('.button-skasuj').remove();

    item.parentElement.querySelector('.pole-litera').classList.toggle('wybrana');    
    item.remove();
  }

  if (item.title === "skasuj") {
    item.parentElement.querySelector(".pole-litera").classList.toggle('skasowana');
    item.parentElement.classList.toggle('przezroczysta');
  }
}