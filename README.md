# Fonestar APP

## Resumen

Este proyecto es una aplicación React para gestionar mensajes y sus traducciones. La interfaz permite a un usuario iniciar sesión, mostrar y actualizar datos de solicitudes desde una API.

## Stack

- **sass**: 1.77.4
- **react**: 18.3.1
- **babel**: 7.24.7,
- **eslint**: 8.57.0
- **webpack**: 5.91.0,
- **prettier**: 3.3.1
- **storybook**: 8.1.6
- **react-router-dom**: 6.23.1
- **@storybook/test**: 8.1.6,
- **@storybook/test-runner**: 0.18.2
- **@storybook/testing-library**: 0.2.2

## Instalación y Configuración

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 10 o superior)

### Clonar el Repositorio

```bash
git clone https://github.com/ridaoc19/fonestar-app
```

### Instalación de Dependencias

```bash
npm install
```

### Variables de Entorno

Para que la aplicación funcione correctamente, necesitas configurar las siguientes variables de entorno en un archivo .env en la raíz del proyecto:

```bash
API_BASE_URL=XXXX
API_KEY=XXXX
```

### Modo Development

```bash
npm start
```

### Modo Production

```bash
npm run build
```

### Ejecutar Tests y documentación

Para iniciar Storybook, utiliza el comando `npm run storybook`. Para verificar la integridad y el funcionamiento de las historias, así como para garantizar que las pruebas estén en orden, ejecuta `npm run test-storybook`. Es importante destacar que este último comando solo funcionará si ya has iniciado Storybook con el comando anterior.

```bash
npm run storybook
npm run test-storybook
```

### Pruebas, Validación y herramientas

- **ESlint**: Configurado con ESLint para mantener el código limpio y sin errores.

```bash
npm run lint
```

- **Prettier**: Para mantener un código limpio y consistente, se ha integrado [Prettier](https://prettier.io/) en este proyecto.

```bash
npm run format
```

Este proyecto fue desarrollado por **Ricardo David Ocampo**.

- **LinkedIn:** [https://www.linkedin.com/in/ridaoc19](https://www.linkedin.com/in/ridaoc19)
- **GitHub:** [https://github.com/ridaoc19](https://github.com/ridaoc19)
