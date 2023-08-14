<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- left sidebar-->
          <div class="md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SideBarLeft />
            </div>
          </div>

          <!-- main sidebar-->
          <div class="bg-blue-500">
            main sidebar
          </div>

          <!-- right sidebar-->
          <div class="bg-green-500">
            right sidebar
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import SideBarLeft from "./components/SideBar/Left/index.vue"

const darkMode = ref(false)
</script>
