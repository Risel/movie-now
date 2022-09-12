<template>
  <article class="card">
    <div class="card__poster">
      <img :src="`https:${movie.poster}`" :alt="`${movie.title} постер`"/>
    </div>
    <div class="card__text">
      <h3 class="card__title">
        <router-link :to="{name:'about', params: {id: movie.id}}" class=card__link>
          <span>{{ movie.title }}</span>
        </router-link>
      </h3>
      <p class="card__info">
        <span class="card__year">{{ movie.year }}, </span>
        <span class="card__genres">
          {{ movie.genres.join(', ') }}
        </span>
      </p>
      <p class="card__directors" v-if="movie.countries">
        <span>Страна: </span>
        <span>
          {{ movie.countries.join(', ') }}
        </span>
      </p>
      <p class="card__actors" v-if="movie.actors">
        <span style="color: #988F8F">Актеры:</span>
        <span class="film-card__actors">{{ movie.actors.join(', ') }}</span>
      </p>
      <p class="card__description" v-if="movie.description">
        {{ movie.description }}
      </p>
    </div>
    <div class="card__time" v-if="movie.collapse && movie.collapse.duration">
      <span>
          {{ movie.collapse.duration.join('').replace('.', '') }}
      </span>
      <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z"
            fill="#FA2828"
            fill-opacity="0.98"
        />
      </svg>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    movie: Object
  },
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  margin-bottom: 24px;
  background-color: $movie-bg;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &__poster {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 168px;
    background-color: $movie-poster-bg;

    img {
      object-position: center;
      width: 112px;
      height: 168px;
      object-fit: cover;
      margin: 0 auto;
    }
  }

  &__text {
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    padding: 32px 24px;

    > *:last-child {
      margin-bottom: 0;
    }
  }

  &__link {
    color: #fff;
    text-decoration: none;
  }

  &__title {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: $white;
  }

  &__info {
    margin-top: 0;
    color: $text-secondary;
    margin-bottom: 8px;
    font-size: 14px;
  }

  &__directors {
    margin-top: 0;
    margin-bottom: 10px;
    color: $text-secondary;
  }

  &__actors {
    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $text-actors;
  }

  &__description {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: $white;
  }

  &__time {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 30px;
    padding: 0 24px 0 19px;
    position: absolute;
    right: 0;
    top: 32px;
    background-color: $movie-poster-bg;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: #000;

    &::before {
      content: '';
      border-bottom: 30px solid $movie-poster-bg;
      border-left: 5px solid transparent;
      position: absolute;
      left: -5px;
    }
  }
}
</style>