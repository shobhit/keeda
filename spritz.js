(function() {
  var el=document.createElement('div'),
   b=document.getElementsByTagName('body')[0];
   otherlib=false,
   msg='';
  el.style.position='fixed';
  el.style.height='32px';
  el.style.width='220px';
  el.style.marginLeft='-110px';
  el.style.top='0';
  el.style.left='50%';
  el.style.padding='5px 10px';
  el.style.zIndex = 1001;
  el.style.fontSize='12px';
  el.style.color='#222';
  el.style.backgroundColor='#f99';
  if(typeof jQuery!='undefined') {
 msg='This page already using jQuery v'+jQuery.fn.jquery;
 return showMsg();
  } else if (typeof $=='function') {
 otherlib=true;
  }
  // more or less stolen form jquery core and adapted by paul irish
  function getScript(url,success){
 var script=document.createElement('script');
 script.src=url;
 var head=document.getElementsByTagName('head')[0],
  done=false;
 // Attach handlers for all browsers
 script.onload=script.onreadystatechange = function(){
   if ( !done && (!this.readyState
     || this.readyState == 'loaded'
     || this.readyState == 'complete') ) {
  done=true;
  success();
  script.onload = script.onreadystatechange = null;
  head.removeChild(script);
   }
 };
 head.appendChild(script);
  }
  getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',function() {
 if (typeof jQuery=='undefined') {
   msg='Sorry, but jQuery wasn\'t able to load';
 } else {
   msg='This page is now jQuerified with v' + jQuery.fn.jquery;
   if (otherlib) {msg+=' and noConflict(). Use $jq(), not $().';}
 }
 return showMsg();
  });
  function showMsg() {
 el.innerHTML=msg;
 b.appendChild(el);
 window.setTimeout(function() {
   if (typeof jQuery=='undefined') {
  b.removeChild(el);
   } else {
  jQuery(el).fadeOut('slow',function() {
    jQuery(this).remove();
  });
  if (otherlib) {
    $jq=jQuery.noConflict();
  }
   }
 } ,2500);
  }
})();

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


   $('#button1,#button2').click(function(event){ 
    if($(event.target).attr('id')=='button1'){
        /* specific code for button1 */
        insp();
    } else if($(event.target).attr('id')=='button2'){
        /* specific code for button2 */
        alert(2);
    } 
});
   
