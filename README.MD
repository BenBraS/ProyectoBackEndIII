# Sistema de Adopción de Mascotas 🐶🐱

Este proyecto es una aplicación pensada para gestionar adopciones de mascotas. Permite a los usuarios adoptar mascotas disponibles, así como gestionar usuarios y realizar un seguimiento de las adopciones en tiempo real. Fue diseñado para ser escalable y fácil de usar, utilizando tecnologías modernas como Node.js, Express y MongoDB.

## Contenidos

1. [Descripción General](#descripción-general)  
2. [Características](#características)  
3. [Requisitos](#requisitos)  
4. [Configuración e Instalación](#configuración-e-instalación)  
5. [Rutas de la API](#rutas-de-la-api)  
6. [Pruebas](#pruebas)  
7. [Contribuciones](#contribuciones)  
8. [Sobre mí](#sobre-mí)  

## Descripción General

El sistema de adopción tiene como objetivo conectar a personas que desean adoptar una mascota con los refugios. A través de esta herramienta, los administradores pueden mantener un registro de usuarios, mascotas y las adopciones realizadas.

## Características

- **Gestión de Adopciones:** Registra quién adoptó qué mascota y controla que una mascota no pueda ser adoptada más de una vez.  
- **Gestión de Usuarios:** Permite consultar, crear y actualizar la información de los usuarios.  
- **Gestión de Mascotas:** Permite registrar mascotas, consultarlas y marcar si están adoptadas.  
- **Validaciones:** Previene errores como intentar adoptar una mascota ya adoptada.  
- **Base de Datos:** Se utiliza MongoDB para almacenar toda la información.  
- **Pruebas Automatizadas:** Pruebas implementadas para garantizar la estabilidad y funcionalidad de las rutas.  

## Requisitos

- **Node.js** (v16 o superior).  
- **MongoDB** instalado localmente o acceso a una base de datos remota.  
- Administrador de dependencias `npm` 

## Configuración e Instalación

1. **Clona el repositorio**:

   git clone https://github.com/tu-usuario/sistema-adopciones.git
   cd sistema-adopciones

2. **Instala las dependencias**:

npm install

3. **Configura las variables de entorno**:
Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/adopciones
PORT=3000

4. **Ejecuta el servidor**:
npm start
El servidor estará disponible en http://localhost:8080.

5. **Pruebas automáticas**: Ejecuta el siguiente comando para correr las pruebas:

npm test

**Link a DockerHub**:
https://hub.docker.com/r/bebrasa/proyectocoderiii