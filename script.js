
function calculate(){
    let A1 = Number(document.getElementById("A1").value);
    let A2 = Number(document.getElementById("A2").value);
    let A3 = Number(document.getElementById("A3").value);
    let final = Number(document.getElementById("final").value);

    let highest = Math.max(A1,A2,A3,final);
    let lowest = Math.min(A1,A2,A3,final);
    let sum = A1 + A2 + A3 + final; 
    let percentage = (sum/175 * 100);

     let grade;
                   if (percentage >= 80) {
                    grade = "A";
                   }
                   else if (percentage >= 70) {
                    grade = "B";
                   } 
                   else if (percentage >= 60) {
                    grade = "C";
                   } 
                   else if(percentage >= 50){
                    grade = "D"
                   }
                   else {
                    grade = "F";
                   }

    let status;
                   if(percentage >= 40){
                    status = "Pass";
                   }

                   else{
                    status ="Fail";
                   }       
                   
document.getElementById("result").innerHTML =
    "Total Marks: " + sum;

document.getElementById("result").innerHTML +=
    "<br>Percentage: " + percentage + "%";

document.getElementById("result").innerHTML +=
    "<br>Grade: " + grade;

document.getElementById("result").innerHTML +=
    "<br>Status: " + status;

document.getElementById("result").innerHTML +=
    "<br>Highest Marks: " + highest;

document.getElementById("result").innerHTML +=
    "<br>Lowest Marks: " + lowest;

 }




