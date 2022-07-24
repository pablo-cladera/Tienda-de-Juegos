namespace GameStore.Models.DataTransfers
{
    public class DetalleVentaCreateOrUpdateDate
    {
        public decimal Id { get; set; }
        public decimal IdVenta { get; set; }
        public decimal IdJuego { get; set; }
        public decimal Precio { get; set; }
        public int Cantidad { get; set; }
        public decimal? Descuento { get; set; }
    }
}
