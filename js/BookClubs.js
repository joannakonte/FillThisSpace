var submit = $('.submit-btn');

submit.on("click", addOn);

function addOn(){
  var name = $('.name').val();
  var container = $('.results');

  container.append(`<div <p> Thank you ${name}! Our employees will be working to find what you need. An email will soon be sent to you with the results.</p> </div>`);
  event.preventDefault();
}