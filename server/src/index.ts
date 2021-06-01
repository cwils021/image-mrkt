/* eslint-disable no-process-env */
import dotenv from 'dotenv-safe';
import mongoose from 'mongoose';
import server from '@src/server/server';

dotenv.config();

const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(String(process.env.TEST_DB), {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() =>
server.listen(5000, () => {
  console.log(`Server Running on PORT:5000`);
});
//   }),
// )
// .catch((err) => console.log(`${err} DB not connected`));
