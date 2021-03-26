import { ref } from 'vue'
import { firebaseAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async () => {
  error.value = null
  isPending.value = true

  try {
    const res = await firebaseAuth.signInWithPopup(provider)
    error.value = null
    isPending.value = false
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
    isPending.value = false
  }
}

const useLogin = () => {
  return { error, login, isPending }
}

export default useLogin