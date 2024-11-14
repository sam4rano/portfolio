export default {
	name:'blog',
	type:'document',
	title:'Blog',
	fields: [
		{
			name:'title',
			type:'string',
			title:'Title of Blog article'
		},
		{
			name:'slug',
			type:'slug',
			title:'slug of Blog article',
			options: {
				source:'title'
			}
		},
		{
			name:'titleImage',
			type:'image',
			title:'image title of blog title'
		},
		{
			name:'smallDescription',
			type:'text',
			title:'description of Blog article'
		},
		{
			name:'content',
			type:'array',
			title:'Content',
			of: [{
				type:'block'
			},
		],
		}
	]
}