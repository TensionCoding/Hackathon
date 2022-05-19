

//const contents = document.getElementById('contents');
//contents.parentNode.removeChild(contents);
console.log('its working')

const body = document.querySelector('body');
const image = document.createElement('img');
  image.setAttribute('src', "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg")
  image.setAttribute('height', '100');
  image.setAttribute('width', '100');
  image.setAttribute('style','border-radius: 50%')
  

if(document.getElementById('contents')){
  const contents = document.getElementById('contents');
  contents.prepend(image);
} else {
  document.body.prepend(image);
}

const timerStart = Date.now();
const waitTime = 2000;

//counter +'00'
const imageArr = ['http://www.petango.com/Portals/Petango/EasyDNNnews/203/puppy.jpg', 'https://cdn.mos.cms.futurecdn.net/JzqhuEDTRfCZKMKHUxPySB.jpg', 'https://www.adaptil.com/var/storage/images/adaptil-2017/puppy/i-want-to-help-my-puppy-with-crying-at-night/2670452-199-eng-US/I-WANT-TO-HELP-MY-PUPPY-WITH-CRYING-AT-NIGHT.jpg']
for (let i = 0; i < imageArr.length; i++){
  let counter = 2 + i;
  setTimeout(() => {
    image.setAttribute('src', imageArr[i]);
    image.setAttribute('height', counter + '00');
    image.setAttribute('width', counter + '00');
    console.log(counter);
  }, waitTime * counter)
  //console.log(counter);
}



//document.addEventListener('DOMContentLoaded', () => {})
//["https://*.youtube.com/*", "https://www.facebook.com/", "https://www.tiktok.com/"],
/*
let lastCalled = 0;
const now = Date.now()
if(now - lastCalled >= wait){
    lastCalled = now;
    return func(...args)
}
*/

// Frontend 
// get it to display in the top right of the window
// div to display image 

// Back End 
// blacklist websites - eg manifest matching website
    // youtube
    // instagram 
    // tiktok
  // creature shows up 
  // timer goes off 
  // at set invervals, creature shrivels 
    // using date now method 
    // removing current image
    // appending array of deteriorating images 
// when it does match
// function to 


// stretch features
// can customize blacklist websites
// animal gets better at normal sites 

