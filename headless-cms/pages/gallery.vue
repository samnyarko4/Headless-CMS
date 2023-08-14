<template> 


<div class="container">
    <Header />
    <template v-for="block in story.body" :key="block._uid">
    
        <aboutTeaser v-if="block.component === 'teaser'" :blok="block"  />

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
          fetch('https://api-us.storyblok.com/v2/cdn/stories/gallery?version=draft&token=QpDNTlhZ3K4b5jO9AmD6Zwtt&cv=1691981704')
          .then(resp => resp.json())
          .then(data => this.story = data.story.content)
      }
  }

</script>