import * as Yup from 'yup';

const userSchemas: Record<string, Yup.Schema> = {
	email: Yup.string()
		.email('El formato del correo electrónico no es válido')
		.required('El correo electrónico es requerido'),
	newEmail: Yup.string()
		.email('El formato del correo electrónico no es válido')
		.required('El correo electrónico es requerido'),
	password: Yup.string()
		.required('La contraseña es requerida')
		.min(6, 'La contraseña debe tener al menos 6 caracteres')
		.max(15, 'La contraseña debe tener máximo 15 caracteres'),

	// .matches(
	//   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
	//   'La contraseña debe contener al menos una letra, un número y un carácter especial (@$!%*?&)'
	// ),
	newPassword: Yup.string()
		.required('Repetir contraseña es requerido')
		.min(6, 'La contraseña debe tener los mismos caracteres que la nueva contraseña'),
	name: Yup.string()
		.required('El nombre es obligatorio')
		.min(2, 'Ingrese al menos 2 caracteres para el nombre')
		.max(50, 'Ingrese máximo 50 caracteres para el nombre'),
	lastName: Yup.string()
		.required('El apellido es obligatorio')
		.min(2, 'Ingrese al menos 2 caracteres para el apellido')
		.max(50, 'Ingrese máximo 50 caracteres para el apellido'),
	phone: Yup.string()
		.required('El número telefónico es obligatorio')
		.min(7, 'Ingrese al menos 7 dígitos para el número telefónico')
		.max(15, 'Ingrese máximo 15 dígitos para el número telefónico')
		.matches(/^[0-9]+$/, 'Ingrese solo números para el número telefónico'),
	roles: Yup.string().required('Debe seleccionar uno de los roles aceptados'),
};

const advertisingSchemas: Record<string, Yup.Schema> = {
	page: Yup.string()
		.required('Debe ingresar un page')
		.min(2, 'Ingrese al menos 2 caracteres para el page')
		.max(50, 'Ingrese máximo 50 caracteres para el page'),
	location: Yup.string()
		.required('Debe ingresar un location')
		.min(2, 'Ingrese al menos 2 caracteres para el location')
		.max(50, 'Ingrese máximo 50 caracteres para el location'),
	title: Yup.string()
		.required('Debe ingresar un title')
		.min(2, 'Ingrese al menos 2 caracteres para el title')
		.max(50, 'Ingrese máximo 50 caracteres para el title'),
	redirect: Yup.string()
		.required('Debe ingresar un redirect')
		.min(2, 'Ingrese al menos 2 caracteres para el redirect')
		.max(400, 'Ingrese máximo 400 caracteres para el redirect'),
	text: Yup.string()
		.required('Debe ingresar un text')
		.min(2, 'Ingrese al menos 2 caracteres para el text')
		.max(50, 'Ingrese máximo 50 caracteres para el text'),
	image_desktop: Yup.string()
		.required('Debe ingresar un image_desktop')
		.min(2, 'Ingrese al menos 2 caracteres para el image_desktop')
		.max(50, 'Ingrese máximo 50 caracteres para el image_desktop'),
	image_tablet: Yup.string(),
	image_phone: Yup.string(),
};

const validationSchemas = { ...advertisingSchemas, ...userSchemas };

export default validationSchemas;
