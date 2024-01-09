
(function(){
  var keys = document.getElementsByClassName("key");
  document.getElementById("htmlPage").onkeyup = function(event){

    var keyPressed = event.key;
    for (let i =0; i < keys.length; i++){
      if(keys[i].id == keyPressed){
        keys[i].classList.add('playing');
        var classSelected = keyPressed;
        var notePlaying = document.querySelector(`.${classSelected}`);
        notePlaying.currentTime = 0;
        notePlaying.play();
      }
      function removeTransition(e){
        this.classList.remove('playing');
      }
      keys[i].addEventListener('transitionend', removeTransition);
      
    }
  }

})();