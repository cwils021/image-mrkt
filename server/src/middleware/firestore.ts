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

export const sendUserDataToFirestore = async (data: User): Promise<void> => {
  try {
    await Firestore.collection('Users').add(data);
    console.log('data sent to DB');
  } catch (error) {
    console.log(error);
  }
};

export const getFirestoreData = async (): Promise<void> => {
  try {
    const res = await Firestore.collection('testCollection')
      .doc('TestDoc')
      .get();
    console.log(res.data());
  } catch (error) {
    console.log(error);
  }
};

export default Firestore;
