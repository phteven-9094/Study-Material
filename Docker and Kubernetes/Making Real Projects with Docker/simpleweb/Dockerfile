#Specify base image
#The alpine tag means it's the most stripped down version of the image
FROM node:14-alpine

#Specify working directory in container
#Any following command will be executed relative to this path in the container
WORKDIR /usr/app

#Specify where to copy from the current working directory (first arg) and where to put it in the container (2nd arg)
COPY ./package.json ./

#Install some dependencies
#In this case, they are specified in the package.json file
RUN npm install

#Note: In rebuilds, the npm install command will only run if anything above it has changed
COPY ./ ./

#Default command
#In this case, it's simply starting the app in the simpleweb folder
CMD ["npm", "start"]

