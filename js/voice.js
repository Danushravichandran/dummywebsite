const btn=document.querySelector('.talk');
const content=document.querySelector('.content');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

   recognition.continuous = true;



recognition.onstart =function() {
 // alert('You can speak in this browser');
  console.log('You can speak in this browser');
};

recognition.onresult =function(event)
{
   console.log("inside teh onresult  ", event);
  const current=event.resultIndex;
  
  const transcript=event.results[current][0].transcript;
  content.textContent=transcript;
  console.log(transcript); 
 
   if(transcript.includes("scroll down"))
   {
      scrollerId=scrollhere();
   }
   
   if(transcript.includes("stop"))
   {
      stopscrollhere();
   }
   
  gohere(transcript);
   
   
   
};

btn.addEventListener('click',() =>{
  recognition.start();
});


function scrollhere()
{
   
   
    // paused=false;
  let id=setInterval( function()
   {
    window.scrollBy(0,150);
   }, 10);
   // paused=false;
      console.log("running id "+ id);
   return id; 
}


function stopscrollhere()
{
   clearInterval(scrollerId);
   console.log("clear iterval id "+ scrollerId);
}



function gohere(message)
{
     //console.log("inside the gohere function daa");
 // if(message.includes("go to product page"))
 // {
  //  console.log("opening pdt page");
//    window.open("https://danushravichandran.github.io/dummywebsite/product.html");
//  }
 
 
 if(message.includes("products")|| message.includes("click products") || message.includes("open products"))
{
 console.log("opening pdt page");
  window.open("https://danushravichandran.github.io/dummywebsite/product.html");
}
 else if(message.includes("cart")|| message.includes("click cart") || message.includes("open cart")|| message.includes("add to cart"))
{
 console.log("opening cart page");
  window.location.replace("https://danushravichandran.github.io/dummywebsite/cart.html");
}

 
 
 
  //if(message.includes("scroll down")||message.includes("stop"))
  //{
   

   // console.log("opening pdt page");
   // document.querySelector('.footer-center').scrollIntoView({
       //         behavior: 'smooth',
     //           block: "end"
         //      });
  
  // let paused=true;
   //let id;
   
  // if(message.includes("scroll down"))
   //{
    // paused=false;
   //id=setInterval( function()
   //{
    //window.scrollBy(0,150);
  // }, 10);
   // paused=false;
   //}
   
     //   console.log("printing id"+ id)

   
 // if(message.includes("stop"))
  //{
   //paused=false;
   //console.log("inside stop daaaaa")
  // clearInterval(id);
   //console.log("clear iterval id printing id"+ id)
  // paused=true;
  //}
   
  //}
 
 
 var str = message;
 var replaced = str.split(' ').join('_');
 var staticURL='https://my-json-server.typicode.com/Danushravichandran/mockjsonwebspeechapi/'+replaced;
 
 $.getJSON(staticURL, function(data){
                     for(i=0;i<data.length;i++)
                {
                    console.log(data[i].link);
                   //window.open("https://danushravichandran.github.io/dummywebsite/product-details.html"); 
                  window.open(data[i].link); 
                }
            });
                console.log( $.getJSON(staticURL));
                console.log(tag);
 
 
}


















