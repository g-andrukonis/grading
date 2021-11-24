function myFunction(){

    var numSub=parseInt(window.prompt("Please enter the number of subjects you take:"));

    var mark=[];

    for(i=0;i<numSub;i++){
                mark[i]=parseInt(window.prompt("Enter your mark 0-100 for subject "+(i+1)+":"));
        }
    
    var sum=0;

    for (i=0;i<mark.length;i++){
        sum+=mark[i];
        }
    
    document.getElementById("markHolder").innerHTML="Your marks are: "+mark;

    var average=Math.round(sum/numSub);

    document.getElementById("averageHolder").innerHTML="Your average mark is: "+average;

    var grade;

    if(average>=85){
        grade="A";
    }
    else if(average>=70 && average<85){
        grade="B";
    }
    else if(average>=55 && average<70){
        grade="C";
    }
    else if(average>=40 && average<55){
        grade="D";
    }
    else if(average>=25 && average<40){
        grade="E";
    }
    else if(average>=10 && average<25){
        grade="F";
    }
    else{
        grade="No grade";
    }

    document.getElementById("gradeHolder").innerHTML="Your grade is: "+grade;  

    hide();
}

function hide(){
    document.getElementById("myButton").style.display="none";
}