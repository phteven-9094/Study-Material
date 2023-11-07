FROM node:alpine as builder
# We need a specific version of Node to avoid bugs
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# The above put together the Build phase

#For the Run phase:
FROM nginx 
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html 
# We got the /usr/share/nginx/html directory from the Nginx repo on Dockerhub
