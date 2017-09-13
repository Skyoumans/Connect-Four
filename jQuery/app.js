//Create each object and assign starting values to each of the properties
var tiles = []
for (i=0; i<42; i++) {
    tiles[i] = {}
    tiles[i].color = null;
    tiles[i].box = 7*(i%3)+Math.floor(i/3)+14*Math.floor(i/21);
    tiles[i].vert = null;
    tiles[i].horz = null;
    tiles[i].diagR = null;
    tiles[i].diagL = null;    
}


//setting the check properties to "unknown"
for (a=0; a<12; a++) {
    tiles[a].horz = "unknown";
    tiles[a].diagR = "unknown";
}
for (a=21; a<33; a++) {
    tiles[a].horz = "unknown";
}
for (a=0; a<21; a++) {
    tiles[a].vert = "unknown";
}
for (a=9; a<21; a++) {
    tiles[a].diagL = "unknown";
}

//changes the order of tiles to more easily resemble a game board
var game = []
for (b of tiles) {
    game[b.box] = b;
}

//creating the gameBoard
var screen = "";
for (var c=0; c<42; c++) {
    screen += "<div class='tile'></div>";
}
$(".gameBoard").html = screen;

