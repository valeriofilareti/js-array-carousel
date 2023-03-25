const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
]

const imgWrapper = document.querySelector('.img-wrapper');

const topBtn = document.getElementById('top-button')

const bottomBtn = document.getElementById('bottom-button')







for (i = 0; i < images.length; i++) {
  const img = images[i];
  imgWrapper.innerHTML += `<img class="item hide" src="${img}">`;
  console.log(img);
}



const items = imgWrapper.getElementsByClassName('item')

let imgCounter = 0
items[imgCounter].classList.remove('hide')

console.log(items[imgCounter])

bottomBtn.addEventListener('click', function(){

  items[imgCounter].classList.add('hide');
  imgCounter++
  items[imgCounter].classList.remove('hide');
  topBtn.classList.remove('hide-btn')
  console.log(items[imgCounter])
  if(imgCounter === 4){
    bottomBtn.classList.add('hide-btn')
  }
})

topBtn.addEventListener('click', function(){
  items[imgCounter].classList.add('hide');
  imgCounter--
  items[imgCounter].classList.remove('hide');
  bottomBtn.classList.remove('hide-btn')
  if(imgCounter === 0){
    topBtn.classList.add('hide-btn')
  }
})









