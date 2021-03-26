<template>
  

    <AddContent :lesson="lesson" />
			  

    <ContentList :lesson="lesson" />
			  
	<section class="text-gray-700 body-font">
        <div class="container px-8 pt-5 pb-8 mx-auto lg:px-4">
            <div
                class="flex flex-col w-full p-8 mx-auto mt-5 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
        
        <router-link :to="`/lessons/${lesson.id}/start`">
            <button
@click="handleSubmit" class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Start Lesson</button>
        </router-link>
        </div>		
            </div>
	
</section>
    
        

</template>

<script>
import ContentList from '@/components/ContentList.vue'
import AddContent from '@/components/AddContent.vue'
import { computed, ref, onMounted} from 'vue'
import getCollection from '../composables/getCollection'
import { useRoute, useRouter } from 'vue-router'
import getDocument from '@/composables/getDocument'
import useDocument from '../composables/useDocument'
export default {
    components: { AddContent, ContentList },
    setup() {
        const route = useRoute()
        const lessonId = computed(() => route.params.id)
        const {document:lesson} = getDocument('lessons', lessonId.value)
    return {lesson}
    }
    
}
</script>

<style>

</style>