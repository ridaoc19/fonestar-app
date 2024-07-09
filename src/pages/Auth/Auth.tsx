import { useContext, useEffect } from 'react';
import { ButtonType } from '../../components/common/button/button.type';
import useForm from '../../hooks/useForm/useForm';
import { CreateContext } from '../../hooks/useContext';

export default function Auth() {
	const { login } = useContext(CreateContext);
	const { Component, body, eventClick } = useForm({
		component: 'login',
		inputs: [
			{ iName: 'email', iPlaceholder: 'Correo electrónico' },
			{ iName: 'password', iPlaceholder: 'Contraseña' },
		],
		buttons: [{ bId: 'login', bText: 'Inicias sesión', bType: ButtonType.Dark, bValidate: true }],
	});

	useEffect(() => {
		if (eventClick.value) {
			login(body);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventClick]);

	return <div>{Component}</div>;
}
