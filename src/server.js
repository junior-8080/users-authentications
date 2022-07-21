import app from './app.js';
import logger from './logs/logger.js';
const PORT = process.env.PORT;

app.listen(PORT,()=> {logger.info(`app running on port : ${PORT}`)});
