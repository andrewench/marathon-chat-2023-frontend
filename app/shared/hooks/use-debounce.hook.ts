export const useDebounce = (callback: (...args: any) => void, ms = 500) => {
  let timer: ReturnType<typeof setTimeout>

  return (...args: any) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      callback.call(this, args)
    }, ms)
  }
}
