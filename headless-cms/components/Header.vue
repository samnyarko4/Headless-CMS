<template>
    <header class="">
      <div class="nav-container">
        <nav>
          <ul class="flex space-x-8 text-lg font-bold nav-list">
            <li>
              <NuxtLink to="/" class="">HOME</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="">ABOUT</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/gallery" class="">GALLERY</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>

  <style>
.nav-container{
    display: flex;
}

.nav-list{
    display: flex;
}

.nav-list li{
    margin-left:50px;
    margin-top:15px;
    list-style: none;
    
}

.nav-list a{
    text-decoration: none;
    font-size: 30px;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgba( 255, 255, 255, 0.65 );
}

.nav-list a:hover{
    color: white;
}
</style>