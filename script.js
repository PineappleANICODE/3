function myFunction() {
  var letter = document.getElementById("myInput").value;
  var text;

  
  if (letter === "searcher") {
    text = "Well done! Now for your reward:";
    
  
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
