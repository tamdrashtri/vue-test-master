<template>
  <!-- <Suspense>
  <template #default>
		Main thing to show
		{{ lesson.contents}}
	</template>
	<template #fallback>
		What to show while it's loading
		Loading...
  </template>
</Suspense> -->

  <!-- <div v-if="!lesson">
    No songs have been added to this playlist yet.
  </div>
  <div v-if="lesson.contents.length">
    <h2>{{ lesson.contents }}</h2>
  </div> -->
  <AddContent :lesson="lesson" />

  <section class="text-gray-700 body-font">
    <div class="container px-8 pt-5 pb-8 mx-auto lg:px-4">
      <div
        class="flex flex-col w-full p-8 mx-auto mt-5 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0"
      >
        <div class="mt-6" v-for="content in lesson.contents" :key="content.id">
          <div class="shadow p-4 bg-white">
            <div class="text-left">
              <h3 class="mb-2 text-gray-700">{{ content.detail }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col w-full p-8 mx-auto mt-5 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0"
      >
        <router-link :to="`/lessons/${lesson.id}/start`">
            <button
          class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
        >
          Start Lesson
        </button>
        </router-link>
        
      </div>
    </div>
  </section>
</template>

<script>
import ContentList from "@/components/ContentList.vue";
import AddContent from "@/components/AddContent.vue";
import getDocument from "@/composables/getDocument";


export default {
  name: 'Content',
  props: ["id"],
  components: { AddContent, ContentList },
  setup(props) {
    const { document: lesson } = getDocument("lessons", props.id);
    return { lesson };
  },
};
</script>

<style>
</style>