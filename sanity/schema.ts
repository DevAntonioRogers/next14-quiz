import { type SchemaTypeDefinition } from 'sanity'
import questions from './questions'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [questions],
}
