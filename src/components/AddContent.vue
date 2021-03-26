<template>
<section class="text-gray-700 body-font">
            <div class="container px-8 pt-16 pb-8 mx-auto lg:px-4">
                <div
                    class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
        
                    <div class="relative ">
                        <label for="name" class="text-sm leading-7 text-gray-600">Create a title</label>
                        <textarea v-model="detail" class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></textarea>
                    </div>
                  
                    <button
                        @click="onSubmit" class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Create</button>
              
			  </div>
				
            </div>
	
</section>
</template>
<script>
import { ref } from 'vue'
import useDocument from '../composables/useDocument'
export default {
  props: ['lesson'],
  setup(props) {
    console.log(props)
    const detail = ref('')
    const showForm = ref(false)
    const { updateDoc } = useDocument('lessons', props.lesson.id)
    const handleSubmit = async () => {
      const newContent = {
        detail: detail.value,
        id: Math.floor(Math.random() * 1000000),
  
      }
      console.log(newContent)
      const res = await updateDoc({
        contents: [...props.lesson.contents, newContent]
      })
      detail.value = ''
    }
    return { detail, showForm, handleSubmit }
  }
}
</script>

<style>

</style>