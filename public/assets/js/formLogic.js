$(document).ready(function() {
    
    var currentName = localStorage.getItem("userName");
    var currentID = localStorage.getItem("userID");

    $("button#addUser").click(function(event){
        event.preventDefault();
        var userName = $("form.create-user input[name=user_name]").val();
        if(!userName || userName.length < 2){
            alert("Please enter your name, at least 2 characters.");
        } else {
            //passed validation
            $.ajax({
                method: "POST",
                url: "/user",
                data: {user_name: userName}
            }).done(function(response){
                if(response && response.name){
                    // remember which user you are
                    localStorage.setItem("userName",  response.name);
                    localStorage.setItem("userID",  response.id);
                    // user creation was successful, go to the burgers page
                    window.location.replace("/burgers");
                } else {
                    alert("Something went wrong trying to create user", response);
                }
            });
        }
    });

    $("form.devour-burger #devourBurger").click(function(event){
        event.preventDefault();
        var burgerID = $(this).prev("input[name=burgerID]").val();
        console.log(currentName + " devours burger " + burgerID);
        var endpoint = "/burgers/" + burgerID + "/" + currentID;
         $.ajax({
                method: "POST",
                url: endpoint
            }).done(function(response){
                console.log("done devouring");
            });
    });
    if (currentName){
        console.log(currentName);
        $("span.userName").text(", " + currentName);   
    }
    if (currentID){
        console.log("ID: ", currentID);
        $("form.create-burger input[name=userID]").val(currentID);
    }
});