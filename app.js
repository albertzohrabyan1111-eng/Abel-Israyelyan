var text = document.getElementById("userText");
var button = document.querySelector(".analyze-button");

var symbolCount = document.getElementById("symbolCount");
var byteCount = document.getElementById("byteCount");
var unicodeResult = document.getElementById("unicodeResult");
var binaryResult = document.getElementById("binaryResult");

button.onclick = function() {

    var value = text.value;

    symbolCount.innerHTML = value.length;

    byteCount.innerHTML = new TextEncoder().encode(value).length;

    var unicode = "";
    var binary = "";

    for (var i = 0; i < value.length; i++) {

        if (value[i] == " ") {

            unicode += "SPACE<br>";
            binary += "00100000<br>";

        } else if (value[i] == "\n") {

            unicode += "NEW LINE<br>";
            binary += "00001010<br>";

        } else {

            unicode += value[i] + " → " + value.charCodeAt(i) + "<br>";

            binary += value[i] + " → " +
                value.charCodeAt(i).toString(2) + "<br>";
        }
    }

    if (unicode == "") {
        unicodeResult.innerHTML = "—";
        binaryResult.innerHTML = "—";
    } else {
        unicodeResult.innerHTML = unicode;
        binaryResult.innerHTML = binary;
    }
};



function resetText() {

    text.value = "";

    symbolCount.innerHTML = "0";
    byteCount.innerHTML = "0";

    unicodeResult.innerHTML = "—";
    binaryResult.innerHTML = "—";
}