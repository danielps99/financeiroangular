import OperacaoTitulo from './enum/OperacaoTitulo';
import Categoria from './Categoria';
import Subcategoria from './Subcategoria';

export default interface ITitulo {
  id: string;
  descricao: string;
  valor: number;
  criadoEm: Date;
  atualizadoEm: Date;
  vencimento:  Date;
  operacao: OperacaoTitulo;
  categoria: Categoria | null;
  subcategoria: Subcategoria | null;
}

export default class Titulo implements ITitulo {
  constructor(operacao: OperacaoTitulo) {
    const agora = new Date();
    this.id = "";
    this.descricao = "";
    this.valor = 0.00;
    this.criadoEm = agora;
    this.atualizadoEm = agora;
    this.vencimento = agora;
    this.operacao = operacao;
    this.categoria = null;
    this.subcategoria = null;
  }
}
