/**
 * Created by cruot on 7/8/2017.
 */

var playerData = new Object();
var cruoti = new Object();

var round0 = new Object();
round0['date'] = 'Jun 3';
round0['course'] = 'Wickham';
round0['scores'] = [3, 2, 3, 4, 3, 2, 3, 3, 4, 3, 2, 3, 4, 5, 4, 3, 3, 2];

var round1 = new Object();
round1['date'] = 'Jun 4';
round1['course'] = 'Wickham';
round1['scores'] = [2, 3, 2, 4, 5, 4, 3, 3, 3, 3, 3, 3, 3, 2, 3, 4, 3, 2];

var round2 = new Object();
round2['date'] = 'Jun 5';
round2['course'] = 'Center Springs';
round2['scores'] = [4, 4, 3, 4, 5, 2, 2, 3, 2, 4, 4, 3, 4, 5, 2, 2, 3, 2];

var round3 = new Object();
round3['date'] = 'Jun 1';
round3['course'] = 'Vernon';
round3['scores'] = [3, 3, 2, 3, 3, 3, 2, 3, 4, 3, 4, 3, 3, 3, 2, 3, 3, 2];

var round4 = new Object();
round4['date'] = 'Jun 8';
round4['course'] = 'Vernon';
round4['scores'] = [3, 3, 3, 3, 3, 2, 3, 4, 3, 5, 3, 3, 3, 2, 3, 3, 3, 3];

var round5 = new Object();
round5['date'] = 'Jun 9';
round5['course'] = 'Wickham';
round5['scores'] = [2, 3, 5, 3, 3, 4, 5, 5, 3, 3, 6, 7, 4, 5, 3, 3, 3, 4];


cruoti['0'] = round0;
cruoti['1'] = round1;
cruoti['2'] = round2;
cruoti['3'] = round3;
cruoti['4'] = round4;
cruoti['5'] = round5;

playerData['cruoti@gmail.com'] = cruoti;

function show_recent_scores() {
    var table = document.getElementById("recent_scores").getElementsByTagName('tbody')[0];

    var recentSize;
    if (Object.keys(cruoti).length < 5){
        recentSize = Object.keys(cruoti).length;
    }
    else {
        recentSize = 5;
    }

    for (var index=0; index<recentSize; index++)
    {
        round = cruoti[Object.keys(cruoti)[index]];

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