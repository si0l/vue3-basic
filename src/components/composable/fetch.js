import { isRef, ref, unref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  async function doFetch() {
    data.value = null
    error.value = null
    try {
      const urlValue = unref(url)
      const fetchRes = await fetch(urlValue)
      data.value = await fetchRes.json()
    } catch (e) {
      error.value = e
    }
  }

  if (isRef(url)) {
    watchEffect(doFetch)
  } else {
    doFetch()
  }

  return { data, error, retry: doFetch }
}
