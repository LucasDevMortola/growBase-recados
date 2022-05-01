import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';

import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import MailConfirmConfig from 'app/main/mail-confirm/MailConfirmConfig';
import PreviewConfig from 'app/main/preview/PreviewConfig';
import HomeConfig from 'app/main/home/HomeConfig';
import ForgotPasswordConfig from 'app/main/forgot-password/ForgotPasswordConfig';

import CategoriesConfig from 'app/main/categories/CategoriesConfig';
import RecadosConfig from 'app/main/recados/recadosConfig'
const routeConfigs = [
	LoginConfig,
	RegisterConfig,
	MailConfirmConfig,
	PreviewConfig,
	ForgotPasswordConfig,
	HomeConfig,
	CategoriesConfig,
	RecadosConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/recados" />
	}
];

export default routes;
