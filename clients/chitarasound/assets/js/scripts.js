$(document).ready(function(){
    // alert('Works!')
    //$('.get-stared').removeClass("animate__animated animate__shakeY").addClass("animate__animated animate__pulse infinite" );
});

function service(evt, serviceName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
};


var modal = document.getElementById("palcoModal");
var btn = document.getElementById("palcoBtn");
btn.onclick = function() {
  modal.style.display = "block";
}


var multimediaModal = document.getElementById("multimediaModal");
var multimediaBtn = document.getElementById("multimediaBtn");
multimediaBtn.onclick = function() {
  multimediaModal.style.display = "block";
}

var leadwallModal = document.getElementById("leadwallModal");
var leadwallBtn = document.getElementById("leadwallBtn");
leadwallBtn.onclick = function() {
  leadwallModal.style.display = "block";
}

var telasModal = document.getElementById("telasModal");
var telasBtn = document.getElementById("telasBtn");
telasBtn.onclick = function() {
  telasModal.style.display = "block";
}


var span = document.getElementsByClassName("close")[0];
window.onclick = function(event) {
  if (event.target == multimediaModal || 
    event.target == modal || 
    event.target == leadwallModal || 
    event.target == telasModal) {
        modal.style.display = "none";
        multimediaModal.style.display = "none";
        leadwallModal.style.display = "none";
  }
}
span.onclick = function() {
  modal.style.display = "none";
  multimediaModal.style.display = "none";
}

