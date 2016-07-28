$(document).ready(function() {
  console.log("Hello world!");

  $("a").click(function(event){
  	if(this.hash){
  		event.preventDefault();
  		var hash = this.hash
  		console.log(hash);

  		$("body,html").animate({
  			scrollTop : $(hash).offset().top
  		}, 500, function(){
  			window.location.hash = hash;
  		})
  	}
  });
});