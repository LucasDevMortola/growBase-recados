// import { authRoles } from 'app/auth';
// import React from 'react';

// const CarsConfig = {
// 	settings: {
// 		layout: {
// 			config: {
// 				mode: 'fullwidth',
// 				scroll: 'content',
// 				navbar: {
// 					display: true,
// 					folded: false,
// 					position: 'left'
// 				},
// 				toolbar: {
// 					display: true,
// 					style: 'fixed',
// 					position: 'below'
// 				},
// 				footer: {
// 					display: false,
// 					style: 'fixed',
// 					position: 'below'
// 				}
// 			}
// 		}
// 	},
// 	// auth: authRoles.onlyGuest,
// 	routes: [
// 		{
// 			path: '/recados/:id',
// 			component: React.lazy(() => import('./show/recado'))
// 		},
// 		{
// 			path: '/recados',
// 			exact: true,
// 			component: React.lazy(() => import('./list/recados'))
// 		}
// 	]
// };

// export default CarsConfig;

import { authRoles } from 'app/auth';
import React from 'react';

const RecadosConfig = {
	settings: {
		layout: {
			config: {
				mode: 'fullwidth',
				scroll: 'content',
				navbar: {
					display: true,
					folded: false,
					position: 'left'
				},
				toolbar: {
					display: true,
					style: 'fixed',
					position: 'below'
				},
				footer: {
					display: false,
					style: 'fixed',
					position: 'below'
				}
			}
		}
	},
	// auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/recados/:id',
			component: React.lazy(() => import('./show/recado'))
		},
		{
			path: '/recados',
			exact: true,
			component: React.lazy(() => import('./list/recados'))
		}
	]
};

export default RecadosConfig;
