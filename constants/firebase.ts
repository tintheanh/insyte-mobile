import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import authentication, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import func from '@react-native-firebase/functions';
import database, {
  FirebaseDatabaseTypes,
} from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import { GeoFirestore } from 'geofirestore';

const FS = firestore();
const DB = database();
const auth = authentication();
const functions = func();
const fireStorage = storage();
const geofirestore = new GeoFirestore(
  (firestore() as unknown) as FirebaseFirestore.Firestore,
);
const GeoPoint = firestore.GeoPoint;

export {
  FS,
  DB,
  auth,
  functions,
  fireStorage,
  FirebaseAuthTypes,
  FirebaseFirestoreTypes,
  FirebaseDatabaseTypes,
  FirebaseMessagingTypes,
  messaging,
  geofirestore,
  GeoPoint,
};
