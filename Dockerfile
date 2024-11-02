# Usa la imagen de Node.js
FROM node:18

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json de shell
COPY shell/package*.json ./shell/
# Copia los archivos de package.json y package-lock.json de sales
COPY sales/package*.json ./sales/
# Copia los archivos de package.json y package-lock.json de users
COPY users/package*.json ./users/

# Instala las dependencias
RUN npm install --prefix ./shell
RUN npm install --prefix ./sales
RUN npm install --prefix ./users

# Copia el resto de los archivos de la aplicación
COPY shell ./shell
COPY sales ./sales
COPY users ./users

# Compila la aplicación para producción
RUN npm run build --prefix ./shell
RUN npm run build --prefix ./sales
RUN npm run build --prefix ./users

# Expone el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start", "--prefix", "./shell"]
