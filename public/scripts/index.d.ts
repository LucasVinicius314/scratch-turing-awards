export type Categoria = {
  nome: string
}

export type Curso = {
  avaliacao: number
  categorias: Categoria[]
  nome: string
  peso: Peso
}

export type Peso = {
  arte: number
  ciencia: number
  economia: number
  humanas: number
  legal: number
  lideranca: number
  matematica: number
  saude: number
  tecnologia: number
}
