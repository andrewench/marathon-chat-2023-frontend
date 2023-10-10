import { RefObject, useEffect } from 'react'

export const useOutside = <T extends HTMLElement = HTMLElement>(
  wrapRef: RefObject<T>,
  modalRef: RefObject<T>,
  callback: () => void,
) => {
  useEffect(() => {
    const wrap = wrapRef.current
    const modal = modalRef.current

    if (wrap === null || modal === null) return

    const handleClick = (event: Event) => {
      if (modal && !modal.contains(event.target as Node)) {
        callback()
      }
    }

    wrap.addEventListener('click', handleClick)

    return () => {
      wrap.removeEventListener('click', handleClick)
    }
  }, [callback, modalRef, wrapRef])
}
