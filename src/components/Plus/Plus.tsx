import React  from 'react'
import { useDispatch } from 'react-redux'
import {addNewCard} from '../../store/actions/cardsActions'
import './plus.scss'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const Plus: React.FC = () => {
  const cards = useTypedSelector(state => state.cards.cards)
  const dispatch = useDispatch()
  const cls = new Set(['add'])

  cards.forEach(card => {
    if (card.title.trim() === '') {
      cls.add('disabled')
    }
  })

  return (
    <div className={Array.from(cls).join(' ')} onClick={() => dispatch(addNewCard())} title="Добавить карточку">
      <div className='add__plus'>
        <svg viewBox="0 0 448 448"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"></path></svg>
      </div>
    </div>
  )
}

export default Plus