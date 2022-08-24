var firebaseConfig = {
      apiKey: "AIzaSyCNnGj5XfozUoDa3xZy_Vjl9wJ6m-Ry9Sw",
      authDomain: "kwitter-dcd51.firebaseapp.com",
      databaseURL: "https://kwitter-dcd51-default-rtdb.firebaseio.com",
      projectId: "kwitter-dcd51",
      storageBucket: "kwitter-dcd51.appspot.com",
      messagingSenderId: "58006242948",
      appId: "1:58006242948:web:75840f042fcc1c423f24d1"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" ;
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
  
        localStorage.setItem("room_name", room_name);
  
  
        window.location = "iLine_room.html"
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room name - " + Room_names);
        row = "<div class = 'room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names+ "</div><hr>"
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "iLine_page.html";
  }
  
  function logout()
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }
  