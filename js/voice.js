const btn=document.querySelector('.talk');
const content=document.querySelector('.content');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart =function() {
 // alert('You can speak in this browser');
  console.log('You can speak in this browser');
};

recognition.onresult =function(event)
{
  const current=event.resultIndex;
  
  const transcript=event.results[current][0].transcript;
  content.textContent=transcript;
  console.log(transcript);
  gohere(transcript);
   
}

btn.addEventListener('click',() =>{
  recognition.start();
});

function gohere(message)
{
     console.log("inside the gohere function daa");
  if(message=="Go to product page")
  {
    console.log("opening pdt page");
    window.open("https://danushravichandran.github.io/dummywebsite/product.html");
  }
}


















