import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD3r0DkcKbLy59hXuA9lZQ_u9EH59w1gEQ",
    authDomain: "vue3firebase9-669a2.firebaseapp.com",
    projectId: "vue3firebase9-669a2",
    storageBucket: "vue3firebase9-669a2.appspot.com",
    messagingSenderId: "467928725881",
    appId: "1:467928725881:web:95686b2dfd3f743633d7a8"
};



const app=initializeApp(firebaseConfig);

const auth=getAuth();
const db=getFirestore();

export {auth,db}