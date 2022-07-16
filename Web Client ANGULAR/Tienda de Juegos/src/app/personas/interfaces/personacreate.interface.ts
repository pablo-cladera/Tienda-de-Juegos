export interface PersonaCreate 
{
    id:              number;
    nombre:          string;
    apellido:        string;
    idTipoPersona:   number;
    idTipoDocumento: number;
    documento:       string;
    idTipoTelefono:  number;
    telefono:        string;
    email:           string;
    calle:           string;
    numeroCalle:     number;
    ciudad:          string;
    codigoPostal:    string;
}