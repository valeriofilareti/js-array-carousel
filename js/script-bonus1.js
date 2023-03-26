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

const items = imgWrapper.getElementsByClassName('item')

let imgCounter = 0;
items[imgCounter].classList.remove('hide')

//img counter


//buttons 

  bottomBtn.addEventListener('click', function(){
    if(imgCounter === 0){
      items[imgCounter].classList.add('hide')
      imgCounter++
      items[imgCounter].classList.remove('hide')
    }else if(imgCounter === 1){
      items[imgCounter].classList.add('hide')
      imgCounter++
      items[imgCounter].classList.remove('hide')
    }else if(imgCounter === 2){
      items[imgCounter].classList.add('hide')
      imgCounter++
      items[imgCounter].classList.remove('hide')
    }else if(imgCounter === 3){
      items[imgCounter].classList.add('hide')
      imgCounter++
      items[imgCounter].classList.remove('hide')
    }else if(imgCounter === 4){
        items[imgCounter].classList.add('hide')
        imgCounter = 0
        items[imgCounter].classList.remove('hide')
    }
    console.log(imgCounter)
  })
  
  topBtn.addEventListener('click', function(){
    if(imgCounter === 0){
      items[imgCounter].classList.add('hide')
      imgCounter = 4
      items[imgCounter].classList.remove('hide')
    }else if(imgCounter === 4){
      items[imgCounter].classList.add('hide')
      imgCounter--
      items[imgCounter].classList.remove('hide')
    }else if(imgCounter === 3){
      items[imgCounter].classList.add('hide')
      imgCounter--
      items[imgCounter].classList.remove('hide')
    }else if(imgCounter === 2){
      items[imgCounter].classList.add('hide')
      imgCounter--
      items[imgCounter].classList.remove('hide')
    }else if(imgCounter === 1){
        items[imgCounter].classList.add('hide')
        imgCounter --
        items[imgCounter].classList.remove('hide')
    }
    console.log(imgCounter)
  })
