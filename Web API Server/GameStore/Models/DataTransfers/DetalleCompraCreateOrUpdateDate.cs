namespace GameStore.Models.DataTransfers
{
    public class DetalleCompraCreateOrUpdateDate
    {
        public decimal Id { get; set; }
        public decimal IdCompra { get; set; }
        public decimal IdJuego { get; set; }
        public decimal Precio { get; set; }
        public int Cantidad { get; set; }
        public decimal Total { get; set; }
        public decimal? Descuento { get; set; }
    }
}
