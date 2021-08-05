import { useEffect, useState } from 'react'

import { Button } from '../../components'

import { DRAGON_REGISTER_ROUTE } from '../../constants'

import { useDragonsAPI } from '../../hooks'

import { DragonCard } from './dragon-card/dragon-card'

import './dragons-lair.css'

export function DragonsLair() {
  const [dragons, setDragons] = useState()

  const { getDragons } = useDragonsAPI()

  async function updateDragons() {
    const result = await getDragons()

    if (result) {
      setDragons(result)
    }
  }

  useEffect(() => {
    updateDragons()
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  function renderList() {
    return dragons
      ? dragons
          .sort((dragonA, dragonB) => (dragonA.name > dragonB.name ? 1 : -1))
          .map((dragon, key) => (
            <DragonCard key={key} dragon={dragon} updateList={updateDragons} />
          ))
      : null
  }

  return (
    <div className="container dragons-lair">
      <div className="dragons-lair__button">
        <Button to={DRAGON_REGISTER_ROUTE()}>Registrar novo dragão</Button>
      </div>
      {renderList()}
    </div>
  )
}
