import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import dayjs from 'dayjs'

import { Button } from '../../components'

import { DRAGONS_ROUTE } from '../../constants'

import { useDragonsAPI } from '../../hooks/'

import './dragon-lair.css'

export function DragonLair() {
  const { dragonId } = useParams()

  const { getDragonDetail } = useDragonsAPI()

  const [dragon, setDragon] = useState()

  useEffect(() => {
    async function init() {
      const result = await getDragonDetail(dragonId)

      if (result) {
        setDragon(result)
      }
    }

    init()
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  function renderDetail() {
    const creationDate = dayjs(dragon.createdAt).format('DD/MM/YYYY')

    return (
      <div className="container dragon-lair">
        <div className="dragon-lair__detail">
          <h1 className="dragon-lair__name">{dragon.name}</h1>
          <p className="dragon-lair__info">
            É do tipo <span className="dragon-lair__type">{dragon.type}</span> e
            foi criado em{' '}
            <span className="dragon-lair__creation-date">{creationDate}</span>.
          </p>
          <Button to={DRAGONS_ROUTE()}>Voltar</Button>
        </div>
      </div>
    )
  }

  return dragon ? renderDetail() : null
}
