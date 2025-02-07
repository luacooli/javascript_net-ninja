import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmJbJVW5k1GpWURHDGv9_d-K7NFIui4hE",
  authDomain: "dojo---net-ninja.firebaseapp.com",
  projectId: "dojo---net-ninja",
  storageBucket: "dojo---net-ninja.firebasestorage.app",
  messagingSenderId: "706228733519",
  appId: "1:706228733519:web:bc60a9eacbe6df4f3d4c3a"
}
// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })