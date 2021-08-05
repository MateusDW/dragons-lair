import { ReactComponent as Edit } from '../../../assets/icons/edit.svg'
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg'
import { ReactComponent as Info } from '../../../assets/icons/info.svg'

import { ActionButton } from '../../../components'

import { DRAGON_DETAIL_ROUTE } from '../../../constants'

import { useDragonsAPI, useSliderModal } from '../../../hooks'

import { EditDragonForm } from '../edit-dragon-form/edit-dragon-form'

import './dragon-card.css'

export function DragonCard({ dragon, updateList }) {
  const { showSliderModal } = useSliderModal()
  const { deleteDragon } = useDragonsAPI()

  function onClickEdit() {
    showSliderModal({
      content: <EditDragonForm dragon={dragon} updateList={updateList} />,
    })
  }

  async function onClickDelete() {
    const result = await deleteDragon(dragon.id)

    if (result) {
      updateList()
    }
  }

  return (
    <div className="dragon-card">
      <div className="dragon-card__name">🐲 {dragon.name}</div>
      <div className="dragon-card__actions">
        <ActionButton onClick={onClickEdit} icon={<Edit />} />
        <ActionButton onClick={onClickDelete} icon={<Delete />} />
        <ActionButton to={DRAGON_DETAIL_ROUTE(dragon.id)} icon={<Info />} />
      </div>
    </div>
  )
}
