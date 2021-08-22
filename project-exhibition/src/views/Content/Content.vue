<template>
  <div class="mainBox">
    <div class="content">
      <div class="single-blog">
        <h2>title</h2>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error enim
          ullam harum alias ipsa qui ad fugit! Exercitationem eaque nam, nemo
          itaque ducimus voluptatem ratione consequuntur dolorem, dolor corrupti
          rerum.
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // http://jsonplaceholder.typicode.com/
    };
  },
  async created() {
    const result  = await this.$http.get("/posts")
    if(result.status !== 200) return console.log(result);
    console.log(result);
  },
};
</script>

<style scoped>
.single-blog {
  color: #000;
}
</style>>
