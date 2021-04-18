import { ICard} from './store/types/cardsTypes'
import firebase from 'firebase/app'
import 'firebase/firestore';

export function updateCardDB(card: ICard) {
  const userEmail = firebase.auth().currentUser?.email
  const db = firebase.firestore()
  if (userEmail) {
    const userCard = db.collection(userEmail).doc(String(card.id))
    try {
      userCard.set(card)
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  }
}
export function removeCardDB(idCard: number) {
  const userEmail = firebase.auth().currentUser?.email
  const db = firebase.firestore()
  if (userEmail) {
    try {
      db.collection(userEmail).doc(String(idCard)).delete()
    } catch (e) {
      console.error("Error removing card: ", e);
    }
  }
}

// export function updateCardsFromDB() {
//   const userEmail = firebase.auth().currentUser?.email
//   const db = firebase.firestore()
//
//   if (userEmail) {
//     // const userCards = db.collection(userEmail)
//     // userCards.get()
//     //   .then((data) => {
//     //     console.log(data)
//     //   })
//     //   .catch((error) => {
//     //     console.log("Error getting documents: ", error);
//     //   });
//     // console.log(userCards)
//
//     db.collection(userEmail).get().then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//
//         console.log(doc.id, " => ", doc.data());
//       });
//     });
//   }
// }