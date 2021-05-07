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