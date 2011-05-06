YUI.add('ymvc-controller', function(Y){
	
	var Controller = Y.Base.create('Controller', Y.Base, [], {
			initializer:function(){
				Y.log('in the initializer','info', 'ymvc-model');
			}
		},{
			ATTRS :{
				title:{value:null},
				id:{value:null}
			}
		}
	);
    Y.Controller = Controller;

	
			
},  '0.0.1', {requires:['base', 'substitute']});