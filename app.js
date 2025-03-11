let sec = document.getElementById('sec')
let min = document.getElementById('min')
let hour = document.getElementById('hour')
let jsSecond = 0
let jsMinutes = 0
let jsHour = 0



let a;
function start(){
 a =   setInterval(()=>{
        jsSecond++
        
        if(jsSecond == 60){
            jsSecond = 0
        sec.innerHTML = jsSecond
        jsMinutes++
        if(jsMinutes == 60){
            jsMinutes = 0
            min.innerHTML = jsMinutes
            jsHour++
            
                hour.innerHTML = jsHour
    
            
    
        }
    
        else{
            min.innerHTML = jsMinutes
    
        }
    
        }
        
        else{
            sec.innerHTML = jsSecond
        }
    
    },1000)
}


function stop(){
    clearInterval(a)
}


function reset(){
    jsHour = 0
    jsMinutes = 0
    jsSecond = 0
    sec.innerHTML = 0
    min.innerText = 0
    hour.innerText = 0
}