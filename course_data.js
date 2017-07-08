/**
 * Created by cruot on 7/8/2017.
 */

var courses = ["wickham", "center springs"];

function getCourseNames() {
    return courses;
}

function createCourseComboBoxOptions() {
    var combo = document.getElementById("combo");
    for (var i = 0; i < courses.length; i++) {
        var course = courses[i];
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