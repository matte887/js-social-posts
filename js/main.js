const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/id/1001/600/300",
        "author": {
            "name": "Phil Mangione",
            "image": "https://picsum.photos/id/1005/300"
        },
        "likes": 80,
        "created": "05-03-2022"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/id/1002/600/300",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://picsum.photos/id/1011/300"
        },
        "likes": 160,
        "created": "05-03-2022"
    }
];

// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// Creo una variabile per il contenitore HTML.
let container = document.getElementById("container");

// Per ogni item contenuto nell'array richiamo una funzione che crea un elemento html che poi appendo al contenitore HTML.
posts.forEach( post => {
    const thisPost = createNewDomElement(post);
    container.append(thisPost);
});

// Dopo aver creato gli elementi HTML, posso selezionarli. Seleziono quindi tutti i bottoni del like ed i relativi contatori...
const likeButtons = document.querySelectorAll(".js-like-button");

// ...e ad bottone aggiungo un event listener che aggiunge una classe per colorare il bottone stesso.
likeButtons.forEach( button => {
    button.addEventListener("click", function(){
        // Coloro il bottone aggiungendo la classe.
        this.classList.add("like-button--liked");

        // Seleziono l'id del bottone del like per poter cambiare il relativo contatore.
        const postId = this.dataset.postid;
        // Seleziono anche il counter con id che contiene lo stesso numero di postId.
        let counterId = document.getElementById(`like-counter-${postId}`);
        counterId.textContent = parseInt(counterId.textContent) + 1;
    });    
});

// Soluzione Adriano
// Array.from(document.getElementsByClassName('js-like-button')).forEach(button => {
//     button.addEventListener('click', function() {
//         console.log(this);
//     })
// })


// FUNCTIONS
/**
 * Description: la funzione riceve un oggetto con varie chiavi e restituisce un elemento per il dom.
 * @param {any} object -> è un oggetto con varie chiavi che vogliamo stampare.
 * @returns {any} -> un elemento del dom.
 */
function createNewDomElement(object) {
    const {id, content, media, author, likes, created} = object;

    const postContainer = document.createElement("div");
    postContainer.classList.add("post");


    const domElement = `<div class="post__header">
                            <div class="post-meta">                    
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="${author.image}" alt="${author.name}">                    
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${author.name}</div>
                                    <div class="post-meta__time">${created}</div>
                                </div>                    
                            </div>
                        </div>
                        <div class="post__text">${content}</div>
                        <div class="post__image">
                            <img src="${media}" alt="">
                        </div>
                        <div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                                </div>
                            </div> 
                        </div>`;

    postContainer.innerHTML = domElement;
    return postContainer;
}
