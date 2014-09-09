$( ".tabs" ).click(function() {
  $("div").find(".new").removeClass('new')
  $(this).next().toggleClass("new")
});
