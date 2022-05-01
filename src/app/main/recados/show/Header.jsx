// import React, { useEffect, useState } from 'react';

// import { useSelector } from 'react-redux';
// import PageCardedHeader from 'app/fuse-layouts/shared-components/page-carded-header/PageCardedHeader';

// function Header() {
// 	const recadoRedux = useSelector(({ recados }) => recados);
// 	const [recado, setRecado] = useState({});

// 	console.log("recadoRedux")
// 	console.log(recadoRedux)
// 	useEffect(() => {
// 		if (recadoRedux) {
// 			setRecado(recadoRedux);
// 		}
// 	}, [recadoRedux]);

// 	return <PageCardedHeader link="/recados" title={recado.descricao || 'Novo recado'} textBack="Recados" />;
// }

// export default Header;


import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import PageCardedHeader from 'app/fuse-layouts/shared-components/page-carded-header/PageCardedHeader';

function Header() {
	const recadoRedux = useSelector(({ recado }) => recado);
	console.log("recadoRedux")
	console.log(recadoRedux)
	const [recado, setRecado] = useState({});

	useEffect(() => {
		if (recadoRedux) {
			setRecado(recadoRedux);
		}
	}, [recadoRedux]);

	return <PageCardedHeader link="/recados" title={recado?.title || 'Novo Recado'} textBack="Recados" />;
}

export default Header;
