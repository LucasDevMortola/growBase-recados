// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import FusePageCarded from '@fuse/core/FusePageCarded';

// import TableComponent from 'app/fuse-layouts/shared-components/table';
// import PageCardedHeader from 'app/fuse-layouts/shared-components/page-carded-header/PageCardedHeader';
// import { getAll, selectAll } from '../store/recadosSlice';
// import axios from 'axios';
// const columns = [
// 	{
// 		id: 'descricao',
// 		align: 'left',
// 		disablePadding: false,
// 		label: 'Descrição',
// 		sort: false
// 	},
//     {
// 		id: 'detalhe',
// 		align: 'left',
// 		disablePadding: false,
// 		label: 'Detalhe',
// 		sort: false
// 	}
// ];

// export default function Recados() {

// 	const history = useHistory();
// 	const dispatch = useDispatch();
// 	const recadosRedux = useSelector(selectAll);
// 	const [data, setData] = useState([]);
// 	const [loading, setLoading] = useState(false);


// 	useEffect(()=>{
// 		axios.get('https://appbackrecadosredis.herokuapp.com/recados')
// 		.then((res)=>{
// 			console.log("res")
// 			setData(res.data)
// 		})
// 	},[])

// 	function handleClick(value) {
// 		console.log("OLa dfvfv")
// 		console.log(value)
// 		history.push(`/recados/${value.uid}`);
// 	}

// 	function handleClickNew() {
// 		history.push(`/recados/new`);
// 	}

// 	useEffect(() => {
// 		setLoading(true);
// 		dispatch(getAll());
// 	}, []);

// 	useEffect(() => {
// 		if (recadosRedux) {
// 			setLoading(false);
// 			if (recadosRedux.length) {
// 				const parseRecados = recadosRedux.map(item => {
// 					return {
// 						...item
// 					};
// 				});
// 				setData(parseRecados);
// 			}
// 		}
// 	}, [recadosRedux]);

// 	return (
// 		<FusePageCarded
// 			classes={{
// 				content: 'flex',
// 				contentCard: 'overflow-hidden rounded-t-12',
// 				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136 white'
// 			}}
// 			header={<PageCardedHeader title="Recados" buttonTitle="ADICIONAR NOVO" buttonAction={handleClickNew} />}
// 			content={<TableComponent columns={columns} data={data} action={handleClick} />}
// 			innerScroll
// 		/>
// 	);
// }

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FusePageCarded from '@fuse/core/FusePageCarded';

import TableComponent from 'app/fuse-layouts/shared-components/table';
import PageCardedHeader from 'app/fuse-layouts/shared-components/page-carded-header/PageCardedHeader';
import { getAll, selectAll } from '../store/recadosSlice';


const columns = [
	{
				id: 'descricao',
				align: 'left',
				disablePadding: false,
				label: 'Descrição',
				sort: false
			},
		    {
				id: 'detalhe',
				align: 'left',
				disablePadding: false,
				label: 'Detalhe',
				sort: false
			}
];

export default function Recados() {
	const history = useHistory();
	const dispatch = useDispatch();
	const recadosRedux = useSelector(selectAll);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	function handleClick(value) {
		history.push(`/recados/${value.uid}`);
	}

	function handleClickNew() {
		history.push(`/recados/new`);
	}

	useEffect(() => {
		setLoading(true);
		dispatch(getAll());
	}, []);

	useEffect(() => {
		if (recadosRedux) {
			setLoading(false);
			if (recadosRedux.length) {
				const parseProducts = recadosRedux.map(item => {
					return {
						...item
					};
				});
				setData(parseProducts);
			}
		}
	}, [recadosRedux]);

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden rounded-t-12',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136 white'
			}}
			header={<PageCardedHeader title="Recados" buttonTitle="ADICIONAR NOVO" buttonAction={handleClickNew} />}
			content={<TableComponent columns={columns} data={data} action={handleClick} />}
			innerScroll
		/>
	);
}

