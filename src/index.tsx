import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import firebase from 'firebase/app'
import App from './App'
import {store} from './store/configureStore'

const firebaseConfig = {
  apiKey: "AIzaSyBljvy-qld1hNxMrGMf8Ysk2qelsJYUX2Y",
  authDomain: "db--test.firebaseapp.com",
  projectId: "db--test",
  storageBucket: "db--test.appspot.com",
  messagingSenderId: "570204101429",
  appId: "1:570204101429:web:fdb4fde21dd0a2cfe1ca7c"
};

firebase.initializeApp(firebaseConfig);

// console.log(firebase)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)