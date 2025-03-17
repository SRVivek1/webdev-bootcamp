// flexDirection - Select the dropdown dynamically
const flexDirection = document.getElementById("flex-direction");
// Add event listener for the 'change' event
flexDirection.addEventListener("change", function() {
    const ele = document.getElementsByClassName("container")[0];
    ele.style.flexDirection = flexDirection.value;
});

// justify content
const justifyContent = document.getElementById("justify-content");
justifyContent.addEventListener("change", function() {
    document.getElementsByClassName("container")[0].style.justifyContent = justifyContent.value;
});


//align-items
const alignItems = document.getElementById("align-items");
alignItems.addEventListener("change", function() {
    document.getElementsByClassName("container")[0].style.alignItems = alignItems.value;
});


//align-content
const alignContent = document.getElementById("align-content");
alignContent.addEventListener("change", function() {
    document.getElementsByClassName("container")[0].style.alignContent = alignContent.value;
});