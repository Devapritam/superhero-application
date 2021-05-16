var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_height = 30;
block_width = 30;

var player_obj = "";
var block_obj = "";

function updatePlayer() {
    fabric.Image.fromURL("player.png", function (img) {
        player_obj = img;

        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);
        player_obj.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_obj);
    });
}

function updateBlockImg(get_img) {
    fabric.Image.fromURL(get_img, function (img){
        block_obj = img;

        block_obj.scaleToWidth(block_width);
        block_obj.scaleToHeight(block_height);
        block_obj.set({
            top: player_y,
            left: player_x
        });

        canvas.add(block_obj);
    });
}

window.addEventListener('keydown', my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed == '80'){
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("currentWidth").innerHTML = block_width;
        document.getElementById("currentHeight").innerHTML = block_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("currentWidth").innerHTML = block_width;
        document.getElementById("currentHeight").innerHTML = block_height;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '67'){
        updateBlockImg('captain_america_left_hand.png');
        console.log('c + w keys pressed');
    }
    if(keyPressed == '72'){
        updateBlockImg('hulk_left_hand.png');
        updateBlockImg('hulk_right_hand.png');
        updateBlockImg('hulk_face.png');
        updateBlockImg('hulk_legs.png');
        updateBlockImg('hulkd_body.png');
        console.log('c + w keys pressed');
    }
    if(keyPressed == '83'){
        updateBlockImg('spiderman_left_hand.png');
        updateBlockImg('spiderman_right_hand.png');
        updateBlockImg('spiderman_face.png');
        updateBlockImg('spiderman_legs.png');
        updateBlockImg('spiderman_body.png');
        console.log('c + w keys pressed');
    }
    if(keyPressed == '73'){
        updateBlockImg('ironman_left_hand.png');
        updateBlockImg('ironman_right_hand.png');
        updateBlockImg('ironman_face.png');
        updateBlockImg('ironman_legs.png');
        updateBlockImg('ironman_body.png');
        console.log('c + w keys pressed');
    }
    if(keyPressed == '84'){
        updateBlockImg('thor_left_hand.png');
        updateBlockImg('thor_right_hand.png');
        updateBlockImg('thor_face.png');
        console.log('c + w keys pressed');
    }
}

function up() {
    if(player_y>=0){
        player_y = player_y - block_height;
        canvas.remove(player_obj);
        updatePlayer();
    }
}

function down() {
    if(player_y<=500){
        player_y = player_y + block_height;
        canvas.remove(player_obj);
        updatePlayer();
    }
}

function left() {
    if(player_x>=0){
        player_x = player_x - block_width;
        canvas.remove(player_obj);
        updatePlayer();
    }
}

function right() {
    if(player_x<=850){
        player_x = player_x + block_width;
        canvas.remove(player_obj);
        updatePlayer();
    }
}