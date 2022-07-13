namespace GameStore.Models.DataTransfers
{
    public class PersonaCreateOrUpdateDate
    {
            public decimal Id { get; set; }
            public string? Nombre { get; set; }
            public string? Apellido { get; set; }
            public decimal IdTipoPersona { get; set; }
            public decimal IdTipoDocumento { get; set; }
            public string? Documento { get; set; }
            public decimal IdTipoTelefono { get; set; }
            public string? Telefono { get; set; }
            public string? Email { get; set; }
            public string? Calle { get; set; }
            public string? NumeroCalle { get; set; }
            public decimal IdCiudad { get; set; }
            public string? CodigoPostal { get; set; }

    }
}
