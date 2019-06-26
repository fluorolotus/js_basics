
    var div = document.createElement('div');
    div.className = "container";
    document.body.appendChild(div);

    for (i = 0; i < 3; i++) {
        var block = document.createElement('div');
        block.className = "block";
        div.appendChild(block);
    }

    var blockList = document.getElementsByClassName('block');

    for (i = 0; i < 3; i++) {
        if (i === 0 || i === 2) {
            for (j = 0; j < 8; j++) {
                var row = document.createElement('div');
                row.className = "row";
                row.innerHTML = (8 - j);
                blockList[i].appendChild(row);
            }
        }
    }

    for (i = 0; i < 10; i++) {
        if (i === 0 || i === 9) {
            var chessrow = document.createElement('div');
            chessrow.className = "chessrow";
            blockList[1].appendChild(chessrow);
        } else {
            var chessboard = document.createElement('div');
            chessboard.className = "chessboard";
            blockList[1].appendChild(chessboard);
        }
    }

    var chessrowList = document.getElementsByClassName('chessrow');
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 8; j++) {
            var col = document.createElement('div');
            col.className = "col";
            col.innerHTML = String.fromCharCode(65 + j);
            chessrowList[i].appendChild(col);
        }
    }

    var chessboardList = document.getElementsByClassName('chessboard');
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            var chesscell = document.createElement('div');
            chesscell.className = "chesscell";
            chessboardList[i].appendChild(chesscell);
        }
    }