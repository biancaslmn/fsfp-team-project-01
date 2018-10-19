/*** CONSTRUCTOR StrangerThingsApp()
***/

var StrangerThingsApp = function() {
    console.group( "CONSTRUCTOR StrangerThingsApp()" );

    this.status = undefined;

    // Firebase API
    this.firebaseConfig = {
        apiKey: "AIzaSyDXKtYT5Fe4vV4-cJnPw7pToFVgnrikR_c",
        authDomain: "fsfp-team-project-01.firebaseapp.com",
        databaseURL: "https://fsfp-team-project-01.firebaseio.com",
        projectId: "fsfp-team-project-01",
        storageBucket: "fsfp-team-project-01.appspot.com",
        messagingSenderId: "113135877852"
    };
    firebase.initializeApp( this.firebaseConfig );
    this.firebaseCredentials = undefined;    // { user }
    this.firebaseError = undefined;    // { code, messge }

    // Rest API
    this.API_HOST = {};
    this.API_KEY = {};
    this.API_ENDPOINT = {};

    // Giphy API
    this.API_HOST__GIPHY = "api.giphy.com";
    this.API_KEY__GIPHY = "O4Rolb03RAK6SiFmndG6Yxs0SXhhmslq";
    this.API_ENDPOINT__GIPHY__GIF_ID = {};
    this.API_ENDPOINT__GIPHY__GIF_ID[ "ELEVEN" ] = "/v1/gifs/vijrOPnOo9RVC";
    this.API_ENDPOINT__GIPHY__GIF_ID[ "MIKE_WHEELER" ] = "/v1/gifs/vijrOPnOo9RVC";
    this.API_URL_PARAMETER__GIPHY = {};
    this.API_URL_PARAMETER__GIPHY[ "ELEVEN" ] = { api_key : this.API_KEY__GIPHY };
    this.API_URL_PARAMETER__GIPHY[ "MIKE_WHEELER" ] = { api_key : this.API_KEY__GIPHY };
    this.API_METHOD__GIPHY__AS_SIMPLE_JSON = "GET";
    this.giphyImageAS = {};

    // Wikia API
    this.API_HOST__WIKIA = "strangerthings.wikia.com";
    // this.API_KEY__WIKIA = null;
    this.API_ENDPOINT__WIKIA__AS_SIMPLE_JSON = "/api/v1/Articles/AsSimpleJson";
    this.API_URL_PARAMETER__WIKIA = {};
    this.API_URL_PARAMETER__WIKIA[ "ELEVEN" ] = { id : 90 };
    this.API_URL_PARAMETER__WIKIA[ "MIKE_WHEELER" ] = { id : 130 };
    this.API_METHOD__WIKIA__AS_SIMPLE_JSON = "GET";
    this.characterProfileTextAS = {};    // [ string ]
    this.characterProfileImageAS = {};    // [ { src , width , height } ]
    this.characterProfileImageAS[ "ELEVEN" ] = {
        src : "" ,
        width : "" ,
        height : "" };
    this.characterProfileImageAS[ "MIKE_WHEELER" ] = {
        src : "" ,
        width : "" ,
        height : "" };
    /*
    this.wikiaCharacterProfile( "ELEVEN" )
        .then(
            ( ajaxResponse ) => {
                console.group( ".then()"  );
                console.logValue( "ajaxResponse" , ajaxResponse );

                this.characterProfileTextAS[ "ELEVEN" ] = ajaxResponse;

                console.groupEnd();
            }
        );
    this.wikiaCharacterProfile( "MIKE_WHEELER" )
        .then(
            ( ajaxResponse ) => {
                console.group( ".then()"  );
                console.logValue( "ajaxResponse" , ajaxResponse );

                this.characterProfileTextAS[ "MIKE_WHEELER" ] = ajaxResponse;

                console.groupEnd();
            }
        );
    */

    // Youtube API

    console.logValue( "this" , this );
    console.log( "[END] CONSTRUCTOR StrangerThingsApp" );
    console.groupEnd();
};


/*** FUNCTION firebaseSignIn()
***/

StrangerThingsApp.prototype.firebaseSignIn = function( email , password ) {
    console.group( "FUNCTION StrangerThingsApp.firebaseSignIn()" );
    console.logValue( "email" , email );
    console.logValue( "password" , password );

    var strangerThingsApp = this;
    var promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                firebase.auth().signInWithEmailAndPassword( email, password )
                    .then(
                        function( credentials ) {
                            console.group( "FUNCTION firebase.auth().signInWithEmailAndPassword().then()" );
                            console.logValue( "credentials" , credentials );

                            strangerThingsApp.firebaseCredentials = credentials;
                            var isLoginOk = true;

                            console.logValue( "strangerThingsApp.firebaseCredentials" , strangerThingsApp.firebaseCredentials );
                            console.logValue( "isLoginOk" , isLoginOk );
                            console.groupEnd();
                            resolve( isLoginOk );
                        }
                    )
                    .catch(
                        function( error ) {
                            console.group( "FUNCTION firebase.auth().signInWithEmailAndPassword().catch()" );

                            console.logValue( "error" , error );
                            strangerThingsApp.firebaseError = error;
                            var isLoginOk = false;

                            console.logValue( "strangerThingsApp.firebaseError" , strangerThingsApp.firebaseError );
                            console.logValue( "isLoginOk" , isLoginOk );
                            console.groupEnd();
                            resolve( isLoginOk );
                        }
                    );

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION firebaseCreateUser()
***/

StrangerThingsApp.prototype.firebaseCreateUser = function( displayName , email , password ) {
    console.group( "FUNCTION StrangerThingsApp.firebaseCreateUser()" );
    console.logValue( " displayName" ,  displayName );
    console.logValue( "email" , email );
    console.logValue( "password" , password );

    var strangerThingsApp = this;
    var promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                firebase.auth().createUserWithEmailAndPassword( email, password )
                    .then(
                        function( credentials ) {
                            console.group( "FUNCTION firebase.auth().createUserWithEmailAndPassword().then()" );
                            console.logValue( "credentials" , credentials );

                            credentials.user.updateProfile( { displayName: displayName } )
                                .then(
                                    function () {
                                        console.group( "FUNCTION credentials.user.updateProfile().then()" );

                                        strangerThingsApp.firebaseCredentials = credentials;
                                        var isRegisterOk = true;

                                        console.logValue( "strangerThingsApp.firebaseCredentials" , strangerThingsApp.firebaseCredentials );
                                        console.logValue( "isRegisterOk" , isRegisterOk );
                                        console.groupEnd();
                                        resolve( isRegisterOk );
                                    }
                                )
                                .catch(
                                    function( error ) {
                                        console.group( "FUNCTION credentials.user.updateProfile().then().catch()" );

                                        console.logValue( "error" , error );
                                        strangerThingsApp.firebaseError = error;
                                        var isRegisterOk = false;

                                        console.logValue( "strangerThingsApp.firebaseError" , strangerThingsApp.firebaseError );
                                        console.logValue( "isRegisterOk" , isRegisterOk );
                                        console.groupEnd();
                                        resolve( isRegisterOk );
                                    }
                                );
                        }
                    )
                    .catch(
                        function( error ) {
                            console.group( "FUNCTION firebase.auth().createUserWithEmailAndPassword().catch()" );

                            console.logValue( "error" , error );
                            strangerThingsApp.firebaseError = error;
                            var isRegisterOk = false;

                            console.logValue( "strangerThingsApp.firebaseError" , strangerThingsApp.firebaseError );
                            console.logValue( "isRegisterOk" , isRegisterOk );
                            console.groupEnd();
                            resolve( isRegisterOk );
                        }
                    );

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION ajax()
***/

StrangerThingsApp.prototype.ajax = function( ajaxSettings ) {
    console.group( "FUNCTION StrangerThingsApp.ajax()" );
    console.logValue( "ajaxSettings" , ajaxSettings );

    var promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                $.ajax( ajaxSettings )
                    .done(
                        ( ajaxResponse ) => {
                            console.group( "FUNCTION $.ajax().done()" );

                            console.logValue( "ajaxResponse" , ajaxResponse );

                            console.groupEnd();
                            resolve( ajaxResponse );
                        }
                    )

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION newAjaxSettings()
***/

StrangerThingsApp.prototype.newAjaxSettings = function( apiHost , apiEndPoint , apiUrlParameter , method ) {
    console.group( "FUNCTION StrangerThingsApp.newAjaxSettings()" );
    console.logValue( "apiHost" , apiHost );
    console.logValue( "apiEndPoint" , apiEndPoint );
    console.logValue( "apiUrlParameter" , apiUrlParameter );

    var url =
        "https://$API_HOST$API_ENDPOINT?$URL_PARAMETERS"
        .replace( "$API_HOST" , apiHost )
        .replace( "$API_ENDPOINT" , apiEndPoint )
        .replace( "$URL_PARAMETERS" , $.param( apiUrlParameter , true ) );

    var ajaxSettings = {
        url : url ,
        method : method
    };

    console.logValue( "ajaxSettings" , ajaxSettings );
    console.groupEnd();
    return ajaxSettings;
};


/*** FUNCTION wikiaCharacterProfile()
***/

StrangerThingsApp.prototype.wikiaCharacterProfile = function( index ) {
    console.group( "FUNCTION StrangerThingsApp.wikiaCharacterProfile()" );
    console.logValue( "index" , index );

    var apiHost = this.API_HOST__WIKIA;
    // var apiKey = this.API_KEY__WIKIA;
    var apiEndPoint = this.API_ENDPOINT__WIKIA__AS_SIMPLE_JSON;
    var apiUrlParameter = this.API_URL_PARAMETER__WIKIA[ index ];
    var apiMethod = this.API_METHOD__WIKIA__AS_SIMPLE_JSON;
    console.logValue( "apiHost" , apiHost );
    // console.logValue( "apiKey" , apiKey );
    console.logValue( "apiEndPoint" , apiEndPoint );
    console.logValue( "apiUrlParameter" , apiUrlParameter );

    var ajaxSettings = this.newAjaxSettings( apiHost , apiEndPoint , apiUrlParameter , apiMethod );
    console.logValue( "ajaxSettings" , ajaxSettings );

    var promise = this.ajax( ajaxSettings );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION newCharacterProfile()
***/

StrangerThingsApp.prototype.newCharacterProfile = function( index ) {
    console.group( "FUNCTION StrangerThingsApp.newCharacterProfile()" );
    console.logValue( "index" , index );

    strangerThingsApp = this;
    promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                strangerThingsApp.wikiaCharacterProfile( index )
                    .then(
                        ( ajaxResponse ) => {
                            console.group( "CONSTRUCTOR .then()" );

                            strangerThingsApp.characterProfileTextAS[ index ] = [];
                            // ajaxResponse.sections[ 0 ].content[ 0 ].text
                            ajaxResponse.sections[ 0 ].content.forEach(
                                ( content , contentIndex ) => {
                                    strangerThingsApp.characterProfileTextAS[ index ].push( content.text );
                                }
                            );

                            console.groupEnd();
                            resolve();
                        }
                    )

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION giphyImage()
***/

StrangerThingsApp.prototype.giphyImage = function( index ) {
    console.group( "FUNCTION StrangerThingsApp.giphyImage()" );
    console.logValue( "index" , index );

    var apiHost = this.API_HOST__GIPHY;
    // var apiKey = this.API_KEY__WIKIA;
    var apiEndPoint = this.API_ENDPOINT__GIPHY__GIF_ID[ index ];
    var apiUrlParameter = this.API_URL_PARAMETER__GIPHY[ index ];
    var apiMethod = this.API_METHOD__GIPHY__AS_SIMPLE_JSON;
    console.logValue( "apiHost" , apiHost );
    // console.logValue( "apiKey" , apiKey );
    console.logValue( "apiEndPoint" , apiEndPoint );
    console.logValue( "apiUrlParameter" , apiUrlParameter );

    var ajaxSettings = this.newAjaxSettings( apiHost , apiEndPoint , apiUrlParameter , apiMethod );
    console.logValue( "ajaxSettings" , ajaxSettings );

    var promise = this.ajax( ajaxSettings );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION newGiphyImage()
***/

StrangerThingsApp.prototype.newGiphyImage = function( index ) {
    console.group( "FUNCTION StrangerThingsApp.newGiphyImage()" );
    console.logValue( "index" , index );

    strangerThingsApp = this;
    promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                strangerThingsApp.giphyImage( index )
                    .then(
                        ( ajaxResponse ) => {
                            console.group( "CONSTRUCTOR .then()" );

                            console.logValue( "ajaxResponse" , ajaxResponse );
                            strangerThingsApp.giphyImageAS[ index ] = ajaxResponse.data.images.original_mp4;

                            console.groupEnd();
                            resolve();
                        }
                    )

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};



/***

strangerThingsApp = new StrangerThingsApp();
app.firebaseSignIn( "jabeldmc@gmail.com" , "aa" );
app.firebaseSignIn( "jabeldmc@gmail.com" , "jabeldmcjabeldmc" );
app.firebaseCreateUser( "jdcSeiken@gmail.com" , "1234567890" );
app.firebaseCredentials.user.displayName;

strangerThingsApp = new StrangerThingsApp();
strangerThingsApp.newGiphyImage( "ELEVEN" );
strangerThingsApp.giphyImageAS[ "ELEVEN" ];

strangerThingsApp.newGiphyImage( "ELEVEN" )
    .then(
        () => {
            return strangerThingsApp.newGiphyImage( "MIKE_WHEELER" );
        }
    )
    .then(
        () => {
            console.log( "END" );
        }
    );
***/



/*** FUNCTION newCharacterA()
***/

/*
StrangerThingsApp.prototype.newCharacterA = function() {
    console.group( "FUNCTION StrangerThingsApp.register()" );

    var characterA = [];

    // eleven
    var character = new StrangerThingsCharacter(
        "eleven" ,
        null ,
        "assets/images/character-eleven.png"
        );

    // Fulanito de Tal
    var character = new StrangerThingsCharacter(
        "Fulanito de Tal" ,
        null ,
        "assets/images/character-fulanito-de-tal.png"
        );

    console.groupEnd();
}
*/