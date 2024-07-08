import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm/useForm';
import { ButtonType } from '../../components/common/button/button.type';

export default function Auth() {
	const { Component, body, eventClick } = useForm({
		component: 'login',
		inputs: [
			{ iName: 'email', iPlaceholder: 'Correo electrónico' },
			{ iName: 'password', iPlaceholder: 'Contraseña' },
		],
		buttons: [{ bId: 'login', bText: 'Inicias sesión', bType: ButtonType.Dark, bValidate: false }],
	});

	useEffect(() => {
		console.log({ eventClick, body });
		if (eventClick.value) {
		}
	}, [eventClick]);
	return <div>{Component}</div>;
}
