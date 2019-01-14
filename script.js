//Exercice 1
//Exercice 1.1

let exercice1 = document.createElement("section"); //First screen
document.body.appendChild(exercice1);
exercice1.style.display = "block";

let container = document.createElement("section") //Second screen
document.body.appendChild(container)
container.style.display = "none"


let title = document.createElement("h1"); //Title
exercice1.appendChild(title);
title.textContent = "Cinéma Le Dauphin";

exercice1.appendChild(document.createElement("br"))
exercice1.appendChild(document.createElement("br"))

let description = document.createElement("p"); //Description
exercice1.appendChild(description);
description.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi).";

exercice1.appendChild(document.createElement("br"))
exercice1.appendChild(document.createElement("br"))

let moviesList = document.createElement("button") //Button for switch to the next screen
exercice1.appendChild(moviesList)
moviesList.textContent = "Voir les films à l’affiche cette semaine"
moviesList.addEventListener("click", switchScreen, false);


//Exercice 1.2

let headTAB = ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"]; //sequence head
let kohlerTAB = ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"]; //sequence movie 1
let schneiderTAB = ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"]; //sequence movie 2
let minerviniTAB = ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"]; //sequence movie 3
let sangSooTAB = ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]; //sequence movie 4

let moviesTAB = [headTAB, kohlerTAB, schneiderTAB, minerviniTAB, sangSooTAB]; //sequence movies two-dimensional table


//Exercice 1.3


function displayTABHTML(displayArray) { //function for display the table in setting
  let listTAB = document.createElement("table")
  container.appendChild(listTAB)
  listTAB.style.borderCollapse = "collapse";

  let head = document.createElement("thead"); //head of the table
  listTAB.appendChild(head);

  let headBis = document.createElement("tr");
  head.appendChild(headBis);

  let header;
  let i = 0;
  let elementCurrent; // variable intermédiaire de l'énumération
  while (i < displayArray[0].length) // continuation condition
  {
    elementCurrent = displayArray[0][i]; // recovery of the current element
    i = i + 1;
    header = document.createElement("th");
    header.textContent = elementCurrent;
    header.style.padding = "10px";
    header.style.border = "1px solid black";
    headBis.appendChild(header);
  }


  let body = document.createElement("tbody"); //body of the table
  listTAB.appendChild(body);

  let bodyBis = document.createElement("tr");
  body.appendChild(bodyBis);

  let element;
  i = 1; // intermediate variable of the index
  let j;
  let elementCurrent2;

  while (i < displayArray.length) // continuation condition
  {
    elementCurrent = displayArray[i]; // recovery of the current element
    bodyBis = document.createElement("tr");
    body.appendChild(bodyBis);
    j = 0;
    while (j < elementCurrent.length) // continuation condition
    {
      elementCurrent2 = displayArray[i][j]; // recovery of the current element
      j = j + 1; // mise à jour

      element = document.createElement("td")
      element.textContent = elementCurrent2; // display of current elements
      element.style.padding = "10px";
      element.style.border = "1px solid black";

      bodyBis.appendChild(element);
    }
    i = i + 1; // update
  }
}

displayTABHTML(moviesTAB);

container.appendChild(document.createElement("br"))
container.appendChild(document.createElement("br"))

let back = document.createElement("button")
container.appendChild(back)
back.textContent = "Retour"
back.addEventListener("click", function() {
  exercice1.style.display = "block";
  container.style.display = "none"
}, false);


//Exercice 1.4

function switchScreen() { // function for switch to the next screen
  container.style.display = "block";
  exercice1.style.display = "none"
}

document.body.appendChild(document.createElement("br"))
document.body.appendChild(document.createElement("br"))


//Exercice 2
//Exercice 2.1

let headTAB2 = ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"]; //sequence title
let acetiqueTAB = ["acide acétique", "17", "118"]; //sequence substance 1
let nitriqueTAB = ["acide nitrique", "-41", "86"]; //sequence substance 2
let sulfuriqueTAB = ["acide sulfurique", "10", "290"]; //sequence substance 3
let ethyliqueTAB = ["alcool éthylique", "-114", "78"]; //sequence substance 4
let aluminiumTAB = ["aluminium", "660", "2450"]; //sequence substance 5

let substancesTAB = [headTAB2, acetiqueTAB, nitriqueTAB, sulfuriqueTAB, ethyliqueTAB, aluminiumTAB]; //sequence Users Table

//Exercice 2.2

let exercice2 = document.createElement("section"); //First screen
document.body.appendChild(exercice2);
exercice2.style.display = "block";


function displayTABHTML2(displayArray) { //function for display the table in settings

  let newArray = []; // creates a new empty array

  let listTAB = document.createElement("table")
  exercice2.appendChild(listTAB)
  listTAB.style.borderCollapse = "collapse";

  let head = document.createElement("thead"); //head of the table
  listTAB.appendChild(head);

  let headBis = document.createElement("tr");
  head.appendChild(headBis);

  let header;
  let i = 0;
  let elementCurrent; // variable intermédiaire de l'énumération
  while (i < displayArray[0].length) // continuation condition
  {
    elementCurrent = displayArray[0][i]; // recovery of the current element
    i = i + 1;
    header = document.createElement("th");
    header.textContent = elementCurrent;
    header.style.padding = "10px";
    header.style.border = "1px solid black";
    headBis.appendChild(header);
  }


  let body = document.createElement("tbody"); //body of the table
  listTAB.appendChild(body);

  let bodyBis = document.createElement("tr");
  body.appendChild(bodyBis);

  let element;
  i = 1; // intermediate variable of the index
  let j;
  let elementCurrent2; // variable intermédiaire de l'énumération

  while (i < displayArray.length) // continuation condition
  {
    elementCurrent = displayArray[i]; // recovery of the current element
    bodyBis = document.createElement("tr");
    body.appendChild(bodyBis);
    j = 0;
    while (j < elementCurrent.length) // continuation condition
    {
      elementCurrent2 = displayArray[i][j]; // recovery of the current element

      j = j + 1; // update

      element = document.createElement("td")
      element.textContent = elementCurrent2; // display of current elements
      element.style.padding = "10px";
      element.style.border = "1px solid black";

      bodyBis.appendChild(element);
    }
    i = i + 1; // update
  }
}

displayTABHTML2(substancesTAB);

let limitText = document.createElement("label")
exercice2.appendChild(limitText)
limitText.textContent = "température d’ébullition max en °C :"
limitText.setAttribute("for", "limitNum")

let limitNum = document.createElement("input")
exercice2.appendChild(limitNum)
limitNum.setAttribute("type", "number")
exercice2.appendChild(document.createElement("br"))
exercice2.appendChild(document.createElement("br"))

//ButtonlimitText
let validate = document.createElement("button")
exercice2.appendChild(validate)
validate.textContent = "OK"
validate.addEventListener("click", function() {
  listTAB.style.display = "block";
}, false);

exercice2.appendChild(document.createElement("br"))
exercice2.appendChild(document.createElement("br"))

//Exercice 2.2
let listTAB;

function displayTABLimit(displayArray, limitNum) { //function for display the table with limit in settings

  let newArray = []; // creates a new empty array

  listTAB = document.createElement("table")
  exercice2.appendChild(listTAB)
  listTAB.style.borderCollapse = "collapse";

  let head = document.createElement("thead"); //head of the table
  listTAB.appendChild(head);

  let headBis = document.createElement("tr");
  head.appendChild(headBis);

  let header;
  let i = 0;
  let elementCurrent; // variable intermédiaire de l'énumération
  while (i < displayArray[0].length) // continuation condition
  {
    elementCurrent = displayArray[0][i]; // recovery of the current element
    i = i + 1;
    header = document.createElement("th");
    header.textContent = elementCurrent;
    header.style.padding = "10px";
    header.style.border = "1px solid black";
    headBis.appendChild(header);
  }


  let body = document.createElement("tbody"); //body of the table
  listTAB.appendChild(body);

  let bodyBis = document.createElement("tr");
  body.appendChild(bodyBis);

  let element;
  i = 1; // intermediate variable of the index
  let j;
  let elementCurrent2; // variable intermédiaire de l'énumération

  while (i < displayArray.length) // continuation condition
  {
    elementCurrent = displayArray[i]; // recovery of the current element
    bodyBis = document.createElement("tr");
    body.appendChild(bodyBis);
    j = 0;
    while (j < elementCurrent.length) // continuation condition
    {
      elementCurrent2 = displayArray[i][j]; // recovery of the current element
      j = j + 1; // update

      if (elementCurrent[2] <= limitNum)
              newArray.push(elementCurrent);
            }

      element = document.createElement("td")
      element.textContent = elementCurrent[0]; // display of current elements
      element.style.padding = "10px";
      element.style.border = "1px solid black";

      bodyBis.appendChild(element);
    }
    i = i + 1; // update
  }

displayTABLimit(substancesTAB, limitNum);
