<template> 
<div>

    
</div>
<Header />
<h1>HELLO</h1>
</template>

<script>
 export default {
      data: function(){
          return{
              story:''
          }
      },
      created: function() {
          fetch('https://api-us.storyblok.com/v2/cdn/stories/gallery?version=draft&token=QpDNTlhZ3K4b5jO9AmD6Zwtt&cv=1691979315')
          .then(resp => resp.json())
          .then(data => this.story = data.story.content)
      }
  }

</script>