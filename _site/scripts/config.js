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
			}
		}

};