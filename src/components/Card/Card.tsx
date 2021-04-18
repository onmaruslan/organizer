import React, {useState, useEffect, useRef} from 'react'
import './card.scss'
import CardList from '../CardList/CardList'
import { useDispatch } from 'react-redux'
import {
  addTodo,
  changePositionCardDispatch,
  removeCardDispatch,
  setTitleCard
} from '../../store/actions/cardsActions'
import { ICard } from '../../store/types/cardsTypes'
import { updateCardDB } from '../../functions'
import { useDebounce } from '../../hooks/useDebounce'


interface Props {
  cardDB: ICard
}

const Card: React.FC<Props> = ({cardDB}) => {
  const [styles, setStyles] = useState({})
  const debouncedUpdateCard = useDebounce(cardDB, 500);
  const dispatch = useDispatch()

  const $card = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // отключаем стандартный drag
    if ($card) $card.current!.ondragstart = () => false
  },[])

  useEffect(() => {
    // Добавил немного анимации при обновлении страницы
    setStyles({ transform: `translate(${cardDB.position.x}vw,${cardDB.position.y}vw)`, opacity: 1 })
  },[cardDB.position])

  // При любом изменении карточки срабатывает debounce и если больше задержек не будет, обновляем на сервере
  useEffect(() => {
    updateCardDB(cardDB)
  },[debouncedUpdateCard]);

  return (
    <div ref={$card}
         style={styles}
         className="card">
      <div className='card__title'>
        <input type='text'
               onChange={(e) => dispatch(setTitleCard(cardDB.id, e.target.value))}
               value={cardDB.title}
               maxLength={21}
               placeholder="Введи название корточки"/>
        <div className='card__position'
             onMouseDown={(e) => dispatch(changePositionCardDispatch(e, $card.current, cardDB.id))}
             title="Изменить расположение карточки">
          <svg viewBox="0 0 384.97 384.97">
            <path d="M12.03 84.212h360.909c6.641 0 12.03-5.39 12.03-12.03a12.04 12.04 0 0 0-12.03-12.03H12.03C5.39 60.152 0 65.541 0 72.182s5.39 12.03 12.03 12.03zm360.909 96.243H12.03c-6.641 0-12.03 5.39-12.03 12.03a12.04 12.04 0 0 0 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zm0 120.303H12.03c-6.641 0-12.03 5.39-12.03 12.03a12.04 12.04 0 0 0 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03z"/>
          </svg>
        </div>
        <div className="card__add"
             onClick={() => dispatch(addTodo(cardDB.id))}
             title="Добавить задачу">
          <svg viewBox="0 0 448 448">
            <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"></path>
          </svg>
        </div>
        <div className="card__delete"
             onClick={() => dispatch(removeCardDispatch(cardDB.id))}
             title="Удалить всю карточку">
          <svg viewBox="0 0 240 240">
            <path d="M120 240c66.168 0 120-53.831 120-120S186.168 0 120 0 0 53.832 0 120s53.832 120 120 120zm0-210c49.626 0 90 40.374 90 90s-40.374 90-90 90-90-40.374-90-90 40.374-90 90-90zM69.144 149.644L98.787 120 69.144 90.356l21.213-21.213L120 98.787l29.644-29.644 21.213 21.213L141.213 120l29.643 29.644-21.213 21.213L120 141.213l-29.644 29.643-21.212-21.212z"/>
          </svg>
        </div>
      </div>

      <CardList idCard={cardDB.id}/>

    </div>
  )
}

export default Card