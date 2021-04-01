<template>
<div class="flex flex-col w-full p-8 mx-auto lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
<div v-if="!lesson.contents.length">No songs have been added to this playlist yet.</div>
<div v-if="lesson.contents.length">There are some songs here</div>
<!-- <div class="mt-6" v-for="content in lesson.contents" :key="content.id">
	<div class="shadow p-4 bg-white">
    <div class="text-left">
        
        <h3 class="mb-2 text-gray-700">{{ content.detail }}</h3>
    <div class="mt-2">
        <router-link :to="`/lessons/edit/${lesson.id}`">
            <a href="#" class="no-underline mr-4 text-blue-500 hover:text-blue-400">Edit</a>
        </router-link>
        <a href="#" @click="handleDelete" class="no-underline mr-4 text-blue-500 hover:text-blue-400">Delete</a>
        <router-link :to="`/lessons/content/${lesson.id}`">
            <a href="#" class="no-underline mr-4 text-blue-500 hover:text-blue-400">Add Content</a>
        </router-link>
    </div>
    </div>
</div> -->
    <!-- </div> -->
</div>
</template>


<script>
import useDocument from '@/composables/useDocument'

export default {
    props: ['id'],
    setup(props) {
        console.log(props.contents)
    //     const { deleteDoc } = useDocument('lessons', props.id)
        
    //     const handleDelete = async () => {
    //         await deleteDoc()
    //         console.log(deleteDoc())
    // }
    // return {handleDelete, deleteDoc}
    // }
}
}
</script>

<style>

</style>