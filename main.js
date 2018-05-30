console.log('connected')

var h1 = document.querySelector('.typewriter h1')
h1.addEventListener('webkitAnimationEnd', function() {
  h1.classList.remove('typeborder')
})

