const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
]

// elements

const imgWrapper = document.querySelector('.img-wrapper');

const topBtn = document.getElementById('top-button')

const bottomBtn = document.getElementById('bottom-button')

// elements



// img gen

for (i = 0; i < images.length; i++) {
  const img = images[i];
  imgWrapper.innerHTML += `<img class="item hide" src="${img}">`;
  console.log(img);
}

// img gen




//img counter

const items = document.getElementsByClassName('item')

let imgCounter = 0;
items[imgCounter].classList.remove('hide')

//img counter




// img-control counter

let imgControlCounter = 0;

const imgControls = document.getElementsByClassName('cell')

console.log(imgControls)

for(i=0; i < imgControls.length; i++) {
  const img = images[i];
  imgControls[imgControlCounter].innerHTML += `<img class="item" src="${img}">`;
  imgControls[imgControlCounter].innerHTML += `<div class="overlay on"></div>`;

  imgControlCounter++
  console.log(imgControlCounter)
}

const overlay = document.getElementsByClassName('overlay')

overlay[imgCounter].classList.remove('on')

overlay[imgCounter].classList.add('active')

// img-control counter



//buttons 

  bottomBtn.addEventListener('click', function(){
    if(imgCounter === 0){
      items[imgCounter].classList.add('hide')
      overlay[imgCounter].classList.add('on')
      overlay[imgCounter].classList.remove('active')
      imgCounter++
      items[imgCounter].classList.remove('hide')
      overlay[imgCounter].classList.remove('on')
      overlay[imgCounter].classList.add('active')
    }else if(imgCounter === 1){
      items[imgCounter].classList.add('hide')
      overlay[imgCounter].classList.add('on')
      overlay[imgCounter].classList.remove('active')
      imgCounter++
      items[imgCounter].classList.remove('hide')
      overlay[imgCounter].classList.remove('on')
      overlay[imgCounter].classList.add('active')
    }else if(imgCounter === 2){
      items[imgCounter].classList.add('hide')
      overlay[imgCounter].classList.add('on')
      overlay[imgCounter].classList.remove('active')
      imgCounter++
      items[imgCounter].classList.remove('hide')
      overlay[imgCounter].classList.remove('on')
      overlay[imgCounter].classList.add('active')
    }else if(imgCounter === 3){
      items[imgCounter].classList.add('hide')
      overlay[imgCounter].classList.add('on')
      overlay[imgCounter].classList.remove('active')
      imgCounter++
      items[imgCounter].classList.remove('hide')
      overlay[imgCounter].classList.remove('on')
      overlay[imgCounter].classList.add('active')
    }else if(imgCounter === 4){
        items[imgCounter].classList.add('hide')
        overlay[imgCounter].classList.add('on')
        overlay[imgCounter].classList.remove('active')
        imgCounter = 0
        items[imgCounter].classList.remove('hide')
        overlay[imgCounter].classList.remove('on')
        overlay[imgCounter].classList.add('active')
    }
    console.log(imgCounter)
  })
  
  topBtn.addEventListener('click', function(){
    if(imgCounter === 0){
      items[imgCounter].classList.add('hide')
      overlay[imgCounter].classList.add('on')
      overlay[imgCounter].classList.remove('active')
      imgCounter = 4
      items[imgCounter].classList.remove('hide')
      overlay[imgCounter].classList.remove('on')
      overlay[imgCounter].classList.add('active')
    }else if(imgCounter === 4){
      items[imgCounter].classList.add('hide')
      overlay[imgCounter].classList.add('on')
      overlay[imgCounter].classList.remove('active')
      imgCounter--
      items[imgCounter].classList.remove('hide')
      overlay[imgCounter].classList.remove('on')
      overlay[imgCounter].classList.add('active')
    }else if(imgCounter === 3){
      items[imgCounter].classList.add('hide')
      overlay[imgCounter].classList.add('on')
      overlay[imgCounter].classList.remove('active')
      imgCounter--
      items[imgCounter].classList.remove('hide')
      overlay[imgCounter].classList.remove('on')
      overlay[imgCounter].classList.add('active')
    }else if(imgCounter === 2){
      items[imgCounter].classList.add('hide')
      overlay[imgCounter].classList.add('on')
      overlay[imgCounter].classList.remove('active')
      imgCounter--
      items[imgCounter].classList.remove('hide')
      overlay[imgCounter].classList.remove('on')
      overlay[imgCounter].classList.add('active')
    }else if(imgCounter === 1){
        items[imgCounter].classList.add('hide')
        overlay[imgCounter].classList.add('on')
        overlay[imgCounter].classList.remove('active')
        imgCounter --
        items[imgCounter].classList.remove('hide')
        overlay[imgCounter].classList.remove('on')
        overlay[imgCounter].classList.add('active')
    }
    console.log(imgCounter)
  })