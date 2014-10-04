(function ( $ ) {
 
    $.fn.saveForm = function( options ) {
		var elem = this;
		if(elem.is('form'))
			elem = this.find('input,select,textarea');
		elem.each(function(options){
			var elem = this, $elem = $(this), tmp = '';
			if(localStorage.getItem(elem.id || elem.name)){
				if( elem.tagName.toLowerCase() == 'input' && (elem.type == 'checkbox' || elem.type == 'radio') )
					elem.checked = localStorage.getItem(elem.id || elem.name);
				else
					elem.value = localStorage.getItem(elem.id || elem.name);
			}
			switch(elem.tagName.toLowerCase()){
				case 'input':
				case 'textarea':
					switch(elem.type){
						case 'checkbox':
						case 'radio':
							$(elem).click(function(){ 
								localStorage.setItem(this.id || this.name, this.checked); 
							});
							break;
						default:
							$(elem).keyup(function(){ 
								tmp = this.value; 
								})
								.blur(function(){ 
									localStorage.setItem(this.id || this.name, tmp);
								});
							break;
					}
					break;
				case 'select':
					$(elem).change(function(){ 
						tmp = this.value; 
						localStorage.setItem(this.id || this.name, tmp);
						});
					break;
			}	
		});
		
		return this;
    };
	
}( jQuery ));