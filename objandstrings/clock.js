/* 
8. Write a JavaScript program to create a Clock.
   `Note`: The output will come every second.

```js
"14:37:42";
"14:37:43";
"14:37:44";
"14:37:45";
"14:37:46";
"14:37:47";

``` */
/* class showTime{
    constructor(hour,min,sec){
        this.hour = hour;
        this.min = min;
        this.sec = sec;
    }
    calculate(){
     
    }
}
let myClock = new showTime(14,3,5);
console.log(myClock);

 */

function currentTime() {
  let date = new Date(); // takes input time from system
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

    
  if(hh > 12){
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;
    console.log(time)
 
  var t = setTimeout(function(){ currentTime() }, 1000); 

}

currentTime();