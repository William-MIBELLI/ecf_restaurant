import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, query, getDocs, collection, updateDoc, writeBatch, deleteDoc, where } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAAsTpNvOUZyDe8Ip61RWDoAS7pVD1_YWk",
  authDomain: "ecf-restaurant.firebaseapp.com",
  projectId: "ecf-restaurant",
  storageBucket: "ecf-restaurant.appspot.com",
  messagingSenderId: "293145161886",
  appId: "1:293145161886:web:b18158a19c1119b3978b8f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(app)

export const createUserDoc = async (user, userInfos = {}) => {
  const userRef = doc(db, 'users', user.uid)
  const userSnapShot = await getDoc(userRef)
  if(!userSnapShot.exists()){
    try{
      return await setDoc(userRef,{...userInfos, uid: user.uid})
    } catch (error){
      throw new error(error)
    }
  }
}

export const getUserInfo = async (uid) => {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)

  if(userSnap.exists()){
    return userSnap.data()
  }

  return false
}

export const updateUserInfo = async (uid, updatedUser) =>{
  const { firstName, lastName, phone } = updatedUser
  const userRef = doc(db, 'users', uid)
  await updateDoc(userRef, {
    firstName: firstName,
    lastName: lastName,
    phone: phone
  })
}

export const signInWithMail = async (email, password) => {
  if(email === '' || password === ''){
    return
  }

  return signInWithEmailAndPassword(auth, email, password)
}

export const createUserWithMail = async (email, password) => {

  if(email === '' || password === ''){
    return
  }
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => signOut(auth)

export const authStateListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}

export const pushData = async (collectionName, dataToPush = []) => {

  const collectionRef = collection(db, collectionName)
  const batch = writeBatch(db)

  dataToPush.forEach(item => {
    const docRef = doc(collectionRef, item.id.toString())
    batch.set(docRef, {...item})
  })

  const response = await batch.commit()
  return response
}

export const confirmResevationOnDb = async (reservationId) => {
  const docRef = doc(db, 'reservations', reservationId.toString())
  await updateDoc(docRef,{
    isConfirmed: true
  })
}

export const addReservationOnDb = async (reservationToAdd, id) => {
  const docRef = doc(db,'reservations', id.toString())
  await setDoc(docRef,reservationToAdd)

}

export const cancelReservationOnDb = async (id) => {
  const docRef = doc(db, 'reservations', id.toString())
  await deleteDoc(docRef)
}

export const getdataFromDb = async (collectionName) => {

  const querySnapShot = await getDocs(collection(db, collectionName))
  const response = []

  querySnapShot.forEach(doc => {
    response.push(doc.data())
  })

  return response
}

export const getPlaceLeftFromDb = async (date, service) => {

  const q = query(collection(db, 'reservations'),where('date', '==', date),where('service','==', service))
  const querySnapShot = await getDocs(q)
  const resp = []

  querySnapShot.forEach(item => {
    resp.push(item.data())
  })

  const placeLeft = resp.reduce((total, current) => Number(total) + Number(current.number),0)

  return 50 - placeLeft
}

export const deleteDataFromDb = async (collectionName, docToDelete) => {

  const docRef = doc(db,collectionName, docToDelete.toString())

  const response = await deleteDoc(docRef) 
  return response
}

export const updateDataFromDb = async (collectionName, docToUpdate, id) => {
  const docRef = doc(db, collectionName, id.toString())
  await updateDoc(docRef,{...docToUpdate})
  .then(response => console.log(response))
  .catch(error => console.log(error))

}



