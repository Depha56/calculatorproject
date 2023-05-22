//date = date.toLocaleString();
const mylabel = document.getElementById("mylabel");
update();
setInterval(update,1000);
function update(){/**this function is for update seconds */
     let date = new Date();
     mylabel.innerHTML = ourdate(date);
  function ourdate(date){
     let hours = date.getHours();
     let minutes = date.getMinutes();
     let seconds = date.getSeconds();
     let amorpm = hours>=12 ? "pm" : "am";
     hours = (hours%12)|| 12;
     hours = readingZeros(hours);
     minutes = readingZeros(minutes);
     seconds = readingZeros(seconds);
     return `${hours}:${minutes}:${seconds} ${amorpm}`
   }
   /**we are going to create function for reading zeros */
   function readingZeros(time){
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
   }
}
