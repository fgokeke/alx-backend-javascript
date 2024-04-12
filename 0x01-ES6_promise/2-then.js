function handleResponseFromAPI(promise) {
  const responseBody = { status: 200, body: 'success' };

  return promise
    .then(() => responseBody)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
