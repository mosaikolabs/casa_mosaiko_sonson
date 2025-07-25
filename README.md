# Casa Mosaiko Sonsón

Una aplicación web moderna para Casa Mosaiko Sonsón, un hospedaje único en el corazón de Antioquia. Desarrollada con React y las últimas tecnologías frontend para ofrecer una experiencia de usuario excepcional.

## 🚀 Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Data Visualization** - Integrated D3.js and Recharts for powerful data visualization
- **Form Management** - React Hook Form for efficient form handling
- **Animation** - Framer Motion for smooth UI animations
- **Testing** - Jest and React Testing Library setup

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
   
2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
react_app/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── App.jsx         # Main application component
│   ├── Routes.jsx      # Application routes
│   └── index.jsx       # Application entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints.


## 📦 Deployment

### Desarrollo Local

Para ejecutar el proyecto en modo desarrollo:

```bash
npm start
```

### Build de Producción

Para compilar la aplicación para producción:

```bash
npm run build
```

### Despliegue

El proyecto está configurado para despliegue en Netlify. Los archivos de configuración incluyen:

- `netlify.toml` - Configuración de build y headers
- `public/_redirects` - Configuración de rutas para SPA

Para desplegar:

1. Conecta tu repositorio a Netlify
2. El build se ejecutará automáticamente con `npm run build`
3. Los archivos se servirán desde la carpeta `dist`

### Optimizaciones Incluidas

- ✅ Fuentes sans-serif (Inter) para mejor legibilidad
- ✅ Variables CSS para consistencia de colores
- ✅ Configuración de caché para assets
- ✅ Headers de seguridad
- ✅ Configuración SPA para React Router

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS

Built with ❤️ on Rocket.new
