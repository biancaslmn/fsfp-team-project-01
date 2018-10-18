/*** Initialize Firebase
***/

var firebaseConfig = {
    apiKey: "AIzaSyDXKtYT5Fe4vV4-cJnPw7pToFVgnrikR_c",
    authDomain: "fsfp-team-project-01.firebaseapp.com",
    databaseURL: "https://fsfp-team-project-01.firebaseio.com",
    projectId: "fsfp-team-project-01",
    storageBucket: "fsfp-team-project-01.appspot.com",
    messagingSenderId: "113135877852"
};

firebase.initializeApp( firebaseConfig );


/*** CONSTRUCTOR StrangerThingsApp()
***/

var StrangerThingsApp = function() {
    console.group( "CONSTRUCTOR StrangerThingsApp()" );

    this.status = undefined;

    console.groupEnd();
};


/*** FUNCTION login()
***/

StrangerThingsApp.prototype.login = function( email , password ) {
    console.group( "FUNCTION StrangerThingsApp.login()" );
    console.logValue( "email" , email );
    console.logValue( "password" , password );

    var promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                firebase.auth().signInWithEmailAndPassword( email, password )
                    .then(
                        function( credentials ) {
                            console.group( ".then()" );
                            console.logValue( "credentials" , credentials );

                            var isLoginOk = true;

                            console.logValue( "isLoginOk" , isLoginOk );
                            console.groupEnd();
                            resolve( isLoginOk );
                        }
                    )
                    .catch(
                        function( error ) {
                            console.group( ".catch()" );

                            console.logValue( "error" , error );
                            var isLoginOk = false;

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


/*** FUNCTION register()
***/

StrangerThingsApp.prototype.register = function( name , email , password ) {
    console.group( "FUNCTION StrangerThingsApp.register()" );
    console.logValue( " name" ,  name );
    console.logValue( "email" , email );
    console.logValue( "password" , password );

    var promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                firebase.auth().createUserWithEmailAndPassword( email, password )
                    .then(
                        function( credentials ) {
                            console.group( ".then()" );
                            console.logValue( "credentials" , credentials );

                            credentials.user.updateProfile( { displayName: name } )
                                .then(
                                    function () {
                                        console.group( ".then()" );

                                        var isRegisterOk = true;

                                        console.logValue( "isRegisterOk" , isRegisterOk );
                                        console.groupEnd();
                                        resolve( isRegisterOk );
                                    }
                                );
                        }
                    )
                    .catch(
                        function( error ) {
                            console.group( ".catch()" );

                            console.logValue( "error" , error );
                            var isRegisterOk = false;

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
