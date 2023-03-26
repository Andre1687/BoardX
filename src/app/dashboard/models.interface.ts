export interface List {
  title: string,
  elements?: Element[],
  docRef?: string
  index?: number
}


export interface Element {
  text: string,
  type: string,
  color: string,
  checked?: boolean,
  prog?: number
}
