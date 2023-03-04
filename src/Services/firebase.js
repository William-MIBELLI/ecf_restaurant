import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, query, getDocs, collection, updateDoc } from 'firebase/firestore'

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
  console.log('on rentre dans updateUserInfo, uid : ',)
  const userRef = doc(db, 'users', uid)
  const response = await updateDoc(userRef, {
    firstName: firstName,
    lastName: lastName,
    phone: phone
  })
  console.log('response de update : ', response)
}

export const signInWithMail = async (email, password) => {
  console.log('sign in dans firebase')
  if(email === '' || password === ''){
    return
  }

  return signInWithEmailAndPassword(auth, email, password)
}

export const createUserWithMail = async (email, password) => {
  console.log('creation dans firebase')
  if(email === '' || password === ''){
    return
  }

  return createUserWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => signOut(auth)

export const authStateListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}