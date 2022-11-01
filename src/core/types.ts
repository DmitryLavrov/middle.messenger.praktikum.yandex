import {Block} from './block'

export type Prop = string | (() => {}) | Block<Props> | Block<Props>[]
export type Props = Record<string, Prop> | {}
export type Children = Record<string, Block<Props>>
export type ChildrenArray = Record<string, Block<Props>[]>

export type FormData = Record<string, string>

// Pages ---------------------------------------------------------
export type ErrorPageProps = {
  title: string
  content: string
  link: Block<Props>
  attrClass?: string
  testLinks?: Block<Props>
}

export type ChatPageProps = {
  messageBox: Block<Props>
  attrClass?: string
  testLinks?: Block<Props>
}

export type FormPageProps = {
  form: Block<Props>
  attrClass?: string
  testLinks?: Block<Props>
}

export type ProfilePageProps = {
  form: Block<Props>
  attrClass?: string
  testLinks?: Block<Props>
}

// Components ---------------------------------------------------
export type TestLinksProps = {
  attrClass?: string
}

export type FormProps = {
  title: string
  fields: Block<Props>[]
  buttons: Block<Props>[]
  attrClass?: string
  eventSubmit?: ()=>{}
}

export type FieldProps = {
  name?: string
  label?: string
  input: Block<Props>
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
  eventFocus?: ()=>{}
  eventBlur?: ()=>{}
}

export type MessageBoxProps = {
  button: Block<Props>
  form: Block<Props>
  attrClass?: string
}

export type MessageFormProps = {
  input: Block<Props>
  button: Block<Props>
  attrClass?: string
  eventSubmit: ()=>{}
}

// Simple components ------------------------------------------------
export type ButtonProps = {
  attrType: string
  label: string
  eventClick?: () => {}
}

export type LinkProps = {
  label: string
  attrHref: string
  attrClass?: string
}

export type InputReadOnlyProps = {
  attrId: string
  attrClass?: string
  context: string
}
