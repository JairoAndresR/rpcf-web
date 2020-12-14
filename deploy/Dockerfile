

# 2. Deploy our Angular app to NGINX
FROM nginx:alpine
RUN apk add bash

## Replace the default .nginx index page with our Angular app
RUN rm -rf /usr/share/nginx/html/*
COPY  rpcf-web /usr/share/nginx/html
COPY .nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]
