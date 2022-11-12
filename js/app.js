// SELECTORS
const passwordField = document.querySelector('.passwordField');
const splitButton = document.querySelector('.splitButton');
const resultList = document.querySelector('.resultList');

// EVENT HANDLERS
document.body.addEventListener('click', splitEventListener);

// FUNCTIONS
function splitEventListener(ev) {
  console.log(ev.target);

  if (ev.target.classList[0] === 'splitButton') {
    splitPassword(ev);
  }
  if (ev.target.classList[0] === 'checkButton' || ev.target.classList[0] === 'deleteButton') {
    checkSkasuj(ev);
  }
  if (ev.target.className === "charField wybrana") {
    przywrocOrginal(ev);
  }
}


function splitPassword(event) {
  // Powstrzymaj przed nadaniem formularza
  event.preventDefault();  

  // Rozbijaa password na tablicę
  if (password.value != null || password.value != "") {
    let listaLiter = password.value.split('');
    let n = listaLiter.length;

    for (let i = 0; i < n; i++) {
      // Stwórz div: oneResultChar
      const elementWynikuDiv = document.createElement('div');
      elementWynikuDiv.classList.add('oneResultChar');

      // Stwórz li: numberField
      const cyfra = document.createElement('li');
      cyfra.innerText = (i + 1) + ':';
      cyfra.classList.add('numberField');
      // Przypnij numberField do oneResultChar
      elementWynikuDiv.appendChild(cyfra);

      // Stwórz li: charField
      const litera = document.createElement('li');
      litera.innerText = listaLiter[i];
      litera.classList.add('charField');
      // Przypnij charField do oneResultChar
      elementWynikuDiv.appendChild(litera);
      
      // Stwórz guzik: checkButton
      const checkButton = document.createElement('button');
      checkButton.title = "check";
      checkButton.classList.add('checkButton');
      checkButton.innerHTML = '<i class="fa fa-thin fa-check"></i>';
      // Przypnij guzik do elemnt-wyniku
      elementWynikuDiv.appendChild(checkButton);

      // Stwórz guzik: deleteButton
      const deleteButton = document.createElement('button');
      deleteButton.title = "delete";
      deleteButton.classList.add('deleteButton');
      deleteButton.innerHTML = '<i class="fa fa-thin fa-trash"></i>';
      // Przypnij guzik do: oneResultChar
      elementWynikuDiv.appendChild(deleteButton);

      // Przypnij cały oneResultChar do ul: lista-wyników
      resultList.appendChild(elementWynikuDiv);
    }
    // Wyczyść poleHasla
    password.value = "";
  }
}

function checkSkasuj (e) {
  //console.log(e.target);
  const item = e.target;

  // check or delete
  if (item.title === "check") {
    if (item.parentElement.classList[1] === 'transparent') {
      item.parentElement.classList.remove('transparent');
    }
    item.parentElement.querySelector('.numberField').classList.toggle('hidden');
    item.parentElement.querySelector('.deleteButton').classList.toggle('hidden');
    item.classList.toggle('hidden');
    item.parentElement.querySelector('.charField').classList.toggle('wybrana');    
  }

  if (item.title === "delete") {
    item.parentElement.querySelector(".charField").classList.toggle('skasowana');
    item.parentElement.classList.toggle('transparent');
  }
}

function przywrocOrginal(e) {

  const item = e.target;
  item.parentElement.querySelector('.charField').classList.remove('wybrana');
  item.parentElement.querySelector('.numberField').classList.remove('hidden');
  item.parentElement.querySelector('.deleteButton').classList.remove('hidden');
  item.parentElement.querySelector('.checkButton').classList.remove('hidden');
}