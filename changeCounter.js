function incrementCount(){
    var counter = document.querySelector("#counter");
    var value = counter.innerHTML

    ++value

    document.getElementById("counter").innerHTML = value
}

function decrementButton() {
    var counter = document.querySelector(".counterText")
    var value = counter.innerHTML

    --value

    document.getElementById("counter").innerHTML = value

}