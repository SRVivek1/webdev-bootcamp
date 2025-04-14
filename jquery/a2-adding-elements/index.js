// Create a new button before H1
$("h1").before("<button>Before H1</button>");


// Create a new button after H1
$("h1").after("<button>After H1</button>");


// Create a new button inside H1 but before inner conect
$("h1").prepend("<button>Before H1 inner content</button>");


// Create a new button inside H1 but after inner content
$("h1").append("<button>After H1 inner content</button>");



 // ---- a1-hello-jquery
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
//$("button").text("Don't click me");

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