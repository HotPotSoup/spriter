var canvas = document.getElementsByTagName('canvas');
var srcX = 0;
var srcY = 0;
var row = 0;
var fps = 12;
var sheetRows = 4; // need to be changed for each sheet
var spriteNum = 6; // need to be changed for each sheet

function setup() {
    setInterval(drawAnimation, 1000 / fps);
}

function drawAnimation() {
    for (var i = 0; i < canvas.length; i++) {
        var ctx = canvas[i].getContext('2d');
        var img = new Image();
        img.src = 'sprites/' + i + '.png';
        canvas[i].width = img.width;
        canvas[i].height = img.height;
        spriteWidth = canvas[i].width / spriteNum;
        spriteHeight = canvas[i].height / sheetRows;
        ctx.clearRect(0, 0, canvas[i].width, canvas[i].height);
        ctx.drawImage(img, srcX, srcY, spriteWidth, spriteHeight,
            0, 0, canvas[i].width, canvas[i].height);
        }
    srcX = srcX + spriteWidth;
    if (srcX > img.width - spriteWidth) {
        srcX = 0;
        if (row + 1 < sheetRows) {
            row++;
            } else {
                row = 0;
            }
        }
    srcY = row * spriteHeight;
}

setup();
