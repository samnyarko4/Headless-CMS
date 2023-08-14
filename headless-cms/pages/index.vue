
<template>
<div class="container">
    <template v-for="block in story.body" :key="block._uid">
        
        <HeroBanner v-if="block.component === 'HeroBanner'" :blok="block" />
        <Teaser v-if="block.component === 'teaser'" :blok="block"  />
        <HomeGrid v-if="block.component === 'grid'" :blok="block" />
    </template>
</div>
</template>

<script>

  export default {
      data: function(){
          return{
              story:''
          }
      },
      created: function() {
          fetch('https://api-us.storyblok.com/v2/cdn/stories/home?version=draft&token=QpDNTlhZ3K4b5jO9AmD6Zwtt&cv=1691958149')
          .then(resp => resp.json())
          .then(data => this.story = data.story.content)
      }
  }

  
</script>

<style>
html{
    background-color: #1a1a1a;
}
.container{
    padding: 10px;

}


.text-cenetr{
    text-align: center;
}
</style>
