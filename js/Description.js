/**
 * Created by thang on 6/20/17.
 */
var file = document.getElementById("myFile").files[0];

var reader = new FileReader();
reader.onload = function (e) {
    var textArea = document.getElementById("description");
    textArea.innerHTML = e.target.result;
};
reader.readAsText(file);

function description() {
    // document.getElementById('description').innerHTML =
}

