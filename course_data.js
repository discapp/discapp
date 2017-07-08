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