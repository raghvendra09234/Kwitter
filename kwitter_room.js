
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDBoKvDesP6C_HfPSJvAk6mmR8UkR2dff0",
  authDomain: "kwitter-raghv.firebaseapp.com",
  databaseURL: "https://kwitter-raghv-default-rtdb.firebaseio.com",
  projectId: "kwitter-raghv",
  storageBucket: "kwitter-raghv.appspot.com",
  messagingSenderId: "10214205567",
  appId: "1:10214205567:web:5003a401184e1ea5ed374a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// 1st
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";











//2nd

function addRoom()
{
  room_name = document.getElementById("room_name").value;



  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });




    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";

}







//3rd


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);

       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
       document.getElementById("output").innerHTML += row;
    });
  });

}




getData();






function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}









function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

