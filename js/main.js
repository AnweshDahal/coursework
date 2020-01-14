// Srcipt For Contact

var newLine = "<br>"

/**
 * counts the number of characters that the user has entered
 */
function characterCounter(element) {
    var maximumLength = element.maxLength;
    var currentLength = element.value.length;
    var remainingCharacter = maximumLength - currentLength;
    document.getElementById("character").innerHTML = remainingCharacter;
}

//  validates the form
function formValidation() {
    // creates a message box if a error appears
    document.getElementById("messageBox").style.padding = "0px";
    document.getElementById("messageBox").style.border = "none";
    document.getElementById("messageBox").innerHTML = "";
    var allGood = true
    // the full name entered by the user
    var fullName = document.forms["contactForm"]["fullName"].value;
    // the question entered by the user
    var question = document.forms["contactForm"]["question"].value;
    // the email entered by the user
    var email = document.forms["contactForm"]["email"].value;
    // checks if the fullName is empty or null
    if (fullName == null || fullName == "") {
        // alerts the user about the error
        alert("You must provide a name!");
        // displays a box with the error message inside the html
        document.getElementById("messageBox").style.padding = "10px";
        document.getElementById("messageBox").innerHTML += "You must provide a name!" + newLine;
        document.getElementById("messageBox").style.border = "#d66369 solid 1px";
        allGood = false;
    }
    // checks if the question is empty or null
    if (question == null || question == "") {
        // alerts the user about the error
        alert("You must ask a question!");
        // displays a box with the error message inside the html
        document.getElementById("messageBox").style.padding = "10px";
        document.getElementById("messageBox").innerHTML += "You must ask a question!" + newLine;
        document.getElementById("messageBox").style.border = "#d66369 solid 1px";
        allGood = false;
    }

    // checks id the email if valid and not null
    if (email == null || email == "") {
         // alerts the user about the error
        alert("You must provide an email!");
        // displays a box with the error message inside the html
        document.getElementById("messageBox").style.padding = "10px";
        document.getElementById("messageBox").innerHTML += "You must provide an email!" + newLine;
        document.getElementById("messageBox").style.border = "#d66369 solid 1px";
        allGood = false;
    } else if (!(email.indexOf("@") >= 1) && (email[(email.length - 1) - 3] != "." || email[(email.length - 1) - 2] != ".")) {
         // alerts the user about the error
        alert("Email entered is Invalid");
        // displays a box with the error message inside the html
        document.getElementById("messageBox").style.padding = "10px";
        document.getElementById("messageBox").innerHTML += "Email entered is Invalid!" + newLine;
        document.getElementById("messageBox").style.border = "#d66369 solid 1px";
        allGood = false;
    }
    // decides if the form must be submitted or not
    if (!allGood) {
        return false;
    } else {
        alert("Question Has Been Submitted!");
        return true;
    }
}

// ----------------------------------------------------------------------------------------------------
// Script for Gallery

// to check which album to show on the screen
var index = 0;
// list of titles
var titleNames = ["Grid Jump Retrowave Edition", "Blocky's Adventure"];
// thumbnail for game 01
var baThumbnails = ["../img/BA1.png", "../img/BA2.png", "../img/BA3.png", "../img/BA4.png", "../img/BA5.png", "../img/BA6.png"];
// thumbnail for game 02
var gjreThumbnials = ["../img/GJ1.png", "../img/GJ2.png", "../img/GJ3.png", "../img/GJ4.png", "../img/GJ5.png", "../img/GJ6.png"];
// image caption for game 01
var baCaptions = ["Welcome Screen", "Main Menu", "In Game", "Level Complete", "Game Over", "Pause"];
// image caption for game 02
var gjrweCaptions = ["Welcome Screen", "Main Menu", "Credits", "In Game", "In Game", "Game Over"];

// set the url of the main image display to the first image of the first game on load 
function onStartUp() {
    document.getElementById("view").src = document.getElementById("img1").src;
    document.getElementById("caption").innerHTML = "Welcome Screen";
}

// change the urls of thumbnail and the mai image on button click
function onLeftButtonClick() {
    index = 0;
    changeContent();
    onStartUp();
}

function onRightButtonClick() {
    index = 1;
    changeContent();
    onStartUp();
}

// change caption of the image according 
function setCaption(curCap) {
    if (index == 0) {
        console.log("GJ Caption" + (curCap - 1));
        document.getElementById("caption").innerHTML = gjrweCaptions[curCap - 1];
    } else if (index == 1) {
        console.log("BA Caption" + (curCap - 1));
        document.getElementById("caption").innerHTML = baCaptions[curCap - 1];
    }
}

// change url of the image according to the clicked thumbnail
function onThumbnailClick(element) {
    var source = element.src;
    var cuID = element.id;
    document.getElementById("view").src = source;
    setCaption(cuID.charAt(cuID.length - 1));
}

// reset the screen position
function redirect() {
    document.getElementById("refer").click();
}

//  change the thumbnail image according to the selected album 
function changeContent() {
    if (index == 0) {
        document.getElementById("projectTitle").innerHTML = titleNames[index];
        for (i = 0; i < 6; i++) {
            var currentThumbnail = "img" + (i + 1);
            document.getElementById(currentThumbnail).src = gjreThumbnials[i];
        }
    } else if (index == 1) {
        document.getElementById("projectTitle").innerHTML = titleNames[index];
        for (i = 0; i < 6; i++) {
            var currentThumbnail = "img" + (i + 1);
            document.getElementById(currentThumbnail).src = baThumbnails[i];
        }
    }
}
