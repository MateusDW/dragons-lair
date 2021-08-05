import { useRequest } from './use-request'

export function useDragonsAPI() {
  const { get, post, put, del } = useRequest('')

  async function getDragons() {
    return await get('')
  }

  async function getDragonDetail(id) {
    return await get(id)
  }

  async function createDragon({ name, type }) {
    return await post('', { name, type })
  }

  async function editDragon(id, { name, type }) {
    return await put(id, { name, type })
  }

  async function deleteDragon(id) {
    return await del(id)
  }

  return {
    getDragons,
    getDragonDetail,
    createDragon,
    editDragon,
    deleteDragon,
  }
}
