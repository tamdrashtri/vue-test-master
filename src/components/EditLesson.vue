<template>
  <section class="text-gray-700 body-font">
            <div class="container px-8 pt-24 pb-24 mx-auto lg:px-4">
                <div
                    class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
        
                    <div class="relative ">
                        <label for="name" class="text-sm leading-7 text-gray-600"></label>
                        <input v-model="lesson.title" type="name" id="name" name="name" placeholder="name"
                            class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                    </div>
        
                    <button @click="update"
                        class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Create</button>
                </div>
            </div>
        </section>
                    
</template>

<script>
import { computed, ref, onMounted} from 'vue'
import getCollection from '../composables/getCollection'
import { useRoute, useRouter } from 'vue-router'
import getDocument from '@/composables/getDocument'
import useDocument from '../composables/useDocument'
export default {
  name: 'EditLesson',
  props: [],
  setup() {
    // const { error, documents } = getCollection('lessons')
    const route = useRoute()
    const router = useRouter()
    const lessonId = computed(() => route.params.id)
    const {documents:lessons} = getDocument('lessons', route.params.id)
    const title = ref('')
    const {document:lesson} = getDocument('lessons', lessonId.value)
    const { updateDoc } = useDocument('lessons', lessonId.value)

    // console.log(lesson.value.title)
    onMounted(async () => {
        const {document:lesson} = await getDocument('lessons', lessonId.value)
        console.log(lesson, lessonId.value)
        // title = lesson.tistle
    })
    const update = async () => {
      await updateDoc(lesson, {...lesson.title})
      router.push('/')
      lesson.title = ''
    }

    return  {title, lesson, update, updateDoc}
  }}
</script>

<style>

</style>