(function($, window, document, undefined){
	
	
	$.fn.tabs = function(){
		
		return this.each(function(){
			
			var that = $(this),
				navs = that.find(".tabs-nav-item"),
				contents = that.find(".tabs-item"),
				activeClass = "tabs-nav-item-active";
				
			navs.first().addClass(activeClass);
			contents.not(":first").hide();
			
			navs.on("click", function(){
				var nav = $(this);
					index = nav.index();
					
				if( nav.hasClass(activeClass) ){
					return;
					};
					
			
				navs.removeClass(activeClass);
				nav.addClass(activeClass);
				
				contents.hide().eq(index).fadeIn(500);
				
			});

		});
	
	};
	
	
	
	
})(jQuery, window, document);