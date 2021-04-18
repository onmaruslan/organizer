import React from 'react'
import {ITodo} from '../../store/types/cardsTypes'
import CardItem from './CardItem'
import {List, arrayMove, arrayRemove } from 'react-movable'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useDispatch} from 'react-redux'
import {setNewTodosAction} from '../../store/actions/cardsActions'

interface Props {
  idCard: number
}

const CardList: React.FC<Props> = ({idCard}) => {
  const dispatch = useDispatch()
  const todos: ITodo[] = useTypedSelector(state => state.cards.cards.filter(card => card.id === idCard))[0].todos

  return (
    <List
      values={todos}
      removableByMove
      onChange={({oldIndex, newIndex}) => {
        (newIndex === -1)
          ? dispatch(setNewTodosAction(idCard, arrayRemove(todos, oldIndex)))
          : dispatch(setNewTodosAction(idCard, arrayMove(todos, oldIndex, newIndex)))
      }}
      renderList={({children, props}) => <ul {...props}>{children}</ul>}
      renderItem={({
                     value,
                     props,
                     isSelected,
                     isDragged,
                     isOutOfBounds}) => (
        <li {...props}
            style={{
              ...props.style,
              background: isOutOfBounds ? '#FC4B50' : '#0E1127',
              zIndex: isDragged || isSelected ? 9 : 'auto',
              animationName: isDragged || isSelected ? 'none' : 'card-item',
              opacity: isDragged ? 0.8 : 1,
            }}
            className="card__item">
          {value && <CardItem cardID={idCard} todoDB={value}/>}
        </li>
      )}
    />
  )
}

export default CardList