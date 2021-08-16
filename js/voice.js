const btn=document.querySelector('.talk');
const content=document.querySelector('.content');


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart()=function()
{
  alert('You can speak in this browser');
  console.log('You can speak in this browser');
}

recognition.onresult()=function(event)
{
  const current=event.resultIndex;
  
  const transcript=event.results[current][0].transcript;
  content.textContent=transcript;
  gohere(transcript);
  
   console.log(event);
}

btn.addEventListener('click',() =>{
  recognition.start();
});

function gohere(message)
{
  if(message=="Go to product page")
  {
    console.log("opening pdt page");
    window.open("https://danushravichandran.github.io/dummywebsite/product.html");
  }
}


















