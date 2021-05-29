/// <reference path="../vendor/jquery-3.5.1.js" />
/// <reference path="index.d.ts" />

/**
 * @type {import(".").Curso[]}
 */
const cursos = [
  {
    avaliacao: 1,
    categorias: [{ nome: 'Ciências Sociais' }],
    nome: 'Administração',
    peso: {
      arte: 0,
      humanas: 3,
      economia: 3,
      saude: 0,
      legal: 3,
      lideranca: 5,
      matematica: 1,
      ciencia: 0,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 4.5,
    categorias: [{ nome: 'Arte' }],
    nome: 'Artes Visuais',
    peso: {
      arte: 5,
      humanas: 1,
      economia: 1,
      saude: 0,
      legal: 1,
      lideranca: 2,
      matematica: 0,
      ciencia: 0,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 2,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Ciência da Computação',
    peso: {
      arte: 1,
      humanas: 0,
      economia: 2,
      saude: 0,
      legal: 1,
      lideranca: 2,
      matematica: 3,
      ciencia: 4,
      tecnologia: 5,
    },
  },
  {
    avaliacao: 4,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Ciências Contábeis',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 5,
      saude: 0,
      legal: 3,
      lideranca: 2,
      matematica: 3,
      ciencia: 1,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 2.5,
    categorias: [{ nome: 'Arte' }],
    nome: 'Design',
    peso: {
      arte: 5,
      humanas: 0,
      economia: 1,
      saude: 0,
      legal: 1,
      lideranca: 2,
      matematica: 0,
      ciencia: 1,
      tecnologia: 3,
    },
  },
  {
    avaliacao: 3,
    categorias: [{ nome: 'Ciências Sociais' }],
    nome: 'Direito',
    peso: {
      arte: 0,
      humanas: 3,
      economia: 3,
      saude: 0,
      legal: 5,
      lideranca: 2,
      matematica: 1,
      ciencia: 1,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 5,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Engenharia Aeroespacial',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 1,
      matematica: 4,
      ciencia: 4,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 2,
    categorias: [{ nome: 'Engenharia' }],
    nome: 'Engenharia Biomédica',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 4,
      legal: 0,
      lideranca: 0,
      matematica: 1,
      ciencia: 3,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 2,
    categorias: [{ nome: 'Ciências Humanas' }],
    nome: 'Filosofia',
    peso: {
      arte: 0,
      humanas: 5,
      economia: 1,
      saude: 0,
      legal: 2,
      lideranca: 1,
      matematica: 0,
      ciencia: 0,
      tecnologia: 0,
    },
  },
  {
    avaliacao: 4.5,
    categorias: [{ nome: 'Ciências da Natureza' }],
    nome: 'Física',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 5,
      ciencia: 5,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 5,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Física Computacional',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 4,
      ciencia: 4,
      tecnologia: 5,
    },
  },
  {
    avaliacao: 1,
    categorias: [{ nome: 'Ciências Humanas' }],
    nome: 'História',
    peso: {
      arte: 0,
      humanas: 5,
      economia: 1,
      saude: 0,
      legal: 2,
      lideranca: 1,
      matematica: 0,
      ciencia: 0,
      tecnologia: 0,
    },
  },
  {
    avaliacao: 4,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Matemática',
    peso: {
      arte: 0,
      humanas: 1,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 5,
      ciencia: 1,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 3.5,
    categorias: [{ nome: 'Ciências Biológicas' }],
    nome: 'Medicina Veterinária',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 0,
      saude: 4,
      legal: 0,
      lideranca: 0,
      matematica: 1,
      ciencia: 3,
      tecnologia: 2,
    },
  },
  {
    avaliacao: 3.5,
    categorias: [{ nome: 'Arte' }],
    nome: 'Música',
    peso: {
      arte: 5,
      humanas: 1,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 0,
      ciencia: 0,
      tecnologia: 1,
    },
  },
  {
    avaliacao: 3,
    categorias: [{ nome: 'Ciências Exatas' }],
    nome: 'Redes de Computadores',
    peso: {
      arte: 0,
      humanas: 0,
      economia: 1,
      saude: 0,
      legal: 0,
      lideranca: 1,
      matematica: 2,
      ciencia: 2,
      tecnologia: 4,
    },
  },
  {
    avaliacao: 3,
    categorias: [{ nome: 'Ciências da Natureza' }],
    nome: 'Química',
    peso: {
      arte: 0,
      humanas: 1,
      economia: 0,
      saude: 0,
      legal: 0,
      lideranca: 0,
      matematica: 2,
      ciencia: 4,
      tecnologia: 2,
    },
  },
]

class Teste {
  /**
   * @type {JQuery<HTMLElement>}
   */
  menuInicial
  /**
   * @type {JQuery<HTMLElement>}
   */
  menuPerguntas
  /**
   * @type {JQuery<HTMLElement>}
   */
  btnComecarTeste
  /**
   * @type {JQuery<HTMLElement>}
   */
  spinner
  /**
   * @type {JQuery<HTMLElement>}
   */
  pergunta1Wrapper

  constructor() {
    console.log('teste load')
    this.spinner = $('#spinner')
    this.menuInicial = $('#menu-inicial')
    this.menuPerguntas = $('#menu-perguntas')
    this.pergunta1Wrapper = $('#pergunta-1-wrapper')
    this.btnComecarTeste = $('#btn-comecar-teste').on('click', () =>
      this.iniciar()
    )
  }

  iniciar() {
    console.log('teste init')
    this.menuInicial.fadeOut(() => {
      this.menuInicial.remove()
      this.spinner.fadeIn(() => {
        this.spinner.delay(600).fadeOut(() => {})
        setTimeout(() => {
          this.menuPerguntas.addClass('d-flex')
        }, 1000)
      })
    })
    this.pergunta1Wrapper.find('div.card').on('click', (e) => {
      const el = $(e.currentTarget)
      const selecionado = el.data('selected') === 'true'
      el.toggleClass('border-primary', !selecionado).data(
        'selected',
        selecionado ? 'false' : 'true'
      )
    })
  }

  log() {
    console.log(this)
  }
}

$(() => {
  const teste = new Teste()
  teste.log()
})
