for (let i = 0; i <= 7; i++) {
    let card = document.createElement('div');
    let cardImg = document.createElement('div');
    let cardBody = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let a = document.createElement('a');

    card.appendChild(cardImg);
    cardImg.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(h2);
    cardBody.appendChild(p);
    cardBody.appendChild(a);

    card.className = 'card'
    cardImg.className = 'card-img'
    img.src = './img/img.jpg'
    cardBody.className = 'card-body'

    h2.innerText = 'Main title'
    p.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum voluptate culpa, in iste, nemo quas quae labore, dolores neque expedita velit quos pariatur a nisi sint! Ex asperiores ab officia!'
    a.innerText = 'Read More'

    document.getElementById('container').appendChild(card);
}

