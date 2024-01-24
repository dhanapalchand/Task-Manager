// const a=10;
// const b=12;
// console.log(a+b);
// const b1=document.getElementById("b1");
// function printElement(){
//     console.log("hello");
// }
// b1.addEventListener("click",printElement)

const b1 = document.getElementById("b1");
const ta = document.getElementById("ta");



//b1.addEventListener("click",displayElemt);



// timer
b2 = document.getElementById("b2");
sec = document.getElementById("sec");
min = document.getElementById("min");
hour = document.getElementById("hour");
const in1 = document.getElementById("i1");
const in2 = document.getElementById("i2");
b2.addEventListener("click", starttime);
function starttime() {

    console.log(b2.textContent)
    if (b2.textContent === 'Start Task') {
        let s = 0;
        let m = 0;
        let h = 0;
        b2.textContent = 'stop';
        b2.style.setProperty('background-color', "red");
        intervelid = setInterval(function () {
            s++
            if (s >= 60) {
                s = 0;
                m++;
            }
            if (m >= 60) {
                m = 0;
                h++;
            }
            sec.textContent = s.toString().padStart(2, '0');
            min.textContent = m.toString().padStart(2, '0') + " :";
            hour.textContent = h.toString().padStart(2, '0') + " :";

        }, 1000)
    }
    else if(in1.value!="" && in2.value!="" && b2.textContent === 'stop')
     {
        b2.textContent = 'Start Task';
        b2.style.setProperty('background-color', "green");
        clearInterval(intervelid);
       
        const in1 = document.getElementById("i1");
        const in2 = document.getElementById("i2");
        const sec = document.getElementById("sec");
        const min = document.getElementById("min");
        const hour = document.getElementById("hour");

        // console.log(in1);
        // console.log(sec);
        var d1 = `
              <tr>    
                <td>${in1.value}</td>
                <td>${in2.value}</td>
                <td>${hour.innerHTML} :${min.innerHTML} :${sec.innerHTML}</td>
             </tr>`
            
                ta.innerHTML += d1;
                in1.value = "";
                in2.value = "";
                sec.innerHTML="00";
                min.innerHTML="00 :";
                hour.innerHTML="00 :";
             
             
                
             
        

    }
    else{
        alert("Please enter Task and Discription")
    }
}


