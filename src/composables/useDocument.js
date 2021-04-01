import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection, id) => {

  let error = ref(null)
  let isPending = ref(false)
  let docRef = projectFirestore.collection(collection).doc(id)

  const deleteDoc = async () => {
    isPending.value = true
    error.value = null

    try {
      const res = await docRef.delete()
      isPending.value = false
      return res
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not delete the document'
    }
  }

  const updateDoc = async (updates) => {
    isPending.value = true
    error.value = null

    try {
      const res = await docRef.update(updates)
      isPending.value = false
      return res
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not update the document'
    }
  }



  return { error, isPending, deleteDoc, updateDoc }

}

const lessonsCollection = projectFirestore.collection('lessons')

  export const updateDoc2 = (id, lesson) => {
    return lessonsCollection.doc(id).update(lesson)
  }
  export const getLesson = async id => {
    const lesson = await lessonsCollection.doc(id).get()
    return lesson.exists ? lesson.data() : null
  }

  export const deleteLesson = id => {
    return lessonsCollection.doc(id).delete()
  }

export default useDocument