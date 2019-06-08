export interface AlternativasEnviarRespuestaEPModel {
    id: number;
    id_pregunta: number;
    puntuacion: number;
}

export interface DataEnviarRespuestaEPModel {
    id_perfil_psico: number;
    id_estado_perfil: number,
    alternativa: AlternativasEnviarRespuestaEPModel[];
}

export interface EnviarRespuestaEPModel {
    data: DataEnviarRespuestaEPModel;
}