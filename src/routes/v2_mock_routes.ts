
import { Router } from 'express';
import { TipoAtividadeV2Controller } from '../v2/controllers/TipoAtividadeController'
import { AtividadesV2Controller } from '../v2/controllers/AtividadeController'
import { EquipamentosV2Controller } from '../v2/controllers/EquipamentoController'
import { GrupoDefeitoController } from '../v2/controllers/GrupoDefeitoController'
import { SubgruposV2Controller } from '../v2/controllers/SubgrupoDefeitoController'
import { AprV2Controller } from '../v2/controllers/AprController';
import { TecnicosV2Controller } from '../v2/controllers/TecnicosController';


const v2Routes = Router();

v2Routes.get('/tipo-atividade', TipoAtividadeV2Controller.getTiposAtividade);
v2Routes.get('/atividades', AtividadesV2Controller.getAtividades);
v2Routes.get('/equipamentos', EquipamentosV2Controller.getEquipamentos);
v2Routes.get('/grupos-defeito', GrupoDefeitoController.getGruposDefeito);
v2Routes.get('/subgrupos-defeito', SubgruposV2Controller.getSubgrupos);

v2Routes.get('/aprs', AprV2Controller.getAprs);
v2Routes.get('/apr-perguntas', AprV2Controller.getAprPerguntas);
v2Routes.get('/apr-perguntas-relacionamentos', AprV2Controller.getAprPerguntasRelacionamentos);

v2Routes.get('/tecnicos', TecnicosV2Controller.getTecnicos);

export default v2Routes;