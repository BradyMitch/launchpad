const c = require("./colors");

/**
 * @command init
 * @description Initializes the project files.
 */
exports.INIT = [
  `echo ${c.Yellow}[INIT] ${c.Cyan}Initializing project files...${c.Reset}`,
  `echo \n${c.Cyan}Creating files from templates...${c.Reset}`,
  "node scripts/templates",
  `echo \n${c.Cyan}Installing frontend packages...${c.Reset}`,
  "cd frontend",
  "npm i",
  `echo \n${c.Cyan}Installing backend packages...${c.Reset}`,
  "cd ../backend",
  "npm i",
  `echo \n${c.Cyan}Get Started Coding!${c.Reset}`,
  `echo \n${c.Yellow}Use ${c.White}npm run help ${c.Yellow}for a list of commands.${c.Reset}`,
  `echo ${c.Aqua}Use ${c.White}npm run up ${c.Aqua}to start the servers.${c.Reset}`,
];

/**
 * @command up
 * @description Starts docker containers.
 */
exports.DOCKER_UP = [
  `echo ${c.Yellow}[UP] ${c.Cyan}Starting containers...${c.Reset}`,
  "docker compose up -d",
];

/**
 * @command down
 * @description Stops docker containers.
 */
exports.DOCKER_DOWN = [
  `echo ${c.Yellow}[DOWN] ${c.Cyan}Stopping containers...${c.Reset}`,
  "docker compose down",
];

/**
 * @command prune
 * @description Stops and removes docker containers, images and volumes.
 */
exports.DOCKER_PRUNE = [
  `echo ${c.Yellow}[PRUNE] ${c.Cyan}Stopping and removing docker containers, images and volumes...${c.Reset}`,
  "docker compose down --rmi all --volumes",
];

/**
 * @command toggle-dev
 * @description Toggles local development/production modes.
 */
exports.TOGGLE_DEV = [
  `echo ${c.Yellow}[TOGGLE-DEV] ${c.Cyan}Toggling local dev/prod mode...${c.Reset}`,
  "node scripts/toggleDevelopmentMode",
  `echo \n${c.Cyan}Rebuilding frontend and backend...${c.Reset}`,
  "docker stop frontend",
  "docker stop backend",
  "docker rm frontend",
  "docker rm backend",
  "docker rmi react-express-postgres-frontend",
  "docker rmi react-express-postgres-backend",
  "docker compose up -d frontend backend",
];

/**
 * @command npm-refresh
 * @description Removes existing node_modules and reinstalls packages.
 */
exports.NPM_REFRESH = [
  `echo ${c.Yellow}[NPM-REFRESH] ${c.Cyan}Reinstalling packages...${c.Reset}`,
  `echo \n${c.Cyan}Frontend...${c.Reset}`,
  "cd frontend",
  "rm -rf node_modules",
  "npm i",
  `echo \n${c.Cyan}Backend...${c.Reset}`,
  "cd ../backend",
  "rm -rf node_modules",
  "npm i",
];

/**
 * @command npm-refresh:f
 * @description Removes existing frontend node_modules and reinstalls packages.
 */
exports.NPM_REFRESH_FRONTEND = [
  `echo ${c.Yellow}[NPM-REFRESH] ${c.Cyan}Reinstalling frontend packages...${c.Reset}`,
  "cd frontend",
  "rm -rf node_modules",
  "npm i",
];

/**
 * @command npm-refresh:b
 * @description Removes existing backend node_modules and reinstalls packages.
 */
exports.NPM_REFRESH_BACKEND = [
  `echo ${c.Yellow}[NPM-REFRESH] ${c.Cyan}Reinstalling backend packages...${c.Reset}`,
  "cd backend",
  "rm -rf node_modules",
  "npm i",
];

/**
 * @command rebuild
 * @description Removes frontend and backend containers and images and re-creates them.
 */
exports.REBUILD = [
  `echo ${c.Yellow}[REBUILD] ${c.Cyan}Rebuilding frontend and backend...${c.Reset}`,
  "docker stop frontend",
  "docker stop backend",
  "docker rm frontend",
  "docker rm backend",
  "docker rmi react-express-postgres-frontend",
  "docker rmi react-express-postgres-backend",
  "docker compose up -d frontend backend",
];

/**
 * @command rebuild:f
 * @description Removes frontend container and image and re-creates them.
 */
exports.REBUILD_FRONTEND = [
  `echo ${c.Yellow}[REBUILD] ${c.Cyan}Rebuilding frontend...${c.Reset}`,
  "docker stop frontend",
  "docker rm frontend",
  "docker rmi react-express-postgres-frontend",
  "docker compose up -d frontend",
];

/**
 * @command rebuild:b
 * @description Removes backend container and image and re-creates them.
 */
exports.REBUILD_BACKEND = [
  `echo ${c.Yellow}[REBUILD] ${c.Cyan}Rebuilding backend...${c.Reset}`,
  "docker stop backend",
  "docker rm backend",
  "docker rmi react-express-postgres-backend",
  "docker compose up -d backend",
];
