import * as Yup from 'yup';

const userSchemas: Record<string, Yup.Schema> = {
	email: Yup.string()
		.email('El formato del correo electrónico no es válido')
		.required('El correo electrónico es requerido'),
	password: Yup.string()
		.required('La contraseña es requerida')
		.min(6, 'La contraseña debe tener al menos 6 caracteres')
		.max(15, 'La contraseña debe tener máximo 15 caracteres'),
};

const validationSchemas = { ...userSchemas };

export default validationSchemas;