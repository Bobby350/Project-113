function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO)
    video.hide();
    tint_color = ""
}

function draw() {
    image(video, 230, 150, 200, 200);
    fill(10, 242, 72);
    stroke(3, 247, 255)
    circle(50, 50, 80)
    circle(50, 430, 80)
    circle(590, 50, 80)
    circle(590, 430, 80)
    fill(255, 3, 3)
    stroke(244, 252, 3)
    rect(90, 40, 460, 20)
    rect(90, 420, 460, 20)
    rect(40, 90, 20, 300)
    rect(580, 90, 20, 300)
    tint(tint_color)
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot() {
    save('Campos.png')
}