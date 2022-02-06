# Prueba Angular

contiene un formulario que navega a una vista de bienvenida si se cumplen las condiciones

## Requerimientos

* [Docker](https://www.docker.com/)

## Configurar

Usando el archivo `Dockerfile`, genere una nueva imagen de docker:
```sh
	docker build -t angular .
```

Cree un contenedor con la imagen creada e ingrese en el mismo:

```sh
	docker run -dit --name pegasi -v "$PWD":/home/angular -w /home/angular -p 9222:9222 -u $(id -u ${USER}):$(id -g ${USER}) angular
	docker exec -it pegasi sh
```

Posteriormente, puede instalar las dependencias e iniciar el proyecto:

```sh
	npm i
	npm start
```

Una vez completado, puede ver el resultado desde `http://localhost:9222`.

