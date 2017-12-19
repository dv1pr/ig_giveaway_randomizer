/*
  This script runs in the the browser dev tools to load all commenters on an
  Instagram post and select one randomly for giveways, contests, etc.

  Navigate to post
  Load entire script in browser developer tools console and call
  load_all_comments()
  Allow to finish then call
  randomize_winner()
*/


function loadAllComments(){
  let load_more = document.querySelector('._m3m1c._1s3cd')

  let loop = setInterval(() => {
    if (document.querySelector('._m3m1c._1s3cd') == null) {
      clearInterval(loop)
    }
    load_more.click()
  }, 300)
}

function randomizeWinner(){
  let participants = []

  let commenters = document.querySelectorAll('._2g7d5.notranslate._95hvo')

  for(let i = 0; i < commenters.length; i++) {
     let commenter = commenters[i]
     let title = commenter.title
     participants.push(title)
  }

  console.log(participants)

  participants.shift()
  console.log('Number of Entries: ' + commenters.length)

  let display = document.createElement('div')
  display.style.position = 'absolute'
  display.style.left = '50%';
  display.style.top = '50%';
  display.style.transform = 'translateX(-50%) translateY(-50%)';
  display.style.zIndex = 1000000;
  display.style.fontSize = '100px'
  document.body.innerHTML = ''
  document.body.appendChild(display)

  let spinWheelInterval = setInterval(() => {
     let random = Math.floor(participants.length * Math.random())
     display.innerHTML = participants[random]
  }, 50)

  setInterval(() => {
     clearInterval(spinWheelInterval)
     console.log(display.innerHTML)
  }, 8000)
}
