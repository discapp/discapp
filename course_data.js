/**
 * Created by cruot on 7/8/2017.
 */

var courses = ["Wickham", "Center Springs", "Vernon"];

function getCourseNamesFromDB() {
    /*
    TODO: Replace with DB calls
    return list of course names like `var courses`
     */
    return courses;
}

function createCourseComboBoxOptions() {
    var selectableCourses = getCourseNamesFromDB();
    var combo = document.getElementById("combo");
    for (var i = 0; i < selectableCourses.length; i++) {
        var course = selectableCourses[i];
        var option = document.createElement("option");
        option.text = course;
        option.value = course;
        try {
            combo.add(option, null); //Standard
        }catch(error) {
            combo.add(option); // IE only
        }
    }
}


function submit_scores() {
    var username = sessionStorage.getItem('username');
    var courseDropdown = document.getElementById('combo');
    var selected_course = courseDropdown.options[courseDropdown.selectedIndex].text;

    var dateField = document.getElementById('datepicker');
    var date = dateField.value;

    var scores = [];
    for (var i=1; i<=18; i++)
    {
        scores.push(parseInt(document.getElementById('hole' + i).value));
    }

    submitScoresToDB(username, selected_course, date, scores);
}


function submitScoresToDB(username, course, date, scores)
{
    var playerData = get_playerData_from_db();
    var player = playerData[username];
    var playerRoundCount = Object.keys(player).length;

    var maxRoundID = 0;
    for (var i=0; i<playerRoundCount; i++) {
        var roundID = Object.keys(player)[i];
        if (roundID > maxRoundID) {
            maxRoundID = roundID;
        }
    }

    var newRoundID = parseInt(maxRoundID) + 1;

    playerData[username][newRoundID] = {
        'date': date,
        'course': course,
        'scores': scores
    };

    sessionStorage.setItem('playerData', JSON.stringify(playerData));
}

function get_playerData_from_db() {
    /*
     TODO: Replace with DB calls
     Return hash like `var cruoti` is setup above
     */
    var playerData = JSON.parse(sessionStorage.getItem('playerData'));
    return playerData;
}