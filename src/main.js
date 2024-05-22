import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCoS0ipK_rOm0ZSeB5d_ehhVBJTq6o2_RE",
  authDomain: "playground-9d131.firebaseapp.com",
  databaseURL:
    "https://playground-9d131-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "playground-9d131",
  storageBucket: "playground-9d131.appspot.com",
  messagingSenderId: "425804815503",
  appId: "1:425804815503:web:43dd78a6b82672d0eae4fa",
};

const app = initializeApp(firebaseConfig);
const databse = getDatabase(app);
const NotesInDB = ref(databse, "Notes");

set(NotesInDB, "Hello");
const textArea = document.getElementById("notes");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");
