import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCbr7B23DfxMe8BmwuU2lc4S515ywFsCBw",
    authDomain: "smart-cooker-bd23d.firebaseapp.com",
    projectId: "smart-cooker-bd23d",
    storageBucket: "smart-cooker-bd23d.appspot.com",
    messagingSenderId: "1041894363382",
    appId: "1:1041894363382:web:9618c919abff51c46e5cd7",
    measurementId: "G-NPBRZEFW5Y"
  };

  firebase.initializeApp(firebaseConfig);

const storage  = firebase.storage();

export { storage, firebase as default };