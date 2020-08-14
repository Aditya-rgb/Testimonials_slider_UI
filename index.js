let iconPrev = document.getElementById('icon-prev');
let iconNext = document.getElementById('icon-next');
let quoteText1 = document.getElementById('quote-text1');
let img1 = document.getElementById("tanya");
let role1 = document.getElementById("quote-name");
let role2 = document.getElementById("role");

iconNext.addEventListener("click", nextSlider);

function nextSlider(){
  quoteText1.setAttribute('style', 'white-space: pre;');

  quoteText1.innerHTML = "“ If you want to lay the best foundation \r\n";
  quoteText1.innerHTML += "possible I’d recommend taking this \r\n";
  quoteText1.innerHTML += "course. The depth the instructors go into \r\n";
  quoteText1.innerHTML += "is incredible. I now feel so confident about \r\n";
  quoteText1.innerHTML += "starting up as a professional developer. ”\r\n";
  img1.setAttribute("src" , "image-john.jpg");
  role1.innerHTML="John Tarkpor";
  role2.innerHTML="Junior Front-end Developer";
}


iconPrev.addEventListener("click", nextSlider1);

function nextSlider1(){
  quoteText1.setAttribute('style', 'white-space: pre;');

  quoteText1.innerHTML =  "I’ve been interested in coding for a while <br>";
  quoteText1.innerHTML += "but never taken the jump, until now.<br>"
  quoteText1.innerHTML += "Couldn’t recommend this course enough. <br>"
  quoteText1.innerHTML += "I’m now in the job of my dreams and so <br>"
  quoteText1.innerHTML += "excited about the future."
  img1.setAttribute("src" , "image-tanya.jpg");
  role1.innerHTML="Tanya Sinclair";
  role2.innerHTML="UX Engineer";
}
