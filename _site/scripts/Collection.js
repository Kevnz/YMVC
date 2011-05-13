YUI.add('ymvc-collection', function(Y){
	
	
	
	var Collection = function(config){
		
		Collection.superclass.constructor.apply(this, arguments);
	}
	Collection.NAME = 'ymvc-collection';
	Collection.ATTRS = {
		model:{value:null},
		url:{value:null}
	}
	Y.extend(Collection,    Y.Base,  {
			initializer:function(){
				Y.log('in the initializer','info', 'ymvc-collection');
				var uri = this.get('url');
				var cfg, request; 
				cfg = {
					sync: true,
					arguments: { 'foo' : 'bar' }
				};

				/*
				 * var request will contain the following fields, when the
				 * transaction is complete:
				 * - id
				 * - status
				 * - statusText
				 * - getResponseHeader()
				 * - getAllResponseHeaders()
				 * - responseText
				 * - responseXML
				 * - arguments
				 */
				Y.log('gonna get ' + uri);
				request = Y.io(uri, cfg); 
				var data = Y.JSON.parse(request.responseText);
				var modType = this.get('model');
				var items = [];
				
				for (var i=0; i < data.length; i++) {
					items.push(new modType(data[i]));
				};
				
				this.set('Collection', items);
				Y.log(this.get('Collection')[0].get('title'));
			 	
			},
			toJson: function() {
				return   this.getAttrs(); 
			},
			
		} 
	);
    Y.Collection = Collection;
	},  '0.0.1', {requires:['base', 'substitute', 'io-base','ymvc-model','json-parse']});