const remoteAdress = 'http://localhost:8090/'

export async function fetchHandler(api, options) {
  let queryString = ''
  Object.keys(options).forEach(key => {
    queryString += `${key}=${encodeURIComponent(options[key])}&`
  });
  queryString = queryString.substr(0, queryString.length - 1)
  try {
    let response = await fetch(`${remoteAdress}${api}?${queryString}`)

    let result = await response.json()

    if (result.message === 'OK' && result.data) {
      return result.data
    }
  } catch (e) {
    console.error(e)
  }
}

