

/*** FUNCTION viewInitializeUI()
***/

viewInitializeUI = function() {
    console.group( "FUNCTION viewInitializeUI()" );

    $( "#login" ).hide();
    $( "#register" ).hide();

    console.groupEnd();
};


/*** FUNCTION viewShowLogin()
***/

viewShowLogin = function() {
    console.group( "FUNCTION viewShowLogin()" );

    $( "#login" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideLogin()
***/

viewHideLogin = function() {
    console.group( "FUNCTION viewHideLogin()" );

    $( "#login" ).fadeOut();

    console.groupEnd();
};


/*** FUNCTION viewShowRegister()
***/

viewShowRegister = function() {
    console.group( "FUNCTION viewShowRegister()" );

    $( "#register" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideRegister()
***/

viewHideRegister = function() {
    console.group( "FUNCTION viewHideRegister()" );

    $( "#register" ).fadeOut();

    console.groupEnd();
};


/*** FUNCTION viewUpdateUI()
***/

viewUpdateUI = function() {
    console.group( "FUNCTION viewUpdateUI()" );

    // updateUIMessage();
    // updateUITimer();
    // updateUITrivia();
    // updateUIScore();

    console.groupEnd();
};
