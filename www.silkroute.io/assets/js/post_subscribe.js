jQuery(function($) {'use strict';
              
// Contact form
var form = $('#subscribe');
form.submit(function(event){
event.preventDefault();
var form_status = $('<div class="form_status"></div>');

$.ajax({
url: $(this).attr('action'),
data:form.serialize(),
beforeSend: function(){
form.prepend( form_status.html('<p style="text-align: center;"><i class="fa fa-spinner fa-spin"></i> Please wait for a moment...</p>').fadeIn() );
}
}).done(function(data){
form_status.html('<p style="text-align: center;">Thank you for joining us !!</p>').delay(5000).fadeOut();
});
  
$('#subscribe')[0].reset();

});
});