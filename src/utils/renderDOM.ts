import Block from '../core/block'

export function render(query: string, block: Block) {
  const root = document.querySelector(query)

  if (!root) {
    return null
  }

  root.appendChild(block.element)

  block.dispatchComponentDidMount()

  return root
}
