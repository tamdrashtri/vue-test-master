<template>
  <section class="text-gray-700 body-font">
            <div class="container px-8 pt-24 pb-24 mx-auto lg:px-4">
                <div
                    class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
        
                    <div class="relative ">
                        <label for="name" class="text-sm leading-7 text-gray-600"></label>
                        <input v-model="form.title" type="name" id="name" name="name" placeholder="name"
                            class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                    </div>
        
                    <button @click="update"
                        class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Update</button>
                </div>
            </div>
        </section>
                    
</template>

<script>
import { computed, ref, onMounted, reactive} from 'vue'
import {updateDoc2, getLesson} from '../composables/useDocument'
import { useRoute, useRouter } from 'vue-router'
import getDocument from '@/composables/getDocument'

export default {
  name: 'EditLesson',
  props: ['id'],
  setup(props) {
    // const { error, documents } = getCollection('lessons')
    console.log(props, props.id)
    const form = reactive({ title: '' })
    const router = useRouter()
    const {  document: lesson } = getDocument('lessons', props.id)

    onMounted(async () => {
      const lesson = await getLesson(props.id)
      console.log(lesson)
      form.title = lesson.title
    })
    const update = async () => {
      await updateDoc2(props.id, { ...form })
      router.push('/lessons')
      form.title = ''
    }
    
    // const update = async () => {
    //   await updateDoc(lesson, {...lesson.title})
    //   router.push('/')
    //   lesson.title = ''
    // }

    return  { update, form, lesson}
  }}
</script>

<style>

</style>