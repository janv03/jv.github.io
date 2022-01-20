const title = document.getElementById("title");

window.onload = function run() {
    console.log("test");

    for (let i = 0; i < 100; i++) {
        title += array[i];
        console.log(i);
    }
    let text = "";
    for (let i = 0; i < Math.random(1); i++) {
        text += i + "<br>";
        console.log("text");
    }

    window.onload() = run();
}