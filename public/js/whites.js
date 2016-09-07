var GLOBALS={
    Radio:'R',
    checkbox:'C'
}

function logmessage(msg){
    console.log(msg);
}

function sendmessage() {

    ajaxcall(
        "/sendmessage",
        $("#contactform").serializeObject(),
        contactFormReset
        );
}

function ajaxcall(url, data, callback) {
    console.log(data);
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: callback,
        failure: failedAjaxCall
    });

}
 function failedAjaxCall(){
    console.log("Failed Scenario");  
 }
function contactFormReset(data) {
    
    if (data.message == "success") {
        $('#successemail').show();
        $('#contactform').each(function () { this.reset(); });

    } else {
        $('#failemail').show();

    }
    $("#contactform [type='submit']").attr("disabled", false);
    
}

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

//Overriding BOOT STRAP alerts..
$(document).on('click', '.alert-close', function () {
    $(this).parent().hide();
})


function copyClipBoard(){
  var copyTextarea = document.querySelector('.copytoclipboard');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }  
    
}
 
function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
}

 
