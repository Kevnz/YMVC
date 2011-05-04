YUI.add('ymvc-template-widget', function(Y){
	
		var TemplatedWidget = Y.Base.create('TemplatedWidget', Y.Widget, [], {
			renderUI : function(){
				Y.log('renderUI');
				this.get('contentBox').set('innerHTML', Y.substitute(this.get('template'), this.get('model').toJson()) );
			},
			bindUI: function(){
				Y.log('bindUI');						
				var link = this.get('contentBox').one('a');
				link.on('click', function(e){
					Y.log('click');
					Y.log(e.currentTarget);
					e.preventDefault();							
				})
			},
			syncUI:function(){
				Y.log('syncUI');
			}
		},
		{
			ATTRS: {
				template:{value:'{title}<br /><a href="#" id="{id}">edit</a>'},
				model:{value:null}
			}
		}
		
		Y.namespace('ymvc').TemplatedWidget = TemplatedWidget;
	);
			
},  '0.0.1', {requires:['widget', 'substitute']});