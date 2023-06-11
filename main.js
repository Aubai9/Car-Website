let state = flase;
function toggle() {
    if (state) {
        document.getElementById("pic").setAttribute("type", "password");
        state = false;
    } else {
        document.getElementById("pic").setAttribute("type", "text");
        state = true;
    }
}