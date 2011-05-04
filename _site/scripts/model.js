YUI.add('ymvc-model', function(Y){
	
	var Model = Y.Base.create('TestModel', Y.Base, [], {
			initializer:function(){
				Y.log('in the initializer','info', 'ymvc-model');
			},
			toJson: function(){
				
				return { this.getAttrs(); };
			},
			
		},{
			ATTRS :{
				title:{value:null},
				id:{value:null}
			}
		}
	);
	
	
			
},  '0.0.1', {requires:['base', 'substitute']});