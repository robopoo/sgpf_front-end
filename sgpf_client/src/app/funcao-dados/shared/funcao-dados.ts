import { TipoRegistro } from "app/funcao-dados/shared/tipo-registro";

export class FuncaoDados
{
    id: number;
    idProjeto: number;
    nome: string;
    elementoContagem: number;        // 1 - ALI, 2 - AIE
    descricao: string;               // descricao da funcao de dados 
    manutencao: string;              // descricao da manutencao ou necessidade de inclusao
    tipoRegistro: TipoRegistro[];
}