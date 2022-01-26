// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded",()=>{
  //document.querySelector("#modal").className='hidden';
  const heart=document.querySelectorAll(".like-glyph");
  console.log(heart);

  heart.forEach(heart=>{
    heart.addEventListener("click",updateHeart)
  })

  function updateHeart(heart){
    mimicServerCall()
    .then(()=>{
      if(heart.target.innerHTML===EMPTY_HEART){
        heart.target.classList.add('activated-heart');
        heart.target.innerHTML=FULL_HEART;
      }
      else{
        heart.target.classList.remove('activated-heart');
        heart.target.innerHTML=EMPTY_HEART;
      }
    })
    .catch(()=>{
      const err=document.querySelector("#modal");
      console.log(err);
      err.className='show'

      setTimeout(()=>{
      const err=document.querySelector("#modal");
      console.log(err);
      err.className='hidden'},3000)}

    )}
  })





  

// Your JavaScript code goes here!





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

