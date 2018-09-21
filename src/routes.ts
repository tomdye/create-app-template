import { RouteConfig } from '@dojo/framework/routing/interfaces';

export const config: RouteConfig[] = [
	{
		path: 'home',
		outlet: 'home'
	},
	{
		path: 'books',
		outlet: 'books',
		children: [
			{
				path: '{isbn}',
				outlet: 'book-details'
			}
		]
	}
];

export default config;
