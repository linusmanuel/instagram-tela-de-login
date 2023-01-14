export const emitter = (() => {
  const listeners = new Map()
  return {
    on: (event, callback) => {
      if (!listeners.has(event)) listeners.set(event, [])
      listeners.get(event).push(callback)
    },
    emit:
      event =>
      (...args) => {
        listeners.has(event) &&
          listeners.get(event).forEach(callback => callback(...args))
      },
  }
})()
