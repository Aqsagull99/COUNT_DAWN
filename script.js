 const edate="4 Apr 2024  03:26:34 PM"
document.querySelector("#edate").innerText=edate;
const inputs=document.querySelectorAll("input");


function clock()
{
    const end= new Date(edate);
    const cur= new Date();
    let diff=(end-cur)/1000;  //1 sec=1000;

if(diff<0) return;



    // conert into days
inputs[0].value=(Math.floor(diff/3600/24));
// conert into hours
inputs[1].value=(Math.floor(diff/3600)%24);
//minutes
inputs[2].value=(Math.floor(diff/60) % 60);
// seconds
inputs[3].value=(Math.floor(diff % 60));
}



setInterval(()=>{clock();},1000)




