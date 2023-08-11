<template>
    <h2>HeroBanner component</h2>
    <div v-if="blok" class="card">
        <img src="" alt="">
        <h1>{{ blok.landingTitle }}</h1>

        <button ></button>
        
    </div>

</template>

<script>
    export default {
        props:['blok']
    }
</script>

<style>
    .card{
        margin-left: 2rem;
    }
</style>