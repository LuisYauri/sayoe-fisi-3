// export interface PerfilAlumno {
//     nombre: string;
//     codigo: string;
//     escuela: string;
//     situacion: string;
// }

export interface PerfilesListPPUnayoeModel {
    id_perfil_psico: number;
    fecha_resuelto: string;
    nombre: string;
    codigo: string;
    escuela: string;
    situacion: string;
}
export interface GetListPPUnayoeModel {
    anho: string;
    semestre: string;
    perfiles: PerfilesListPPUnayoeModel[];
}

export interface ArrayGetListPPUnayoeModel {
    data: GetListPPUnayoeModel[]
}


// export interface PerfilesListPPUnayoeModel {
//     fecha_resuelto: string;
//     nombre: string;
//     codigo: string;
//     escuela: string;
//     situacion: string;
// }
// export interface GetListPPUnayoeModel {
//     anho: string;
//     semestre: string;
//     perfiles: PerfilesListPPUnayoeModel[];
// }
//
// export interface ArrayGetListPPUnayoeModel {
//     data: GetListPPUnayoeModel[]
// }

