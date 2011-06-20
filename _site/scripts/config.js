var ymvc_Config = {
	
	
	groups : {
			ymvc : {
				base : 'http://ymvc.dev/scripts/',
				root : '/scripts/', 
				patterns: {
					'ymvc-' : {
						configFn : function( me ) {
							me.path = me.name.replace (/ymvc-/g, "") + '.js'
						}
					}
				}
			},
			app : {
				base : 'http://ymvc.dev/app/',
				root : '/scripts/', 
				patterns: {
					'app-model-' : {
						configFn : function( me ) {
							me.path = 'models/'+ me.name.replace (/app-model-/g, "") + '.js'
						}
					},
					'app-controller-' : {
						configFn : function( me ) {
							me.path = 'controllers/'+ me.name.replace (/app-controller-/g, "") + '.js'
						}
					},
					'app-view-' : {
						configFn : function( me ) {
							me.path = 'views/'+ me.name.replace (/app-controller-/g, "") + '.js'
						}
					}
				}
			}
		}

};