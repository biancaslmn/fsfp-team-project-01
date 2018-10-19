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

    $( "#authentication-message-text" ).text( app.firebaseError.message );
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

    $( "#welcome-message" )
        .dialog(
            {
                modal : true,
                buttons : {
                    YES : handleClickWelcomeMessageButton
                    /*
                    OK : function() {
                        $( this ).dialog( "close" );
                    }
                    */
                }
            }
        );
    $( "#welcome-message" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideWelcomeMessage()
***/

viewHideWelcomeMessage = function() {
    console.group( "FUNCTION viewHideWelcomeMessage()" );

    // $( "#welcome-message" ).fadeOut();
    $( "#welcome-message" ).dialog( "close" );

    console.groupEnd();
};


/*** FUNCTION viewHideAuthentication()
***/

viewHideAuthentication = function() {
    console.group( "FUNCTION viewHideAuthentication()" );

    $( "#authentication" ).fadeOut();

    console.groupEnd();
};


/*** FUNCTION viewShowCharacterProfile()
***/

viewShowCharacterProfile = function() {
    console.group( "FUNCTION viewShowCharacterProfile()" );

    // do something

    console.groupEnd();
};


/*** FUNCTION viewShowYoutubeVideo()
***/

viewShowYoutubeVideo = function( youtubeVideoId ) {
    console.group( "FUNCTION viewShowYoutubeVideo()" );
    console.logValue( "youtubeVideoId" , youtubeVideoId );

    var youtubePlayerOptions = {
        height : '390' ,
        width : '640' ,
        videoId : youtubeVideoId ,
        playerVars : {
            autoplay : 1 ,
            controls : 0 ,
            disablekb : 1 ,
            end : 3 ,
            loop : 1
        }
    };
    var youtubePlayer = new YT.Player( 'youtube-player' , youtubePlayerOptions );

    console.logValue( "youtubePlayer" , youtubePlayer );
    console.groupEnd();
    return youtubePlayer;
};


/*** FUNCTION viewStopYoutubeVideo()
***/

viewStopYoutubeVideo = function( youtubePlayer ) {
    console.group( "FUNCTION viewStopYoutubeVideo()" );
    console.logValue( "youtubePlayer" , youtubePlayer );

    youtubePlayer.destroy();

    console.logValue( "youtubePlayer" , youtubePlayer );
    console.groupEnd();
    return youtubePlayer;
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
