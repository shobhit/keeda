function create_spritz(){
     spritz_loader = function() {
        getURL("https://rawgithub.com/shobhit/keeda/master/backdrop.html", function(data){
            var spritzContainer = document.getElementById("spritz_container");
        
        if (!spritzContainer) {
           var ele = document.createElement("div");
           data = data.replace(/(\r\n|\n|\r)/gm,"");
           ele.innerHTML = data;
           document.body.insertBefore(ele, document.body.firstChild);
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


$(function(){

          $(document.body).append('<div id="mask" style="position: absolute;box-shadow: 0 0 5px red;width: 50%;height: 50%;top: 10px;left: 10px;z-index:-10;"></div>');

});



  function ShowLi() {
    $('#mask').css('background-color','transparent');
      $('#mask').width($(this).width());
        $('#mask').height($(this).height());
        $('#mask').offset($(this).offset());
      return false;
  }
  function ShowKi() {
      console.log($(this).prop('tagName'));
      console.log($(this).html());
    $('#mask').width($(this).width());
    $('#mask').height($(this).height());
    $('#mask').offset($(this).offset());
    $('#mask').css('background-color','pink');
    html2canvas( $(this) , {
      onrendered: function(canvas) {
       document.body.appendChild(canvas);
      }
    });
      return false;
  }

  function insp() {
     $('*').mouseenter(ShowLi).click(ShowKi);
  }


