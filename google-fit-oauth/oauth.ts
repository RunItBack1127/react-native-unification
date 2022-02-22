import GoogleFit, { BucketUnit, Scopes } from 'react-native-google-fit';

const options = {
    scopes: [
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_ACTIVITY_WRITE,
        Scopes.FITNESS_BODY_READ,
        Scopes.FITNESS_BODY_WRITE
    ]
};

function signInToGoogleFitOAuth() {
    console.log("Authorizing...");
    GoogleFit.authorize(options).then(result => {
        if(result.success) {
            console.log("Authorize success");
        }
        else {
            console.log("Authorize failed");
        }
    });
}

export {
    signInToGoogleFitOAuth
};