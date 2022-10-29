function sendPhoto({ formData, id }) {
  const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/didiblsne/image/upload`
  const CLOUDINARY_UPLOAD_PRESET = 'pqq4ikys';

  formData.set('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  return fetch(CLOUDINARY_URL, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(async response => {
      // console.log(response)
      const url = response.url
      nuan(url, id)
      return url
    })
}

export default sendPhoto

async function nuan(url,id ) {
  const API = `https://api-login-heroku.herokuapp.com/updatePhoto/${id}`
  // const API = `http://localhost:4000/updatePhoto/${id}`
  fetch(API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: url })
  })
    .then(res => res.json())
    .then(response => {
      localStorage.setItem("usuarioActual", JSON.stringify(response.data))
    })
}