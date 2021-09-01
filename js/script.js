var submit = $('button')

var submit = $('.submit-btn');

submit.on("click", addOn);

//var contain= (".outcome");

function addOn() {
  var firstName = $(".first").val();
  var lastName = $(".last").val();
  var container = $('.outcome');

  container.append(`<div> <p> Thank you ${firstName} ${lastName}, welcome to our community! You are now signed up for all updates. </p> </div>`);
  //var background = $('body')
  //var background.addClass("change");
  event.preventDefault();
}

