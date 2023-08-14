<template>

   
    <div class="aboutcontainer">
        <Header />
    
        <template v-for="block in story.body" :key="block._uid">
            
            <AboutLanding v-if="block.component === 'About Info'" :blok="block" />

            <ContactForm v-if="block.component === 'ContactForm'" :blok="block" />
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
              fetch('https://api-us.storyblok.com/v2/cdn/stories/about?cv=1691982478&token=QpDNTlhZ3K4b5jO9AmD6Zwtt&version=published')
              .then(resp => resp.json())
              .then(data => this.story = data.story.content)
          }
      }
    
      
    </script>

    <style>
 

    .nav-list a{
        color: black;
    }

    .nav-list a:hover{
        color: grey;
    }
    .aboutcontainer{
        background-image: url("../assets/picture-7.jpg");
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }
</style>