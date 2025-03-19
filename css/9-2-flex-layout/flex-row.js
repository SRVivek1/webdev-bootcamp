function updatePropDesc(msg) {
  let t = document.getElementById("fprop-desc");
  t.innerText = msg;
}

// flexDirection - Select the dropdown dynamically
const flexDirection = document.getElementById("flex-direction");
// Add event listener for the 'change' event
flexDirection.addEventListener("change", function () {
  const ele = document.getElementsByClassName("container")[0];
  ele.style.flexDirection = flexDirection.value;

  const msg =
    flexDirection.value === "row"
      ? flexDirection.value + ": show flex items from left to right."
      : flexDirection.value + ": show flex items from right to left.";
  updatePropDesc(msg);
});

// justify content
const justifyContent = document.getElementById("justify-content");
justifyContent.addEventListener("change", function () {
  document.getElementsByClassName("container")[0].style.justifyContent =
    justifyContent.value;

  console.log(justifyContent.value);
  let msg = "";
  switch (justifyContent.value) {
    case "flex-start":
      msg = "Align items from left to right on main axis (row)";
      break;
    case "center":
      msg = "Align items in center on main axis (row)";
      break;
    case "flex-end":
      msg = "Align items from right to left on main axis (row)";
      break;
    case "space-between":
      msg = "Place items from start to end adding space in between.";
      break;
    case "space-around":
      msg = "Adds spaces before and after all items.";
      break;
    case "space-evenly":
      msg = "Adds even space before and after all items.";
      break;
    default:
      msg = "unknown property: " + justifyContent.value;
  }
  updatePropDesc(msg);
});

//align-items
const alignItems = document.getElementById("align-items");
alignItems.addEventListener("change", function () {
  document.getElementsByClassName("container")[0].style.alignItems =
    alignItems.value;

  let msg = "";
  switch (alignItems.value) {
    case "flex-start":
      msg = "Align items at top of flex container.";
      break;
    case "center":
      msg = "Align items in center of flex container.";
      break;
    case "flex-end":
      msg = "Align items at bottom of flex container.";
      break;
    case "baseline":
      msg = "Align items at top of flex container.";
      break;
    case "stretch":
      msg = "Not working as of now, check for errors.";
      break;
    default:
      msg = "Unknown property: " + alignItems.value;
  }
  updatePropDesc(msg);
});

//flex-wrap
const flexWrap = document.getElementById("flex-wrap");
flexWrap.addEventListener("change", function () {
  document.getElementsByClassName("container")[0].style.flexWrap =
    flexWrap.value;
  let msg = "";
  switch (flexWrap.value) {
    case "wrap":
      msg = "wrap the elements in container width.";
      break;
    case "nowrap":
      msg = "Donot wrap the elements in container.";
      break;
    case "wrap-reverse":
      msg = "wrap the elements in container width from top to bottom";
      break;
    default:
      msg = "Unknow property : " + flexWrap.value;
  }
  updatePropDesc(msg);
});

//align-content
const alignContent = document.getElementById("align-content");
alignContent.addEventListener("change", function () {
  document.getElementsByClassName("container")[0].style.alignContent =
    alignContent.value;

  let msg = "";
  switch (alignContent.value) {
    case "flex-start":
      msg = "Align at top of container.";
      break;
    case "center":
      msg = "Align in center of container from top to bottom.";
      break;
    case "flex-end":
      msg = "Align at bottom of container.";
      break;
    case "space-between":
      msg = "Add spaces in between items.";
      break;
    case "space-around":
      msg = "Add spaces in around items.";
      break;
    case "stretch":
      msg = "Stretch items to fill the container.";
      break;
    default:
      msg = "Unknow property : " + alignContent.value;
  }
  if (!msg.startsWith("Unknow property"))
    msg = msg + " Note: doesn't work with nowrap.";
  updatePropDesc(msg);
});

const cmwElements = document.getElementsByClassName("container");
// Ensure at least one element exists
if (cmwElements.length > 0) {
  const cmw = cmwElements[0].offsetWidth; // Access the first element's width
  document.getElementById("container-width-input").value = cmw;
  console.log(cmw);
}

//update container width
const cwi = document.getElementById("container-width-input");
cwi.addEventListener("change", function () {
  cmwElements[0].style.width = cwi.value + "px";
});

// flex item properties

// flex-basis - Defines the starting width of an item before flex-grow or flex-shrink applies.
const flexBasis = document.getElementById("flex-basis");
flexBasis.addEventListener("change", function () {
  // implement the style on very first and last item in flex container
  let t = document.getElementsByClassName("box");
  t[t.length - 1].style.flexBasis = flexBasis.value + "px";
  t[0].style.flexBasis = flexBasis.value + "px";

  let msg =
    "Specifies the initial main size of a flex item before any available space is distributed.";
  updatePropDesc(msg);
});

// flex-grow - Defines how much an item should grow relative to others.
const flexGrow = document.getElementById("flex-grow");
flexGrow.addEventListener("change", function () {
  // implement the style on very first and last item in flex container
  let t = document.getElementsByClassName("box");
  t[t.length - 1].style.flexGrow = flexGrow.value / 2;
  t[0].style.flexGrow = flexGrow.value;

  let msg =
    "Grows flex item relative to other flex items when there's available space in flex container.";
  updatePropDesc(msg);
});

// flex-shrink - Defines how much an item should shrink if the container gets smaller.
const flexShrink = document.getElementById("flex-shrink");
flexShrink.addEventListener("change", () => {
  // implement the style on very first and last item in flex container
  let t = document.getElementsByClassName("box");
  t[t.length - 1].style.flexShrink = elem.value / 2;
  t[0].style.flexShrink = elem.value;

  let msg =
    "Defines how much a flex item will shrink relative to other items when there is insufficient in the flex container.";
  updatePropDesc(msg);
});

// align-self (Overrides align-items for Individual Items) - Allows an individual item to have a different vertical alignment.
