<template>
    <div class="form-contain">
<h1 class="form-title">Contact Me</h1>
        <form action="" class="form">
            <h1 class="label">{{ blok.FirstNameLabel }}</h1>
            <input type="text">
            <h1 class="label">{{ blok.LastNameLabel }}</h1>
            <input type="text">
            <h1 class="label">{{ blok.EmailLabel }}</h1>
            <input type="email">
        </form>
        <button class="form-button">Submit</button>
    </div>
</template>

<script>
    export default {
        props:['blok']
    }
</script>

<style>
.form-contain{
    margin:auto;
    background: rgba( 0, 0, 0, 0.75 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 50%;
    border-radius: 15px;
}

input{
border-radius: 10px;
width: 70%;
background-color: transparent;
border: 1px solid azure;
padding: 10px;
color: azure;
font-size: 15px;
}

.form-title{
    text-align: center;
    color: white;
}

.label{
    color: white;
    font-family:cursive;
    font-size: 20px;
}

.form{
    padding-left:50px;
    padding-bottom: 20px;
}

.form-button{
    margin-left: 4rem;
    padding: 10px 25px;
    background-color: azure;
    border-radius: 10px;
    border: 1px solid black;
    margin-bottom: 30px;
}

.form-button:hover{
    color: azure;
    background-color: #1a1a1a;
    border: 1px solid azure;
    cursor: pointer;
    
}
</style>