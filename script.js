$(document).ready(function(){ 
$("form#frm").submit(function(event){ 
var name = $('#inputName').val();
event.preventDefault();
alert('Hey ' + name + ', we have received your message. Thank you for reaching out to us.')
});
});

$(document).ready(function() {
    $('#black-studio').hover(function(){
    $('.text1').toggle();
    })
  $('#ontario').hover(function(){
    $('.text2').toggle();
    })
 $('#pyramids').hover(function(){
    $('.text3').toggle();
    })
$('#jim-carry').hover(function(){
    $('.text4').toggle();
    })
$('#nice-day').hover(function(){
    $('.text5').toggle();
    })
$('#calculator').hover(function(){
    $('.text6').toggle();
    })
$('#burned').hover(function(){
    $('.text7').toggle();
    })
$('#giraffe').hover(function(){
    $('.text8').toggle();
    })

$('#design').click(function() {
$('#design').slideDown('1500').hide('1000');
$('#design-text').show('1500');
})
$('#design-text').click(function() {
$('#design').slideUp('1500').show('1000');
$('#design-text').slideDown('1500').hide('1000');
})

$('#development').click(function() {
$('#development').slideDown('1500').hide('1000');
$('#development-text').show('1500');
})

$('#development-text').click(function() {
$('#development').slideUp('1500').show('1000');
$('#development-text').slideDown('1500').hide('1000');
})

$('#product').click(function() {
$('#product').slideDown('1500').hide('1000');
$('#product-text').slideUp('1500').show('1500');
})
$('#product-text').click(function() {
$('#product').slideDown('1500').show('1000');
$('#product-text').slideUp('1500').hide('1000');
})
});