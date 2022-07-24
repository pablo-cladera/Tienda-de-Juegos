namespace GameStore.Models.DataTransfers
{
    public class VentaCreateOrUpdateDate
    {
        public decimal Id { get; set; }
        public decimal IdPersona { get; set; }
        public decimal IdSucursal { get; set; }
        public string FacturaNumero { get; set; }
        public DateTime Fecha { get; set; }
        public decimal? Total { get; set; }
    }
}
