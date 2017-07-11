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
    var username = 'cruoti@gmail.com';
    window.alert(7);
    var courseDropdown = document.getElementById('combo');
    var selected_course = courseDropdown.options[courseDropdown.selectedIndex].text;
    window.alert(selected_course);

    var dateField = document.getElementById('datepicker');
    var date = dateField.value;
    window.alert(date);

    var scores = [];
    for (var i=1; i<=3; i++)
    {
        scores.push(document.getElementById('hole' + i).value);
    }

    for (var i=0; i<scores.length; i++) {
        window.alert(scores[i]);
//                    document.write('<p>' + scores[i] + '</p>');
    }

    submitScoresToDB(username, selected_course, date, scores);
}


function submitScoresToDB(username, course, date, scores)
{
    window.alert(5);
    window.alert(username);
    window.alert(course);
    window.alert(date);
    window.alert(scores);
}