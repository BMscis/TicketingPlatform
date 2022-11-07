#ARG        RUNNER_VERSION

# hadolint ignore=DL3006
FROM reachsh/runner:0.1.12

# FROM public.ecr.aws/bitnami/node:14.15.3-prod-debian-10-r15

FROM node:alpine

COPY package.json .

COPY package-lock.json .

RUN npm install

RUN apt install curl make
# RUN npm link @reach-sh/stdlib

COPY . /app

ENV REACH_CONNECTOR_MODE=ALGO

ENV REACH_RPC_KEY=opensesame

ENV REACH_ALLOW_SU="1"

ENV REACH_RPC_TLS_KEY="reach-server.key"

ENV REACH_RPC_TLS_CRT="reach-server.crt"

ENV REACH_RPC_TLS_REJECT_UNVERIFIED=0

ENV REACH_RPC_PORT=3000

ENV REACH_RPC_TLS_PASSPHRASE=rpc-demo

ENTRYPOINT ["npm", "run", "--"]

CMD        ["app"]

WORKDIR /app

EXPOSE     3000