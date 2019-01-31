const _config ={
	'development': {
		// baseURL: '/dsIntegration-manager',
		baseURL: '',
		BASE_FILE_URL: ''
	},
	'test': this.development,
	'production': {
		//baseURL: 'http://116.236.220.210:34081',
		// baseURL: 'http://192.168.21.30:8081',
		baseURL: 'http://192.168.21.30:8081',
		BASE_FILE_URL: ''
	}
}
const baseURL = _config[process.env.NODE_ENV].baseURL

export { baseURL }