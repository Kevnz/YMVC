YUI.add('ymvc-model', function(Y){
	
	var Model = Y.Base.create('Model', Y.Base, [], {
			initializer:function(){
				Y.log('in the initializer','info', 'ymvc-model');
			},
			add: function(props){ 
				for (var i = props.length - 1; i >= 0; i--){ 
					this.addAttr( props[i], {value:null}); 
				};
			},
			toJson: function(){
				return   this.getAttrs(); 
			},
			
		},{
			ATTRS :{
				title:{value:null},
				id:{value:null}
			}
		}
	);
    Y.Model = Model;

	
			
},  '0.0.1', {requires:['base', 'substitute']});