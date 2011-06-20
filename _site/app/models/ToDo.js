YUI.add('app-model-todo', function(Y){
	
	var ToDo = function(config){
		ToDo.superclass.constructor.apply(this, arguments);
	}
	
	ToDo.NAME = 'app-model-todo';
	ToDo.ATTRS = {
		description: {value:null},
		due_date: {value:null, setter: function(value){
			
		}}
	}
	
	ToDo = Y.extend(ToDo, Y.Model, {
			initializer:function(){
				Y.log('in the initializer', 'info', 'app-model-todo');
			}
		} 
	);
	
	Y.namespace("App.Models").ToDo = ToDo;

	
			
},  '0.0.1', {requires:['base', 'substitute', 'ymvc-model']});