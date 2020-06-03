export const drupalPostWebform = (values) => {
  //  getDrupalToken();
  const path = 'http://wine8.esboceto.net/webform_rest/submit?_format=json';
  // POST request using fetch with error handling
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });
  const payload = {
    ...values,
    webform_id: 'nomination',
  };
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify( payload )
  };

  return fetchData(path, requestOptions);
}

const fetchData = async (path, requestOptions) => {
  try {
    const response = await fetch(path, requestOptions);
    const data =  await response.json();

    // check for error response
    if (!response.ok) {
     return response.status;
    }
    return data;
  } catch (error) {
      return error;
  }

}