// // // // # Exercice :
// // // // >*En utilisant les class du fichier style.css*

// // // // >*Cherche des methodes pour résoudre les énoncés suivants :*

// // // // ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue

let h1 = document.getElementsByTagName('h1')[0];
h1.addEventListener('click', function() {
    this.classList.add('text-blue');
});

// // // // ### 2. Au double clique du h3, rajoute la class text-error

let h3 = document.getElementsByTagName('h3')[0];
h3.addEventListener('dblclick', function() {
  this.classList.add('text-error');
});

// // // // ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 

let p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  p[i].addEventListener('click', function() {
    if (this.classList.contains('text-style')) {
      this.classList.remove('text-style');
    } else {
      this.classList.add('text-style');
    }
  });
}

// // // // ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 

let spans = document.querySelectorAll('p:nth-last-of-type(2) span');
for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', function(event) {
    event.target.classList.toggle('bolder');
  });
}

// // // // ### 5. Dans le dernier paragraphe tu as trois span, crée un programme qui rajoute la class "bolder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !

let spans2 = document.querySelectorAll('p:last-of-type span');
for (let i = 0; i < spans2.length; i++) {
  spans2[i].addEventListener('click', function(event) {
    for (let j = 0; j < spans2.length; j++) {
      spans2[j].classList.remove('bolder-red');
    }
    event.target.classList.add('bolder-red');
  });
}

