function incrementButton() {
    var element = document.getElementById('incrementText');
    var value = element.innerHTML;

    ++value

    document.getElementById("incrementText").innerHTML = value
}

function decrementButton() {
    var element = document.getElementById("incrementText");
    var value = element.innerHTML;

    --value 

    document.getElementById("incrementText").innerHTML = value
}

function resetButton() {
    var element = document.getElementById("incrementText");
    var value = element.innerHTML;

    value = 0

    document.getElementById("incrementText").innerHTML = value
}