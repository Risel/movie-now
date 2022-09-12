import {createStore} from "vuex";
import {fetchMovies} from "@/helpers/requests";

export const store = createStore({
  state() {
    return {
      movieList: [],
      error: '',
      isLoading: true
    };
  },
  getters: {
      getMovies: state => state.movieList,
      getMovieById: state => id => state.movieList.find(({id: movieId}) => movieId === id)
  },
    mutations: {
      setMovieList(state,payload) {
        state.movieList = payload
      },
      setSingleMovie(state,payload) {
        state.movie = payload
      },
      setError(state,payload) {
        state.error = payload
      },
      setLoading(state,payload){
        state.isLoading = payload
      }
    },
    actions: {
      async loadMovies(context) {
        context.commit('setLoading', true)
        await fetchMovies()
          .then((res)=>{
          context.commit('setError','')
          context.commit('setMovieList',res.data)
          context.commit('setLoading',false)
        })
          .catch((e)=>{
            context.commit('setLoading',false)
            context.commit('setError',e)
          })
      }
    }
})