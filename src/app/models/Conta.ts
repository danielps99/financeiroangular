export default interface IConta {
  id: string;
  descricao: string;
  saldoAtual: number;
  ativo: boolean;
}

export default class Conta implements IConta {
  constructor() {
    this.id = "";
    this.descricao = "";
    this.saldoAtual = 0.00;
    this.ativo = false;
  }    
}