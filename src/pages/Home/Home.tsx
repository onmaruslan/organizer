import React, { useEffect }  from 'react'
import Plus from '../../components/Plus/Plus'
import Logout from '../../components/Logout/Logout'
import Card from '../../components/Card/Card'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useDispatch} from 'react-redux'
import { updateCardsFromDB } from '../../store/actions/cardsActions'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const cards = useTypedSelector(state => state.cards.cards)
  useEffect(() => {
    dispatch(updateCardsFromDB())
  },[])
  return (
    <>
      <Logout/>
      <Plus/>
      {cards.map(card => <Card key={card.id} cardDB={card}/>)}
    </>
  )
}

export default Home