/* eslint-disable no-process-env */
import dotenv from 'dotenv-safe';
import server from '@src/server/server';

dotenv.config();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server Running on PORT:${PORT}`);
});
