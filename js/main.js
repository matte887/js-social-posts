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

let container = document.getElementById("container");

posts.forEach( post => {
    const thisPost = createNewDomElement(post);
    console.log(thisPost);
    container.append(thisPost);
});

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
                                    <a class="like-button  js-like-button" href="#" data-postid="1">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                                </div>
                            </div> 
                        </div>`;
    postContainer.innerHTML = domElement;
    return postContainer;
}