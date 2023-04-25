document.querySelector(".control-buttons span").onclick= function() {
    let urName = prompt("What's your name ?");

    // console.log(urName);
    if (urName == null || urName == "") {
        document.querySelector(".name span").innerHTML = 'Unknown';
    }else {
        document.querySelector(".name span").innerHTML = urName;
        
    }
    document.querySelector(".control-buttons").remove();
}