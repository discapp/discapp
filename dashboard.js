/**
 * Created by cruot on 7/8/2017.
 */

var cruoti = {
    0: {
        'date': '6/3/2017',
        'course': 'Wickham',
        'scores': [3, 2, 3, 4, 3, 2, 3, 3, 4, 3, 2, 3, 4, 5, 4, 3, 3, 2]
       },
    1: {
        'date': '6/4/2017',
        'course': 'Wickham',
        'scores': [2, 3, 2, 4, 5, 4, 3, 3, 3, 3, 3, 3, 3, 2, 3, 4, 3, 2]
       },
    2: {
        'date': '6/5/2017',
        'course': 'Center Springs',
        'scores': [4, 4, 3, 4, 5, 2, 2, 3, 2, 4, 4, 3, 4, 5, 2, 2, 3, 2]
       },
    3: {
        'date': '6/1/2017',
        'course': 'Vernon',
        'scores': [3, 3, 2, 3, 3, 3, 2, 3, 4, 3, 4, 3, 3, 3, 2, 3, 3, 2]
       },
    4: {
        'date': '6/8/2017',
        'course': 'Vernon',
        'scores': [3, 3, 3, 3, 3, 2, 3, 4, 3, 5, 3, 3, 3, 2, 3, 3, 3, 3]
       },
    5: {
        'date': '6/9/2017',
        'course': 'Wickham',
        'scores': [2, 3, 5, 3, 3, 4, 5, 5, 3, 3, 6, 7, 4, 5, 3, 3, 3, 4]
       }
};


var playerData = {
    'cruoti@gmail.com': cruoti
};


window.alert(sessionStorage.getItem('playerData'));

if (sessionStorage.getItem('playerData') == null) {
    sessionStorage.setItem('playerData', JSON.stringify(playerData));
}

window.alert(sessionStorage.getItem('playerData'));

/*
 ---------------------------------------
 Functions to get player data
 ---------------------------------------
 */
function get_player_data_from_db(playername) {
    /*
    TODO: Replace with DB calls
    Return hash like `var cruoti` is setup above
     */
    var playerData = JSON.parse(sessionStorage.getItem('playerData'));
    return playerData[playername];
}


function get_courses_played() {
    var player = get_player_data_from_db('cruoti@gmail.com');
    var playerRoundCount = Object.keys(player).length;

    var courses_played = [];

    for (var index=0; index<playerRoundCount; index++)
    {
        round = player[Object.keys(player)[playerRoundCount-(index+1)]];

        if (! courses_played.includes(round['course'])) {
            courses_played.push(round['course']);
        }
    }

    return courses_played;
}


function get_dates_and_scores_for_course_and_player(course) {
    var player = get_player_data_from_db('cruoti@gmail.com');
    // var course = "Wickham";
    var playerRoundCount = Object.keys(player).length;

    var dates = [];
    var totalScores = [];

    for (var i=0; i<playerRoundCount; i++) {
        round = player[Object.keys(player)[i]];

        if (round['course'] == course) {
            dates.push(round['date']);
            totalScores.push(round['scores'].reduce(add, 0));
        }
    }

    var datesAndScores = [dates, totalScores];
    return datesAndScores;
}


/*
 ---------------------------------------
 Functions to manipulate HTML page
 ---------------------------------------
 */
function show_recent_scores() {
    var player = get_player_data_from_db('cruoti@gmail.com');

    var playerRoundCount = Object.keys(player).length;
    var targetRecentCount = 5;

    var recentSize;
    if (playerRoundCount < targetRecentCount){
        recentSize = playerRoundCount;
    }
    else {
        recentSize = targetRecentCount;
    }

    var table = document.getElementById("recent_scores").getElementsByTagName('tbody')[0];

    for (var index=0; index<recentSize; index++)
    {
        round = player[Object.keys(player)[playerRoundCount-(index+1)]];

        add_round_as_row_to_table(table, round);
    }
}


function show_all_scores_for_course(course) {
    var player = get_player_data_from_db('cruoti@gmail.com');
    if (course == null)
    {
        course = get_courses_played()[0];
    }

    var playerRoundCount = Object.keys(player).length;

    var table = document.getElementById("course_scores").getElementsByTagName('tbody')[0];

    for (var index=0; index<playerRoundCount; index++)
    {
        round = player[Object.keys(player)[playerRoundCount-(index+1)]];
        if (round['course'] == course) {
            add_round_as_row_to_table(table, round);
        }
    }
}


function add_round_as_row_to_table(table, round) {
    var newRow = table.insertRow(table.rows.length);

    var newCell = newRow.insertCell(0);
    var newText = document.createTextNode(round['course']);
    newCell.appendChild(newText);

    var newCell = newRow.insertCell(1);
    var newText = document.createTextNode(round['date']);
    newCell.appendChild(newText);

    for (var i = 0; i < round['scores'].length; i++) {
        var score = round['scores'][i];
        var newCell = newRow.insertCell(2 + i);
        var newText = document.createTextNode(score);
        newCell.appendChild(newText)
    }

    var newCell = newRow.insertCell(20);

    function add(a, b) {
        return a + b;
    }

    var sum = round['scores'].reduce(add, 0);
    var newText = document.createTextNode(sum);
    newCell.appendChild(newText);
}


function create_course_comboBox_options() {
    var selectableCourses = get_courses_played();

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


var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

function setup_chart_config(course) {
    var dates_and_scores = get_dates_and_scores_for_course_and_player(course);

    var config = {
        type: 'line',
        data: {
            labels: dates_and_scores[0],
            datasets: [{
                label: "Course",
                backgroundColor: chartColors['green'],
                borderColor: chartColors['green'],
                data: dates_and_scores[1],
                fill: false,
            },]
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text: 'Scores'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Score'
                    },
                    ticks: {stepSize: 1}
                }]
            }
        }
    };

    return config;
}


/*
---------------------------------------
Utility Functions
---------------------------------------
 */
function add(a, b) {
    return a + b;
}
