import * as admin from 'firebase-admin';
import User from '@src/models/users';

admin.initializeApp({
  credential: admin.credential.cert(
    '/home/cwilso21/Projects/image-mrkt/server/.FIRESTORE_SERVICE_KEY.json',
  ),
});

const Firestore = admin.firestore();

const settings = {timestampsInSnapshots: true};

Firestore.settings(settings);

export const sendUserDataToFirestore = async (data: User) => {
  await Firestore.collection('Users').add(data);
};

export const getFirestoreData = async () => {
  const res = await Firestore.collection('testCollection').doc('TestDoc').get();
  console.log(res.data());
};

export default Firestore;
