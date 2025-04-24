
import { Router } from 'express';
import { TipoAtividadeController } from '../v2/controllers/TipoAtividadeController'
import { AtividadeController } from '../v2/controllers/AtividadeController'
import { EquipamentoController } from '../v2/controllers/EquipamentoController'
import { GrupoDefeitoController } from '../v2/controllers/GrupoDefeitoController'
import { SubgrupoDefeitoController } from '../v2/controllers/SubgrupoDefeitoController'


const v2Routes = Router();

v2Routes.get('/tipo-atividade', TipoAtividadeController.getTiposAtividade);
v2Routes.get('/atividade', AtividadeController.getAtividades);
v2Routes.get('/equipamento', EquipamentoController.getEquipamentos);
v2Routes.get('/grupo-defeito', GrupoDefeitoController.getGruposDefeito);
v2Routes.get('/subgrupo-defeito', SubgrupoDefeitoController.getSubgruposDefeito);

export default v2Routes;