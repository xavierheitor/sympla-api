import { Router } from "express";
import atividadesRoutes from "./atividades.routes";
import anomaliasRoutes from "./anomalias.routes";
import equipamentosRoutes from "./equipamentos.routes";
import gruposRoutes from "./grupos.routes";
import subgruposRoutes from "./subgrupos.routes";
import tiposAtividadeRoutes from "./tipos_atividade.routes";
import aprRoutes from "./apr.routes";
import perguntasRoutes from "./perguntas.routes";
import aprAtividadeRoutes from "./apr_atividade.routes";
import tecnicosRoutes from "./tecnicos.routes";
import checklistsRoutes from "./checklists.routes";
import defeitosRoutes from "./defeitos.routes";

const appRoutes = Router();

appRoutes.use('/atividades', atividadesRoutes);
appRoutes.use('/anomalias', anomaliasRoutes);
appRoutes.use('/equipamentos', equipamentosRoutes);
appRoutes.use('/grupos', gruposRoutes);
appRoutes.use('/subgrupos', subgruposRoutes);
appRoutes.use('/tipos-atividade', tiposAtividadeRoutes);
appRoutes.use('/aprs', aprRoutes);
appRoutes.use('/apr-perguntas', perguntasRoutes);
appRoutes.use('/apr-atividades', aprAtividadeRoutes);
appRoutes.use('/tecnicos', tecnicosRoutes);
appRoutes.use('/checklists', checklistsRoutes);
appRoutes.use('/defeitos', defeitosRoutes);

export default appRoutes;