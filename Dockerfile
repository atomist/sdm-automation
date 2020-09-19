# Set up build
FROM node:8 AS build

WORKDIR /usr/src

COPY . ./

RUN npm ci --no-optional && \
    npm version $(npx -c 'echo $npm_package_version')-$(git rev-parse HEAD) --no-git-tag-version && \
    npm run compile && \
    rm -rf node_modules .git

# Set up runtime container
FROM atomist/sdm-base:0.2.1

RUN apt-get update && apt-get install -y \
        build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./

RUN npm ci --no-optional \
    && npm cache clean --force

COPY --from=build /usr/src/ .
