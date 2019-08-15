define(['dojo/_base/declare', 'jimu/BaseWidget',
  'jimu/loaderplugins/jquery-loader!https://code.jquery.com/jquery-git1.min.js'],
function(declare, BaseWidget, $){
  return declare(BaseWidget, {
	  startup: function(){
		
      var map = this.map;
	  var ly = this.map.layer;
	  
      $('.jimu-widget-use-jquery .map-id').click(function(){
        map.setZoom(8);
      });

      $('.jimu-widget-use-jquery .map-id6').click(function(){
        console.log("Layer1");
		var layers = map.getLayersVisibleAtScale(map.getScale());
        layers.forEach(function (layer) {
		   console.info(layer.id);
           if (layer.id == 'World_Street_Map_8421') {
           layer.setVisibility(true);
	       }
		   if (layer.id == 'USA_1011') {
           layer.setVisibility(false);
	       }
	     });
	  });
	  
	  $('.jimu-widget-use-jquery .map-id7').click(function(){
         console.log("Layer2");
		 var layers = map.getLayersVisibleAtScale(map.getScale());
         layers.forEach(function (layer) {
		   console.info(layer.id);
           if (layer.id == 'USA_1011') {
           layer.setVisibility(true);
	       }
		   if (layer.id == 'World_Street_Map_8421') {
           layer.setVisibility(false);
	       }
	     });
      });
	  
      
	  $('.jimu-widget-use-jquery .map-id1').click(function(){
        map.setZoom(3);
      });
	  
	  $('.jimu-widget-use-jquery .map-id2').click(function(){
        map.panUp();
      });
	  
	  $('.jimu-widget-use-jquery .map-id3').click(function(){
        map.panDown();
      });
	  
	  $('.jimu-widget-use-jquery .map-id4').click(function(){
        map.panRight();
      });
	  
	  $('.jimu-widget-use-jquery .map-id5').click(function(){
        map.panLeft();
      });
    }
  });
});


