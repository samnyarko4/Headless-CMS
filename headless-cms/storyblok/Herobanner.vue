<template>    
<div>

<img src="../assets/picture-3.JPG" alt="" class="landing-picture" />
<Header />
<h1              class="text-white">{{ blok.landingTitle }}
    </h1>
    
<h2 class="landing-text">This portfolio was made with Storyblok Vue, and Nuxt </h2>
 

<NuxtLink to="/gallery" class="">       <button class="home-button"> View Portfolio</button>
</NuxtLink>
</div>    
      
</template>
<script>
    export default {
        props:['blok']
    }
</script>

<style>
.text-white{
    color:green;
    text-align: center;
    z-index:2;
}
.landing-picture{
    width: 98vw;
    max-height: 100vh;
    position: absolute;
    z-index: -1;
}

.landing-text{
font-size: 75px;
font-weight:900;
font-family: cursive;
width:20ch;
padding-left: 5rem;
}

.home-button{
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 30px 100px;
    color: white;
    border-color: white;
    margin-left: 20rem;
}

.home-button:hover{
    background-color: white;
    color: #1a1a1a;
    border-color: #1a1a1a;
    cursor: pointer;
}
</style>




