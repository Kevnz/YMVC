YUI.add('ymvc-model', function(Y){
	
	var Model = Y.Base.create('Model', Y.Base, [], {
			initializer:function(){
				Y.log('in the initializer of the base model','info', 'ymvc-model');
				
				if(this.get('url')!==null && Y.Lang.isNumber(this.get('id'))){
					Y.log('a url was passed in, request data and config it');
					Y.log(Y.JSON.stringify(this.toJson()));
					var cfg, request;
						// Create a configuration object for the synchronous transaction.
					cfg = {
						sync: true,
						data:  this.toJson()
					};
					request = Y.io(this.get('url'), cfg);
					var jsonResult = Y.JSON.parse(request.responseText);
					this.setAttrs(jsonResult);
					
				}
			},
			add: function(props){ 
				for (var i = props.length - 1; i >= 0; i--){ 
					this.addAttr( props[i], {value:null}); 
				};
			},
			toJson: function(){
				var obj = {};
				Y.each(this.getAttrs(), function(val, key, baseObj){
					Y.log(key)
					Y.log(key  !== 'destroyed');
					if(key  === 'destroyed' || key === 'initialized' || key === 'url'){

					}else{
						Y.log('adding ' + key + ' to the json');
						obj[key] = val;
					}
				});
				return   Y.JSON.stringify(obj); 
			},
			save: function(){
				if(this.get('url')!==null){
					var cfg, request;
					cfg = {
						sync: true,
						method: 'POST',
						data: this.toJson()
					}
					request = Y.io(this.get('url'), cfg)
					var jsonResult = Y.JSON.parse(request.responseText);
					this.set('id', jsonResult.id);
				}
			}
			
		},{
			ATTRS :{
				title:{value:null},
				id:{value:null},
				url:{value:null}
			}
		}
	);
    Y.Model = Model;

	
			
},  '0.0.1', {requires:['base', 'substitute', 'io-base', 'json','querystring-stringify-simple']});