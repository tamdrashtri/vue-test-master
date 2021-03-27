<template>
  

    <AddContent :lesson="lesson" />
			  

    <ContentList :lesson="lesson" />
			  
	<section class="text-gray-700 body-font">
        <div class="container px-8 pt-5 pb-8 mx-auto lg:px-4">
            <div
                class="flex flex-col w-full p-8 mx-auto mt-5 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
            <button @click="handleSubmit" class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Start Lesson</button>
        </div>		
            </div>
	
</section>
    
        

</template>

<script>
import ContentList from '@/components/ContentList.vue'
import AddContent from '@/components/AddContent.vue'
import getDocument from '@/composables/getDocument'
import { useRoute, useRouter } from 'vue-router'


export default {
    props: ['id'],
    components: { AddContent, ContentList },
    setup(props) {
        const router = useRouter()
        const {document:lesson} = getDocument('lessons', props.id)

        const handleSubmit = () => {
            router.push({ name: 'LessonSlides' })
        }
    return {lesson, handleSubmit}
    }
    
}
</script>

<style>

</style>