<template>
    <h1>index.vue</h1>
    <StoryblokComponent v-if="story" :blok="story.content" />

    <!-- STORBLOK API -->




        <!-- <template v-for="block in story.body" :key="block._uid">
        <Herobanner v-if="block.component === 'HeroBanner'" :blok="block" />
        <Teaser v-if="block.component === 'teaser'" :blok="block" />
       
</template> -->
</template>

<script setup>
    const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<!-- <script>
  export default {
      data: function(){
          return{
              story:''
          }
      },
      created: function() {
          fetch('')
          .then(resp => resp.json())
          .then(data => this.story = data.story.content)
      }
  }
</script> -->

