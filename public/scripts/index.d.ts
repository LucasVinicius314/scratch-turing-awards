/// <reference path="../vendor/jquery-3.5.1.js" />

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

export type Pergunta = {
  descricao: string
  escolhas: { [key: string]: string }
  alternativas: Alternativa[]
  titulo: string
  wrapper: JQuery<HTMLElement>
}

export type Alternativa = {
  nome: string
  peso: Peso
}
