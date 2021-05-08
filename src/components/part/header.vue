<template>
    <nav class="navbar">
        <div class="container">
            <div class="flex">
                <div>
                    <!-- <a class="brand" href="/">😎PJTLOG</a> -->
                    <router-link :to="'/'" class="brand">😎PJTLOG</router-link>
                </div>
                <div class="flex">
                    <!-- <a href="/articles/">Articles</a>
                    <a href="/categories/">Categories</a> -->
                    
                    <router-link :to="'/search'">🔍</router-link>
                    <!-- <button v-on:click="greet">as</button> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

	
}
</script>
