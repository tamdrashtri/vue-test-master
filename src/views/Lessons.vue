<template>
	
                                
<section class="text-gray-700 body-font">
            <div class="container px-8 pt-16 pb-8 mx-auto lg:px-4">
                <div
                    class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
        
                    <div class="relative ">
                        <label for="name" class="text-sm leading-7 text-gray-600">Create a title</label>
                        <input v-model="title" type="name" id="name" name="name" placeholder="name"
                            class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                    </div>
        
                    <button
                        @click="onSubmit" class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Create</button>
              
			  </div>
				
            </div>
	
</section>
	<LessonList :lessons="documents" />   
         
                                    
</template>

<script>
import LessonList from '../components/LessonList'
import { ref } from 'vue'
import { timestamp } from '@/firebase/config'
import useCollection from '../composables/useCollection'
import getCollection from '../composables/getCollection'

export default {
  name: 'Lessons',
  components: {LessonList},
  setup() {
    const { error, documents } = getCollection('lessons')
    const { addDoc } = useCollection('lessons')


    const title = ref('')
    const isPending = ref(false)


    const onSubmit = async () => {
      isPending.value = true
      await addDoc({
        title: title.value,
        createdAt: timestamp(),
        contents: []
      })
      isPending.value = false
      if (!error.value) {
        console.log('lesson title added')
      }
    
  }
    
    return { title, onSubmit, isPending, documents, error}
  }
}
</script>

<style>

</style>