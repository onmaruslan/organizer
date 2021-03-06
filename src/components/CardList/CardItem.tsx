import React from 'react'
import {ITodo} from '../../store/types/cardsTypes'
import {useDispatch} from 'react-redux'
import {removeTodo, setTitleTodo} from '../../store/actions/cardsActions'

interface Props {
  todoDB: ITodo
  cardID: number

}

const CardItem: React.FC<Props> = ({todoDB, cardID}) => {
  const dispatch = useDispatch()


  return (
    <>
      <input type='text'
             onChange={(e) => dispatch(setTitleTodo(cardID, todoDB.id, e.target.value))}
             value={todoDB.title}
             placeholder="New task"/>
      <div className='card__item_shadow'></div>
      <div className='card__item_position'
           data-movable-handle={true}
           title="Change task priority">
        <svg viewBox="0 0 512 512">
          <path d="M31.9 125.9h73.8V52.2H31.9v73.7zm84.1 20.9H21.4c-5.8 0-10.4-4.7-10.4-10.4V41.7c0-5.8 4.7-10.4 10.4-10.4H116c5.8 0 10.4 4.7 10.4 10.4v94.6c.1 5.8-4.6 10.5-10.4 10.5zm374.6-47.3H166.1c-5.8 0-10.4-4.7-10.4-10.4 0-5.8 4.7-10.4 10.4-10.4h324.5c5.8 0 10.4 4.7 10.4 10.4s-4.7 10.4-10.4 10.4zM31.9 292.9h73.8v-73.8H31.9v73.8zm84.1 20.8H21.4c-5.8 0-10.4-4.7-10.4-10.4v-94.6c0-5.8 4.7-10.4 10.4-10.4H116c5.8 0 10.4 4.7 10.4 10.4v94.6c.1 5.8-4.6 10.4-10.4 10.4zm374.6-47.3H166.1c-5.8 0-10.4-4.7-10.4-10.4 0-5.8 4.7-10.4 10.4-10.4h324.5c5.8 0 10.4 4.7 10.4 10.4 0 5.8-4.7 10.4-10.4 10.4zM31.9 459.8h73.8V386H31.9v73.8zm84.1 20.9H21.4c-5.8 0-10.4-4.7-10.4-10.4v-94.6c0-5.8 4.7-10.4 10.4-10.4H116c5.8 0 10.4 4.7 10.4 10.4v94.6c.1 5.7-4.6 10.4-10.4 10.4zm374.6-47.3H166.1c-5.8 0-10.4-4.7-10.4-10.4s4.7-10.4 10.4-10.4h324.5c5.8 0 10.4 4.7 10.4 10.4s-4.7 10.4-10.4 10.4z"/>
        </svg>
      </div>

      <div className="card__item_delete"
           onClick={() => dispatch(removeTodo(cardID, todoDB.id))}
           title="Delete task">
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 240 240">
          <path d="M120 240c66.168 0 120-53.831 120-120S186.168 0 120 0 0 53.832 0 120s53.832 120 120 120zm0-210c49.626 0 90 40.374 90 90s-40.374 90-90 90-90-40.374-90-90 40.374-90 90-90zM69.144 149.644L98.787 120 69.144 90.356l21.213-21.213L120 98.787l29.644-29.644 21.213 21.213L141.213 120l29.643 29.644-21.213 21.213L120 141.213l-29.644 29.643-21.212-21.212z"/>
        </svg>
      </div>
    </>
  )
}

export default CardItem