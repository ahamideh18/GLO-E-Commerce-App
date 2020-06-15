import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCLmNhpBE2qCEL2COgAF4dlzwmoyfsBd2w",
    authDomain: "glo-reactapp.firebaseapp.com",
    databaseURL: "https://glo-reactapp.firebaseio.com",
    projectId: "glo-reactapp",
    storageBucket: "glo-reactapp.appspot.com",
    messagingSenderId: "706438300285",
    appId: "1:706438300285:web:a951eb550ad0ccce4a2714",
    measurementId: "G-WESQ543FC5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch(e) {
            console.log('Error creating user', e.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;