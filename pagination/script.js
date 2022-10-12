const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'
const per_page = 10;
let counter
const btns = document.querySelectorAll('.btn')
const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data 
}


/*
const dom_printer = () => {
    getData().then((elements) => {
        console.log(typeof elements);
        elements.map((element) => {
            console.log(typeof element);
            let main_container = document.querySelector('.data-container')
            let tag = document.createElement('div');
            let img = document.createElement('img');
            let h1 = document.createElement('h1');
            let btn = document.createElement('button')
            btn.textContent = 'view profile'
            h1.textContent = element.login;
            img.src = element.avatar_url;
            tag.classList.add('card');
            tag.append(img,h1,btn);
            main_container.appendChild(tag);
        });
    });
}

dom_printer();
btns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        const curr_idx = parseInt(e.target.textContent);
        counter = curr_idx-1 * 10
        while (counter < curr_idx*10) {
        }
    });
});
*/

getData().then((elements) => {
    elements.map((element) => {
        let main_container = document.querySelector('.data-container')
        let tag = document.createElement('div');
        let img = document.createElement('img');
        let h1 = document.createElement('h1');
        let btn = document.createElement('button')
        btn.textContent = 'view profile'
        h1.textContent = element.login;
        img.src = element.avatar_url;
        tag.classList.add('card');
        tag.append(img,h1,btn);
        main_container.appendChild(tag);

    })
    
})

