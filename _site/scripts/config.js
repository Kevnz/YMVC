var ymvc_Config = {
	modules: {
		'ymvc-model' :{
			fullpath: '/scripts/model.js',
			requires:['base', 'substitute']
		},
		'ymvc-controller' : {
			fullpath: '/scripts/controller.js',
			requires:['base', 'substitute']
		},
		'ymvc-template-widget': {
			fullpath: '/scripts/template-widget.js',
			requires:['widget', 'substitute']
		}
	}
};