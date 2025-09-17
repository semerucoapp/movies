GUIA DE APLICATIVO

git clone https://github.com/semerucoapp/movies.git
cd movies

Iniciar el servidor de desarrollo
npm install
npm start

Compilar el proyecto para producción
npm run build
/****************************************/

angular 19 standalone 
Configuración de routes en carpeta app/app.routes.ts

Configuración de environment para http themoviedb en carpeta src/environment/environment.ts

Configuración del core para infrastructure,mappers,services,interfaces en carpeta src/app/core

Configuración de presentation para los componentes y hooks injectQuery, tanstack para el manejo de cache y apis en carpeta src/app/presentation

Configuración De Fuentes en carpeta src/styles.scss

Y configuración de primeng en en carpeta src/main.ts

/****************************************************/
uso de librerias externas 
"@tanstack/angular-query-experimental": "^5.89.0",
"primeng": "^19.1.4",

las vistas las puedes encontrar en src/app/screens
las apis las puedes encontrar en src/app/core/movies/services
los hook las puedes encontrar en src/app/presentation//hooks

si requieres mayor informacion puedes consultar estas documentaciones 
https://tanstack.com/query/v5/docs/framework/angular/community/angular-query

https://v19.primeng.org/