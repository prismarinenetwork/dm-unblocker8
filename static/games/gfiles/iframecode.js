function runframe(urltoadd){
  alert("working...");
  var iframe = document.createElement('iframe');
  iframe.style.position = "absolute";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.top = "0px";
  iframe.style.left = "0px";
  iframe.id = "iframe";
  iframe.style.border = "none";
  iframe.src = window.location.origin + urltoadd;
  document.body.appendChild(iframe);

  var back = document.createElement('img');
  back.style.position = "absolute";
  back.style.width = "50px";
  back.style.height = "50px";
  back.src = "/img/back.png";
  back.style.zIndex = "99999999999999999999";
  back.style.right = "1%";
  back.style.top = "1%";
  back.onclick = function() {
    window.location.pathname="/games";
  };

  document.body.appendChild(back); 
}
