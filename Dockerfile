FROM node:erbium-buster
MAINTAINER XD(dxd.spirits@gmail.com)

RUN mkdir /workspace/ -p
COPY . /workspace/
WORKDIR /workspace/

RUN npm install
# RUN API_URL_BROWSER=/ npm run build
RUN npm run build

CMD HOST=0.0.0.0 PORT=8080 npm start
