import Firestore, {
  getFirestoreData,
  sendUserDataToFirestore,
} from '@src/middleware/firestore';
import server from '@src/server/server';
// import User from '@src/models/users';

const collectionRef = Firestore.collection('Users');
const PORT = 5000;

server.listen(PORT, () => {
  try {
    console.log(`Server running on PORT:${PORT}`);
    sendUserDataToFirestore({username: 'Cwils021'}).then(() =>
      getFirestoreData('Users'),
    );
  } catch (error) {
    console.log(error);
  }
});
