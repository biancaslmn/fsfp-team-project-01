/*** FUNCTION viewInitializeUI()
***/

viewInitializeUI = function() {
    console.group( "FUNCTION viewInitializeUI()" );

    $( "#login" ).hide();
    $( "#register" ).hide();
    $( "#authentication-message" ).hide();
    $( "#welcome-message" ).hide();

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


/*** FUNCTION viewShowAuthenticationMessage()
***/

viewShowAuthenticationMessage = function() {
    console.group( "FUNCTION viewShowAuthenticationMessage()" );

    $( "#authentication-message-text" ).text( app.authenticationMessage );
    $( "#authentication-message" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideAuthenticationMessage()
***/

viewHideAuthenticationMessage = function() {
    console.group( "FUNCTION viewHideAuthenticationMessage()" );

    $( "#authentication-message" ).fadeOut();

    console.groupEnd();
};


/*** FUNCTION viewShowWelcomeMessage()
***/

viewShowWelcomeMessage = function() {
    console.group( "FUNCTION viewShowWelcomeMessage()" );

    $( "#welcome-message" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideWelcomeMessage()
***/

viewHideWelcomeMessage = function() {
    console.group( "FUNCTION viewHideWelcomeMessage()" );

    $( "#welcome-message" ).fadeOut();

    console.groupEnd();
};


/*** FUNCTION viewHideAuthentication()
***/

viewHideAuthentication = function() {
    console.group( "FUNCTION viewHideAuthentication()" );

    $( "#authentication" ).fadeOut();

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
