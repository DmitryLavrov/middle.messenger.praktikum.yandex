import {Block} from '../../core/block'
import {BlockProps} from '../../core/types'

export type FormProps = {
  childFields?: Block<BlockProps>[]
  childButtons: Block<BlockProps>[]
  title: string
  attrClass?: string
  onSubmit?: (event: Event) => void
}

export type FieldBoxProps = {
  childInput: Block<BlockProps>
  name?: string
  label?: string
  attrClass?: string
}

export type InputProps = {
  attrId: string
  attrName: string
  attrValue?: string
  attrType: string
  attrPlaceholder?: string
  attrReadonly?: string
  attrClass?: string
  attrAccept?: string
  onFocus?: (event: Event) => void
  onBlur?: (event: Event) => void
}

export type TextFieldProps = {
  attrId: string
  attrClass?: string
  context: string
}
