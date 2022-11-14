
FROM node:16.17

COPY package.json package-lock.json ./

RUN npm install --force && mkdir /liveme_admin && mv ./node_modules ./liveme_admin

WORKDIR /liveme_admin

COPY . .

RUN npm run build

EXPOSE 4000
CMD ["npm","run", "start"]