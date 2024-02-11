<template>
  <div class="fixed top-12 bottom-0 left-0 flex flex-col w-60 px-4 mt-4">
    <NuxtLink
      v-for="linkItem in linkItems"
      :to="linkItem.url"
      class="flex flex-row items-center p-2 text-md hover:text-slate-400"
      :class="{ 'text-primary-300 hover:!text-primary-500': linkItem.active }"
    >
      <i class="pi mr-2" :class="linkItem.icon"></i>
      <div>{{ linkItem.display }}</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router';

const router = useRouter();

const linkItems: Ref<any[]> = ref([
  { url: '/', display: 'Dashboard', icon: 'pi-home', active: false },
  { url: '/backlog', display: 'Backlog', icon: 'pi-list', active: false },
  { url: '/sprints', display: 'Sprints', icon: 'pi-stopwatch', active: false },
])

onMounted(() => {
  const routeName: string | undefined = router.currentRoute.value.name?.toString()
  if (routeName) {
    setActiveRoute(routeName)
  }
})

router.afterEach((to: RouteLocationNormalized) => {
  const routeName: string | undefined = router.currentRoute.value.name?.toString()
  if (routeName) {
    setActiveRoute(routeName)
  }
})

function setActiveRoute(to: string) {
  const routeName = to === 'index' ? '/' : `/${to}`
  linkItems.value.forEach(linkItem => {
    linkItem.active = linkItem.url === routeName
  })
}
</script>