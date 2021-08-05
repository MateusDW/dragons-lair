import { http } from '../api'

const instance = http

export function useRequest(path) {
  function buildUrl(url) {
    return url ? `${path}/${url}` : path
  }

  async function callApi({ url, data, ...config }) {
    config.url = buildUrl(url)
    config.data = data

    try {
      const result = await instance.request(config)
      return result.data
    } catch (error) {
      return null
    }
  }

  return {
    get: async (url, config = {}) =>
      await callApi({ method: 'GET', url, ...config }),
    del: async (url, config = {}) =>
      await callApi({ method: 'DELETE', url, ...config }),
    put: async (url, data, config = {}) =>
      await callApi({ method: 'PUT', url, data, ...config }),
    post: async (url, data, config = {}) =>
      await callApi({ method: 'POST', url, data, ...config }),
  }
}
