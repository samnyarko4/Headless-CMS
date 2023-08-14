<template>
    <div class="teaser-block">

        <h3 class="text-center">{{ blok.headline }}</h3>
        <div class="grid">
            <div class="card">
                <img src="../assets/picture-5.png" alt="">
                <h1>1.  Web Developement</h1>
                <p>Freelance web developer proficient in creating responsive and visually appealing websites. Specializing in front-end and back-end development, I combine technical expertise with creative problem-solving to deliver user-friendly and optimized digital solutions. From e-commerce platforms to portfolio websites, I leverage the latest technologies to bring clients' visions to life while ensuring seamless functionality and an exceptional user experience.</p>
            </div>

            <div class="card">
                <img src="../assets/picture-4.png" alt="">
                <h1>2.Photography/Videography</h1>
                <p>Experienced freelance photographer and videographer capturing moments with creativity and precision. Expertise in crafting compelling visual stories across a diverse range of subjects, from events and portraits to landscapes and products. Committed to delivering high-quality imagery that resonates with clients' visions and exceeds expectations.</p>
            </div>

            <div class="card">
                <img src="../assets/picture-6.png" alt="">
                <h1>3.  Web Developement</h1>
                <p>Experienced freelance UI/UX designer transforming ideas into captivating digital experiences. Combining a keen eye for aesthetics with user-centered design principles to craft intuitive interfaces that engage and delight users. Proficient in wireframing, prototyping, and delivering pixel-perfect designs that enhance usability and drive client objectives.</p>
            </div>
        </div>
        <h2 class="text-center" style="font-size: 20px; font-weight: 100; font-family: 'Times New Roman', Times, serif;">{{ blok.subHeadline }}</h2>
    </div>
</template>
   
<script>
    export default {
        props:['blok']
    }
</script>

<style>
h1{
    font-family: 'Times New Roman', Times, serif;
}
.teaser-block{
    margin-top: 25rem;
     background-color:#371045
}

.text-center{
    text-align: center;
    font-size: 50px;
}

.grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.card{
    height: fit-content;
    padding: 10px;
    display: grid;
    background: rgba( 255, 255, 255, 0.45 );;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-radius: 15px;
    margin: 15px;
    border-radius: 15px;
    justify-items: center;
}

.card img{
    width: 250px;


}
</style>