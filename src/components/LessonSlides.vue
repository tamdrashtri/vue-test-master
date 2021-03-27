<template>
  <vueper-slides  >
  <vueper-slide v-for="content in lesson.contents" :key="content || content.id" :style="'background-color: #F7E7CE'">
    <template v-slot:content>
        <div class="flex min-h-screen ">
            <div class="container mx-auto">
        <div class="card-slide" v-if="!lesson.contents.length">
            <i class="icon icon-check"></i>
              {{ content.detail }}
        </div>
        </div>
        </div>
     
     
    </template>
  </vueper-slide>
</vueper-slides>
</template>

<script>

import { computed, ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import getDocument from '@/composables/getDocument'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: { VueperSlides, VueperSlide },
    setup() {
        const route = useRoute()
        const contents = ref('')
        const lessonId = computed(() => route.params.id)
        const {document:lesson} = getDocument('lessons', lessonId.value)
        console.log(lesson)
    return {lesson, contents, lessonId}
    }
    
}
</script>



