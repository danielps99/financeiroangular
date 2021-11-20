import Categoria from './Categoria';

export default interface ISubCategoria {
  id: string;
  descricao: string;
  saldoAtual: number;
  ativo: boolean;
  categoria: Categoria | null;
}

export default class SubCategoria implements ISubCategoria {
  constructor() {
    this.id = "";
    this.descricao = "";
    this.saldoAtual = 0.00;
    this.ativo = false;
    this.categoria = null;
  }    
}