export default interface ICategoria {
  id: string;
  descricao: string;
  ativo: boolean;
}

export default class Categoria implements ICategoria {
  constructor() {
    this.id = "";
    this.descricao = "";
    this.ativo = false;
  }    
}