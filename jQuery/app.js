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
