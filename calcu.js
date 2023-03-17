function calculate() {
    
    var credit1 = parseInt(document.getElementById("credit1").value);
    var credit2 = parseInt(document.getElementById("credit2").value);
    var credit3 = parseInt(document.getElementById("credit3").value);
    var credit4 = parseInt(document.getElementById("credit4").value);
    var credit5 = parseInt(document.getElementById("credit5").value);
    var credit6 = parseInt(document.getElementById("credit6").value);
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var grade3 = parseFloat(document.getElementById("grade3").value);
    var grade4 = parseFloat(document.getElementById("grade4").value);
    var grade5 = parseFloat(document.getElementById("grade5").value);
    var grade6 = parseFloat(document.getElementById("grade6").value);

            var totalGradePoints = (credit1 * grade1) + (credit2 * grade2) + (credit3 * grade3) + (credit4 * grade4) + (credit5 * grade5) + (credit6 * grade6) ;
            var totalCredits = credit1 + credit2 + credit3 + credit4 + credit5 + credit6 ;
            var gpa = totalGradePoints / totalCredits;
            var message = "";

            if(gpa > 3.7) {
                message = "Congratulations, you have an A!";
            } else if(gpa > 3.3 && gpa <= 3.7) {
                message = "Great job, you have an A-!";
            } else if(gpa > 3.0 && gpa <= 3.3) {
                message = "Good work, you have a B+!";
            } else if(gpa > 2.7 && gpa <= 3.0) {
                message = "Keep it up, you have a B-!";
            } else if(gpa > 2.3 && gpa <= 2.7) {
                message = "You're doing okay, you have a C+.";
            } else if(gpa > 2.0 && gpa <= 2.3) {
                message = "You have a C, keep working hard.";
            } else if(gpa > 1.7 && gpa <= 2.0) {
                message = "You have a C-, keep pushing yourself.";
            } else if(gpa > 1.3 && gpa <= 1.7) {
                message = "You have a D+, don't give up.";
            } else if(gpa > 1.0 && gpa <= 1.3) {
                message = "You have a D, keep trying.";
            } else if(gpa > 0.7 && gpa <= 1.0) {
                message = "You have a D-, seek help and support.";
            } else {
                message = "You have an F, seek immediate help.";
            }
            
            window.alert(`${message} Your total GPA is ${gpa.toFixed(2)}.`);



            
            
}