export function throttle(func: Function, limit: number): Function {
  let inThrottle: boolean

  return function<T>(this: T) {
    const args = arguments
    const context = this

    if (!inThrottle) {
      inThrottle = true
      func.apply(context, args)
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
