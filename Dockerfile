FROM node:16.17 as dependencies
WORKDIR /liveme_admin
COPY package.json package-lock.json ./
RUN npm install --force --frozen-lockfile

FROM node:16.17 as builder
WORKDIR /liveme_admin
COPY . .
COPY --from=dependencies /liveme_admin/node_modules ./node_modules
RUN npm run build

FROM node:16.17 as runner
WORKDIR /liveme_admin
ENV NODE_ENV production

COPY --from=builder /liveme_admin/public ./public
COPY --from=builder /liveme_admin/package.json ./package.json
COPY --from=builder /liveme_admin/build ./build
COPY --from=builder /liveme_admin/node_modules ./node_modules

EXPOSE 3000
CMD ["npm","run", "start"]