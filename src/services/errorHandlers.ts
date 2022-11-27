export function showErrorElement(element: HTMLElement | null | undefined, message: string, timeout?: number): void {
  if (element) {
    element.textContent = message
    element.style.display = 'block'

    if (timeout) {
      setTimeout(() => hideErrorElement(element), 5000)
    }
  } else {
    console.log('Error: ', message)
  }
}

export function hideErrorElement(element: HTMLElement | null | undefined): void {
  if (element) {
    element.style.display = 'none'
  }
}
