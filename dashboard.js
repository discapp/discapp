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


function get_player_data_from_db(playername) {
    /*
    TODO: Replace with DB calls
    Return hash like `var cruoti` is setup above
     */
    return playerData[playername];
}


function show_recent_scores() {
    var table = document.getElementById("recent_scores").getElementsByTagName('tbody')[0];

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

    for (var index=0; index<recentSize; index++)
    {
        round = player[Object.keys(player)[playerRoundCount-(index+1)]];

        var newRow = table.insertRow(table.rows.length);

        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(round['course']);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell(1);
        var newText = document.createTextNode(round['date']);
        newCell.appendChild(newText);

        for (var i=0; i<round['scores'].length; i++) {
            var score = round['scores'][i];
            var newCell = newRow.insertCell(2+i);
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
}

function show_all_scores_for_course() {
    return 0;
}