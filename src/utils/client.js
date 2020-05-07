function client(endpoint, customConfig) {
  const config = {
    method: 'GET',
    ...customConfig
  }

  return window.fetch(endpoint, config)
    .then(response => response.json())
}

export default client