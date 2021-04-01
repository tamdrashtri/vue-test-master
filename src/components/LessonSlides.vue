<template>
  <vueper-slides>
  <vueper-slide
    v-for="content in lesson.contents" :key="content.id" :style="'background-color: #F7E7CE'">
    <template v-slot:content>
     <i class="icon icon-check"></i>
    {{ content.detail }}
    </template>
  </vueper-slide>
</vueper-slides>

<div
        class="flex flex-col w-full p-8 mx-auto mt-5 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0"
      >
        <router-link :to="`/lessons/${lesson.id}`">
            <button
          class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
        >
          Go Back
        </button>
        </router-link>
        
      </div>

  <!-- <vueper-slides  >
  <vueper-slide  >
    <template v-slot:content>
    
     
     
    </template>
  </vueper-slide>
</vueper-slides> -->
</template>

<script>
import getDocument from '@/composables/getDocument'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    props: ['id'],
    components: { VueperSlides, VueperSlide },
    setup(props) {
      const { error, document: lesson } = getDocument('lessons', props.id)

    return { error, lesson }
}
}
</script>



