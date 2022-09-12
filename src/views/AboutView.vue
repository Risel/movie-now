<template>
  <div class='about-page'>
    <div class="about-page__back">
      <router-link to="/" class="about-page__link">
        <svg width="20" height="28" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.67 1.8701L9.9 0.100098L0 10.0001L9.9 19.9001L11.67 18.1301L3.54 10.0001L11.67 1.8701Z"
                fill="#FF5252" fill-opacity="0.98"/>
        </svg>
        <span>Назад к списку</span>
      </router-link>
      <hr>
    </div>
    <CustomLoader v-if="isLoading"/>
    <template v-else>
      <MovieCard v-if="movie" :movie="movie"/>
      <span v-else class="about-page__error">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import CustomLoader from "@/components/CustomLoader";
import MovieCard from "@/components/MovieCard";
import {getMovie} from "@/helpers/requests";

export default {
  name: 'AboutView',
  components: {MovieCard, CustomLoader},
  data() {
    return {
      movie: {}
    }
  },
  computed: {
    ...mapState(['isLoading', 'error'])
  },
  methods: {
    ...mapMutations([
      "setLoading",
      "setError"
    ]),
    getSingleMovie(id) {
      this.setLoading(true)
      getMovie(id).then((res) => {
        const data = res.data
        if (data) {
          this.movie = data
        } else {
          this.setError('К сожалению по вашему запросу ничего не найдено...')
        }
        this.setLoading(false)
      })
    }
  },
  beforeMount() {
    const {id: movieId} = this.$route.params;
    const movie = this.$store.getters.getMovieById(movieId)

    if (movie) {
      this.movie = movie
    } else {
      this.getSingleMovie(movieId)
    }
  }
}
</script>

<style lang="scss" scoped>
.about-page {
  min-height: 100vh;
  background-color: $main-bg;

  &__back {
    margin-bottom: 26px;
  }

  &__link {
    display: flex;
    justify-content: space-between;
    padding: 32px 32px 24px 12px;
    align-items: center;
    width: 220px;
    color: $red-color;
    font-size: 22px;

    &:hover {
      color: $red-hover;
    }

    &__underline {
      min-width: 100vw;
      height: 30px;
      background-color: #fff;
    }
  }
}
</style>