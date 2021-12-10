var allquiz = ["באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך", "באיזו מידה צפייה בפרסום תדמית של המשטרה בטלויזיה או באינטרנט ישפיע עליך"]
var mycurentlyquiz = 0;
var plus = 100 / 7;
var herebar = -plus;

$(document).ready(function () {
    nextquiz();
    //hide alert
    $("#alertQ1").hide(true);
    $("#alertQ2").hide(true);
    $(".end").hide(true);

    //cliknext
    $("#next").click(function () {
        //hide alert
        $("#alertQ1").hide(true);
        $("#alertQ2").hide(true);

        var valueq1 = $('input[name="flexRadioDefault"]:checked').val();
        var valueq2 = $('input[name="flexRadioDefault2"]:checked').val();
        if (valueq1 != null && valueq2 != null) {
            
            nextquiz();
        } else if (herebar > 100 && valueq1 != null) {
            End();
        } else if (valueq1 == null && valueq2 == null) {
            $("#alertQ1").fadeIn(500);
            $("#alertQ2").fadeIn(500);
        } else if (valueq1 == null) {
            $("#alertQ1").fadeIn(500);
        } else if (valueq2 == null) {
            $("#alertQ2").fadeIn(500);
        } 
    });
});

function nextquiz() {
    herebar += plus;
    $('input[name="flexRadioDefault"]').attr("checked", false);
    $('input[name="flexRadioDefault2"]').attr("checked", false);
    $("#bar").css("width", herebar.toString()+"%");
    $("#bar").css("aria-valuenow", herebar.toString());

    $("#quiztext").html(allquiz[mycurentlyquiz]);
    mycurentlyquiz++;
    if (allquiz[mycurentlyquiz] != null) {
        $("#quiztext2").html(allquiz[mycurentlyquiz]);
        mycurentlyquiz++;
    } else {
        $("#Q2").hide(true);
    }  
}


function End() {
    $(".quiz").hide(true);
    $(".end").fadeIn(500);
}