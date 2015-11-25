//Takes player names from modal form and clears form after
$('#playerEntry').on("click", function() {
	$('#p1board').text($('#firstPlayer').val()); 
	$('#p2board').text($('#secondPlayer').val()); 
	$('.modalForm').find('form')[0].reset();
});
$('#reset').on('click', function() {
	$('#board img').remove();
	board = [
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	];
	var moveCount = 0;
});
//When the board is clicked.......
var whosUp;
var moveCount = 0;
var board = [
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
];
$("ul.columns").on("click", function EventHandler(e) {
	e = e;
	var target = (e.target.tagName === "IMG" ? e.target.closest('li') : e.target);
	var columns = target.parentElement.children;
	var parent = target.parentElement.id;

	whosUp = (moveCount % 2 === 0 ? 1 : 2);
	var imgUrl = (whosUp == 1 ? 'red.png' : 'green.png');

	for(var i = columns.length - 1; i >= 0; i--) {
		if(!columns[i].children.length) {
			moveCount++;
			var img = document.createElement('img');
			img.className = 'img-responsive';
			img.src = imgUrl;
			columns[i].appendChild(img);
			var maybe = columns[i].id;
			board[parent][maybe] = whosUp;
			checkWinner(board,parent,maybe);
			break;
		}
	}
});
var checkWinner = function(array,i,j) {
//check vertical wins
	var i = parseInt(i),
		j = parseInt(j);
//check vertical wins
	if(j >= 3 && array[i][j] !== 0 && array[i][j] === array[i][j-1] && array[i][j-1] === array[i][j-2] && array[i][j-2] === array[i][j-3]) {
		alert("It looks like player "+whosUp+" is the winner!");
	} //check horizontal wins
	  //should check horizontally to the left of piece played
	else if(i >= 3 && array[i][j] !== 0 && array[i][j] === array[i-1][j] && array[i-1][j] === array[i-2][j] && array[i-2][j] === array[i-3][j]) {
		alert("Winner to the left!" );
	} //check to the right of piece played
	else if(i <= 2 && array[i][j] !== 0 && array[i][j] === array[i+1][j] && array[i+1][j] === array[i+2][j] && array[i+2][j] === array[i+3][j]) {
		alert("Winner to the right!" )
	} //check 2 to the right and one to the left
	else if(i >=1 && i <= 3 && array[i][j] !== 0 && array[i][j] === array[i+1][j] && array[i+1][j] === array[i+2][j] && array[i+2][j] === array[i-1][j]) {
		alert("Winner 2r-1l")
	} //check 2 to the left and one to the right
	else if (i >= 2 && i <= 4 && array[i][j] !== 0 && array[i][j] === array[i-1][j] && array[i-1][j] === array[i-2][j] && array[i-2][j] === array[i+1][j]) {
		alert("winner 2l-1r");
	} //Begin Diagonal
	  //Checks three to the NE
	else if (i <= 2 && j <= 2 && array[i][j] !== 0 && array[i][j] === array[i+1][j+1] && array[i+1][j+1] === array[i+2][j+2] && array[i+2][j+2] === array[i+3][j+3]) {
		alert("winner d-up-to-right");
	}
	 //Check three to the NW
	else if (i >= 3 && j <= 2 && array[i][j] !== 0 && array[i][j] === array[i-1][j+1] && array[i-1][j+1] === array[i-2][j+2] && array[i-2][j+2] === array[i-3][j+3]) {
		alert("winner d-up-to-left");
	}
	 //Check three to the SW
	else if (i >= 3 && j >= 3 && array[i][j] !== 0 && array[i][j] === array[i-1][j-1] && array[i-1][j-1] === array[i-2][j-2] && array[i-2][j-2] === array[i-3][j-3]) {
		alert("winner d-down-to-the-left");
	} 
	//Check three to the SE
	else if (i <= 2 && j >= 3 && array[i][j] !== 0 && array[i][j] === array[i+1][j-1] && array[i+1][j-1] === array[i+2][j-2] && array[i+2][j-2] === array[i+3][j-3]) {
		alert("winner d-down-to-the-right");
	} 
	//Check 2 SE & 1 NW
	else if (i <= 3 && i >= 1 && j <= 4 && j >= 2 && array[i][j] !== 0 && array[i][j] === array[i-1][j+1] && array[i-1][j+1] === array[i+1][j-1] && array[i+1][j-1] === array[i+2][j-2]) {
		alert("winner d-2DR-1UL");
	}
	//Check 1 SE & 2 NW
	else if (i >= 2 && i <= 4 && j >= 1 && j <= 3 && array[i][j] !== 0 && array[i][j] === array[i+1][j-1] && array[i+1][j-1] === array[i-1][j+1] && array[i-1][j+1] === array[i-2][j]) {
		alert("winner d-1DR-2UL");
	}
	//Check 1 SW & 2 NE
	else if(i >= 1 && i <=3 && j >= 1 && j <= 3 && array[i][j] !== 0 && array[i][j] === array[i-1][j-1] && array[i-1][j-1] === array[i+1][j+1] && array[i+1][j+1] === array[i+2][j+2]) {
		alert("winner d-1DL-2UR");
	}
	//Check 2 SW & 1 NE
	else if(i >= 2 && i <= 4 && j >= 2 && j <= 4 && array[i][j] !== 0 && array[i][j] === array[i+1][j+1] && array[i+1][j+1] === array[i-1][j-1] && array[i-1][j-1] === array[i-2][j-2]) {
		alert('winner d-2DL-1UR');
	}
	 else {
		console.log("NO winner yet");
	}
}






