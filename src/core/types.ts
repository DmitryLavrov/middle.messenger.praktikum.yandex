import Block from './block'
import Button from '../components/button/button'
import Form from '../components/form/form'
import Field from '../components/formField/field'
import MessageBox from '../components/messageBox/messageBox'

export type Listeners = Record<string, Function[]>
export type Prop = string | Event | Settings
export type Props = Record<string, Prop>
export type PropsAndStubs = Record<string, Prop | {}>
export type Children = Record<string, Block>;
export type ChildrenArray = Record<string, Block[]>;

export type FormData = Record<string, string>;

export interface Settings {
  withInternalID?: boolean
}

interface Component {
  // id?: string
  attrClass?: string
}

interface Page {
  testLinks?: Block
}

export interface ButtonProps extends Component {
  attrType: string
  label: string
  eventClick?: Function
}

export interface LinkProps extends Component {
  label: string
  attrHref: string
}

export interface ErrorPageProps extends Component, Page {
  title: string
  content: string
  link: Block
}

export interface TestLinksProps extends Component {
}

export interface ChatPageProps extends Component, Page {
  messageBox: MessageBox
}

export interface FormPageProps extends Component, Page {
  form: Form
}

export interface ProfilePageProps extends Component, Page {
  form: Form
}

export interface FormProps extends Component {
  title: string
  fields: Field[]
  buttons: Button[]
  eventSubmit?: Function
}

export interface FieldProps extends Component {
  name?: string
  label?: string
  input: Block
}

export interface InputProps extends Component{
  attrId: string
  attrName: string
  attrValue?: string
  attrType: string
  attrPlaceholder?: string
  attrReadonly?: string
  eventFocus?: Function
  eventBlur?: Function
}

export interface InputReadOnlyProps extends Component{
  attrId: string
  context: string
}

export interface MessageBoxProps extends Component {
  button: Button
  form: Form
}

export interface MessageFormProps extends Component {
  input: Block
  button: Button
  eventSubmit: Function
}
