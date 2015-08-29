//Load Web App JavaScript Dependencies/Plugins

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
	  if (document.addEventListener) {
    	  document.addEventListener('DOMContentLoaded', fn);
		}
		else {
			document.attachEvent('DOMContentLoaded', fn);
		}
  }
}


require([ "./vendor/velocity" ], function () {

	function markAll(){
		elementNodeArray = document.querySelectorAll('a.scroll-on-page-link');
		for (var i = 0; i < elementNodeArray.length; ++i) {
		  var item = elementNodeArray[i];
	  
		  item.addEventListener('click', (function() {
			  var target = document.querySelectorAll(item.getAttribute('href'))[0];
			  var theSpeed = 2000;
		  
			  return function (e) {
				  Velocity(target,"scroll", { duration: theSpeed, easing: 'ease-in-out' });
				  e.preventDefault()}		  
		  })()
	  );
	    
	}
	}

	ready(markAll);

});

//  Script to inject inline svg code where supported and png reference where not.
//  Taken from https://css-tricks.com/ajaxing-svg-sprite/ and comments.
//

function loadSvg(selector, url) {
  var targetNodeArray = document.querySelectorAll(selector);

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url + ".svg", true);
	ajax.responseType = "document";
	ajax.onload = function(e) {
	  try {
	    svg = ajax.responseXML.documentElement;
	    svg.setAttribute("style", "display:none; position: absolute");
	    //Used to hide the SVG
	    document.body.insertBefore(svg,
	              document.body.childNodes[0]);
	  }
	  catch(e){console.log(e);}
	}
	ajax.send();


  } else {
    // Fallback to png by rewriting the use statement.
	for (var i = 0; i < targetNodeArray.length; ++i) {
	  var item = targetNodeArray[i];
	  var target = item.parentElement;
      target.innerHTML = "<img class='icon' src='" + url + ".png' />";
    }
  }
}

ready(function () {loadSvg(".icon", "images/TextLogo")});


require([
	"./vendor/velocity",
    "./vendor/fireSlider"
], (function ()
{
	ready(function() {
	    FireSlider.slider(".slider");
	});

}));



require(["./app/mobileMenu"] );


