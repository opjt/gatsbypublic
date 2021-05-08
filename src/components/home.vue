<template>
  <header class="header-bar h-40 bg-gray-100">
    <div class="container mx-auto flex h-full">
      <router-link to="/" class="h-full flex items-center">
      </router-link>
      
      <div class="flex-grow"></div>

      <nav class="header-bar__menu-box-1">
        <ul class="flex h-full">
          <li>
            <router-link to="/" class="h-full flex items-center font-bold px-10 hover:bg-black hover:text-white">
              HOME
            </router-link>
          </li>
          <li>
            <router-link to="/article/list" class="h-full flex items-center font-bold px-10 hover:bg-black hover:text-white">
              ARTICLE LIST
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <!-- <router-view></router-view> -->
    home 입니다
  </main>
</template>

<script>

export default {
  name: 'AppListPage',
  components: {
  }
}
</script>

<style>
</style>