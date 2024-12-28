  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAXPBOiw8_VTBgxzcczcPR4yS1p_ynioGQ",
    authDomain: "monono-bd90d.firebaseapp.com",
    databaseURL: "https://monono-bd90d-default-rtdb.firebaseio.com",
    projectId: "monono-bd90d",
    storageBucket: "monono-bd90d.firebasestorage.app",
    messagingSenderId: "16057362867",
    appId: "1:16057362867:web:dc64933bb3b50c00f0c3c6",
    measurementId: "G-H5P3TN9YMR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("path/to/AIzaSyAXPBOiw8_VTBgxzcczcPR4yS1p_ynioGQ.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
// The database URL depends on the location of the database
databaseURL: "https://monono-bd90d-default-rtdb.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
console.log(snapshot.val());
});