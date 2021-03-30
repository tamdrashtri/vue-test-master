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



