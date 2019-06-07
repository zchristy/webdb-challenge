const express = require('express');

const projectRouter = require('./router/projects-router.js');
const actionRouter = require('./router/actions-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)


const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
