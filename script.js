let subjects = [];

let subjectInput=document.getElementById("subjectInput");
let marksInput=document.getElementById("marksInput");
let subjectList=document.getElementById("subjectList");
let addSubject=document.getElementById("addSubject");

addSubject.addEventListener("click", () => {
   let subjectName = subjectInput.value ; 
   let marks = Number(marksInput.value) ;

   if(subjectName === ""|| marksInput.value === ""){
    console.log("Value Not Found");
    return
   }; 
   
   if(marks < 0 || marks > 100){
    alert("Marks Must be between 0 and 100");
    return
   }

   subjects.push({
    name: subjectName,
    marks: marks
});

   subjectList.innerHTML += "<p>" + subjectName + " - " + marks + "</p>";  
   console.log(subjects);
});

let calculateResult = document.getElementById("calculateResult");
let result = document.getElementById("result");

calculateResult.addEventListener("click", function() {

   if (subjects.length === 0) {
    alert("Please add subjects first");
    return;
}
 
  let total = 0;
  let highest = subjects[0].marks;
                   let lowest = subjects[0].marks;

    for (let i = 0; i < subjects.length; i++) {

    total = total + subjects[i].marks;
     console.log(total);

     if (subjects[i].marks > highest) {
    highest = subjects[i].marks;
}

if (subjects[i].marks < lowest) {
    lowest = subjects[i].marks;
}
    }


    let percentage = total / subjects.length;
    console.log(percentage);

    result.innerHTML = "Total Marks: " + total +
                   "<br>Percentage: " + percentage + "%";

    result.innerHTML += "<br>Highest Marks: " + highest;
result.innerHTML += "<br>Lowest Marks: " + lowest;               

                   let grade;
                   if (percentage >= 100) {
                    grade = "A";
                   }
                   else if (percentage >= 79) {
                    grade = "B";
                   } 
                   else if (percentage >= 59) {
                    grade = "C";
                   } 
                   else {
                    grade = "Fail";
                   }

                   console.log(grade);
                   result.innerHTML += "<br>Grade: " + grade;              
      
                   let status;
                   if(percentage >= 40){
                    status = "Pass";
                   }

                   else{
                    status ="Fail";
                   }

                   console.log(status);
                   result.innerHTML += "<br>Status: " + status;
            
});

