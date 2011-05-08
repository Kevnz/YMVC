YUI.add('ymvc-collection', function(Y){
	
	var Collection = Y.Base.create('TestModel', Y.Base, [], {
			initializer:function(){
				Y.log('in the initializer','info', 'ymvc-model');
			},
			toJson: function(){
				return   this.getAttrs(); 
			},
			
		},{
			ATTRS :{
				model:{value:null},
				url:{value:null}
			}
		}
	);
    Y.Collection = Collection;

	
			
	},  '0.0.1', {requires:['base', 'substitute']});