const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const root = document.querySelector(':root');

const imgs = document.querySelectorAll('img');
const img_length = imgs.length;
let current_img_position = imgs.length-1;
let prev_link= current_img_position;
let next_link = current_img_position;
let img_ids = []
imgs.forEach((img) => {
    img_ids.push(img.id);
})

prev.addEventListener('click',() => {
    if (prev_link > 0) {
        prev_link -=1
        next_link -=1
        root.style.setProperty(`--${img_ids[prev_link]}`,1);

        /*document.getElementById(`${img_ids[prev_link]}`).style.animation = 'moveToRight 3s ease-in-out';*/
        if(prev_link <= img_ids.length-2) {
            console.log(prev_link+1);
            root.style.setProperty(`--${img_ids[prev_link+1]}`,0);
        }
    }
});

next.addEventListener('click',() => {
    if (next_link < img_ids.length-1) {
        prev_link +=1
        next_link +=1
        root.style.setProperty(`--${img_ids[next_link]}`,1);
        if(next_link > 0) {
            console.log(prev_link+1);
            root.style.setProperty(`--${img_ids[next_link-1]}`,0);
        }
    }
});

