import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCaZNh9F8GazuODPYI5Ag6hS_kH11w2JSw',
    authDomain: 'vue-auth-01-9673f.firebaseapp.com',
    projectId: 'vue-auth-01-9673f',
    storageBucket: 'vue-auth-01-9673f.appspot.com',
    messagingSenderId: '954650364367',
    appId: '1:954650364367:web:45a55d2836660d3f83eaba',
    measurementId: 'G-R0DLV11PX2'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }