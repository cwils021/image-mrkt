import Firestore, {
  getFirestoreData,
  sendUserDataToFirestore,
} from '@src/middleware/firestore';
import server from '@src/server/server';
// import User from '@src/models/users';

const collectionRef = Firestore.collection('Users');
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
