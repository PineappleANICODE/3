function myFunction() {
  var letter = document.getElementById("myInput").value;
  var text;

  
  if (letter === "searcher") {
    text = "Well done! Now for your reward:     A single drop, a life can spiral out of control. His fear, your lies. Where did it go wrong? A narrative, a story, a peice of the puzzle. I know what you did even though you may not. ";
    
  
  } else if (letter === "Searcher") {
    text = "Well done! Now for your reward:     ";
    
    } else if (letter === "Nothing") {
    text = "Clever, but wrong.";
      
       } else if (letter === "nothing") {
    text = "Clever, but wrong.";
    
  
  } else {
    text = "NO! HAVE YOU LEARNED NOTHING?";
  }
  document.getElementById("demo").innerHTML = text;
}
