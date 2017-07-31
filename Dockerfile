FROM node:boron

#Diretorio que o apicativo vai rodar
WORKDIR /usr/src/app

#Copia o arquivo de dependencias pro workdir
COPY . .

#Instala os paranaue
RUN npm install

#Abre a porta 8080
EXPOSE 3000

#Roda o comando de start do package.json
CMD [ "npm", "start" ]
