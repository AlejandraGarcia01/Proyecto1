var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {

  apiKey: "AIzaSyAfUye_nhVPbtFrbtA_HYGukzcg2Ztr7Gg",
  authDomain: "esp32-80b75.firebaseapp.com",
  databaseURL: "https://esp32-80b75-default-rtdb.firebaseio.com",
  projectId: "esp32-80b75",
  storageBucket: "esp32-80b75.appspot.com",
  messagingSenderId: "150848926628",
  appId: "1:150848926628:web:0e90de40f86dd157860731",
  measurementId: "G-D93JGYT8H4"
};
const fire = firebase.initializeApp(config);
module.exports = fire;