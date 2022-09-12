<template>
  <main class="main-page">
    <h2 class='main-page__title'>Фильмы</h2>
    <div class="main-page__sort sort">
      <input
          class="sort__checkbox"
          type="radio"
          name="sort"
          id="titleSort"
          value="title"
          v-model="currentSort"
      />
      <label class="sort__label" for="titleSort">Отсортировать по названию</label>
      <input
          class="sort__checkbox"
          type="radio"
          name="sort"
          id="yearSort"
          value="year"
          v-model="currentSort"
      />
      <label class="sort__label" for="yearSort">Отсортировать по году</label>
    </div>
    <custom-loader v-if="isLoading"></custom-loader>
    <template v-else>
      <span v-if="error">{{ error }}</span>
      <div v-else class="main-page__content">
        <div>
          <ul class="main-page__list">
            <li class="main-page__list-item" v-for="movie in sortedMovies" :key="movie.id">
              <MovieCard :movie="movie"/>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </main>
</template>

<script>
import CustomLoader from "@/components/CustomLoader";
import MovieCard from "@/components/MovieCard";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  components: {MovieCard, CustomLoader},
  data() {
    return {
      currentSort: null
    }
  },
  computed: {
    ...mapGetters(['getMovies']),
    ...mapState(['isLoading', 'error']),
    sortedMovies() {
      const sortFilms = this.getMovies.slice()
      return sortFilms.sort((a, b) => {
        const aValue = a[this.currentSort]
        const bValue = b[this.currentSort]
        if (aValue < bValue) {
          return -1
        } else if (aValue > bValue) {
          return 1
        }
        return 0
      })
    }
  },
  methods: {
    ...mapActions(['loadMovies'])
  },
  created() {
    this.loadMovies()
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  min-height: 100vh;
  background-color: $main-bg;

  &__title {
    font-weight: 500;
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 16px;
    padding: 8px;
  }

  &__sort {
    padding-bottom: 16px;
    margin-bottom: 40px;
    border-bottom: 1px solid #c4c4c4;
  }

  &__list-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  }
}

.sort {
  font-weight: 400;
  font-size: 16px;
  color: #c4c4c4;

  &__label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-left: 12px;

    &::before {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 1px solid #c4c4c4;
      margin-right: 8px;
    }
  }

  &__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + .sort__label::before {
      border: 1px solid rgba(255, 82, 82, 0.98);
      background: rgba(255, 82, 82, 0.98) url('../assets/Mark.svg') no-repeat center;
    }
  }
}
</style>