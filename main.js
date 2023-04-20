// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartClicks = document.querySelectorAll('.like-glyph');


function likeCall(e) {
  const heart = e.target;
  mimicServerCall("carculture") 
  .then(function() {
    if (heart.innerText == EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart"
    }

    else if (heart.innerText == FULL_HEART) {
      heart.innerText = EMPTY_HEART;
      heart.className = " ";
    }

  }).catch(function(error) {
     const errorResponse =  document.getElementById("modal")
     errorResponse.className = " ";
     errorResponse.innerText = error;
     setTimeout(() =>errorResponse.className = "hidden", 3000)
  })

}


for (const glyph of heartClicks) {
  glyph.addEventListener("click", likeCall);
}



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
