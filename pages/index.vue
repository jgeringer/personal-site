<template>
  <section class="container">

    <div class="home-page">
      <section class="intro">
        <h1>Get the latest tech news!</h1>
      </section>
      <PostList :posts="loadedPosts" />
    </div>

    <div>

    <div class="container">
      <div class="row">
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
      </div>
    </div>

      <h4 class="title3">Recipes</h4>      
      <span>
        <h3>Tutorials:</h3>
        <ul>
          <li><a href="https://www.udemy.com/vuejs-jump-start-with-nuxtjs-firebase/">Vue/Nuxt/Firebase</a></li>
          <li><a href="https://www.udemy.com/nuxtjs-vuejs-on-steroids/">Nuxt</a></li>
          <li><a href="https://www.youtube.com/watch?v=nteDXuqBfn0">Youtube</a></li>
        </ul>
      </span>
    </div>
  </section>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~assets/images/main-page-background.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
