<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <AsnButton :prefix-icon="'IconDeviceFloppy'" >Olá Mundo</AsnButton>
        <AsnButton :loading="true" type="secondary"> Olá Mundo</AsnButton>
        <AsnButton type="tertiary"> Olá Mundo</AsnButton>
        <span>{{ url }}</span>
      </nav>
    </div>
  </header>

  <router-view v-slot="{ Component }">
    <transition 
      name="fade--app"
      enter-active-class="fade--app-enter-active"
      leave-active-class="fade--app-leave-active"
      enter-to-class="fade--app-enter"
      leave-to-class="fade--app-leave-to"
      @before-leave="onBeforeLeave" 
      @after-enter="onAfterEnter"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import AsnButton from './components/@ui/AsnButton.vue';
import { onMounted, onBeforeMount } from 'vue';
import { apiUrl } from './utils/methods';


  onMounted(() => {
    onAfterEnter()
  });

  onBeforeMount(() => {
    onBeforeLeave()
  });

  
  const url = apiUrl()

  function onAfterEnter () {
    document.body.style.overflow = ''
  }

  function  onBeforeLeave () {
    document.body.style.overflow = 'hidden'
  }
</script>

<style scoped lang="scss">

.fade--app-enter-active, .fade--app-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade--app-enter, .fade--app-leave-to {
  opacity: 0;
  overflow: hidden;
  transform: translateX(18px); /* Deslocamento horizontal durante a transição */
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
