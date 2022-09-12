import axios from 'axios'

export async function fetchMovies() {
  try {
    const res = await axios.get('https://floating-sierra-20135.herokuapp.com/api/movies')
    return res.data
  } catch (e) {
    throw new Error(e.message)
  }
}

export async function getMovie(id) {
  try {
    const res = await axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${id}`)
    return res.data
  } catch (e) {
    throw new Error(e.message)
  }
}
