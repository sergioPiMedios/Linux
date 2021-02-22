FROM node:13.7-alpine as base

FROM base as dependencies
WORKDIR /dependencies
COPY ["package.json", "package-lock.json","tsconfig.json", "./"]
RUN npm install --prod

FROM base as builder
WORKDIR /build
COPY ["package.json", "package-lock.json","tsconfig.json", "./"]
COPY ["./src", "./src"]
RUN npm i typescript -g 
RUN npm install 
RUN tsc --build tsconfig.json

FROM base as final
WORKDIR /usr/app
COPY ./oas3.yaml .
COPY --from=dependencies /dependencies .
COPY --from=builder /build/dist/src .
CMD [ "npm","run","start" ]
