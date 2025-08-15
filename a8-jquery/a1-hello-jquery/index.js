$("h1").css("color", "red");

// preferred approach to add event listeners
$("button").on("click", () => {window.alert("clicked")});

// Apply two classes - big-title & margin-50
$("h1").addClass("big-title margin-50");




// remove class if applied
if($("h1").hasClass("big-title")) {
    // write JS UI login
    $("h1").removeClass("big-title");
}


// Update text and inner html
$("button").text("Don't click me");

$("button").addClass("margin-50");

$("button").click( () => {
    $("button").html("<em>Hey</em>");
    $("button").addClass("green-title");
    
    setTimeout(() => {
        $("button").text("Don't click me");
        $("button").removeClass("green-title");
    }, 3000);
});


//update attribute of tags
$("a").attr("href", "https://yahoo.com");




// Monitor keypress event
$(document).keypress((event) => {
    $("h1").text(event.key);
});