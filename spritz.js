function create_spritz(){
     spritz_loader = function() {
        getURL("https://rawgithub.com/shobhit/keeda/master/backdrop.html", function(data){
            var spritzContainer = document.getElementById("spritz_container");
        
        if (!spritzContainer) {
           var ele = document.createElement("div");
           data = data.replace(/(\r\n|\n|\r)/gm,"");
           ele.innerHTML = data;
           document.body.insertBefore(ele, document.body.firstChild);
           document.getElementById("spritz_toggle").style.display = "none";
       };
        });
    };

    spritz_loader();
}

function getURL(url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseText);
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// function hide_spritz(){
//     document.getElementById("spritz_spacer").style.display = "none";
//     document.getElementById("spritz_container").style.display = "none";
//     document.getElementById("spritz_holder").style.display = "none";
// }


