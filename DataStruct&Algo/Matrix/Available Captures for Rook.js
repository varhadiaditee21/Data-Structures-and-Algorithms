// On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.

// When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking.

// Return the number of available captures for the white rook.

var numRookCaptures = function(board) {
    var attack = 0;
    var newboard = board.concat(...board);       //position[i][j] => [i]*8+[j]
    let R = newboard.indexOf('R');               //get index of "R"
    let Col = R%8;                               //get [j] of "R"
	
    for(i=R;i>=0;i-=8){                          //up
        if(newboard[i]==="B") break;
        if(newboard[i]==="p"){
           attack++;
           break;   
        }}
    for(i=R;i<72;i+=8){                          //down
        if(newboard[i]==="B") break;
        if(newboard[i]==="p"){
           attack++; 
           break; 
        }}
    for(i=1;i<8-Col;i++){                        //right
        if(newboard[R+i]==="B") break;
        if(newboard[R+i]==="p"){
           attack++;
           break;   
        }}
    for(i=1;i<=Col;i++){                         //left
        if(newboard[R-i]==="B") break;
        if(newboard[R-i]==="p"){
           attack++;
           break;   
        }}   
   return attack;
};