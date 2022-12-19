FROM node:19 as node
WORKDIR /app
COPY . /app
RUN npm ci
RUN npm run build

FROM gatsbyjs/gatsby:onbuild as build
FROM gatsbyjs/gatsby
COPY --from=node /app/public /pub