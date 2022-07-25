namespace GameStore.Models.DataTransfers
{
    public class JuegoCreateOrUpdateDate
    {
        internal readonly decimal id;

        //public decimal Id { get; set; }
        public string? Nombre { get; set; }
        public decimal IdGenero { get; set; }
        public decimal IdConsola { get; set; }
        public decimal IdDesarroladores { get; set; }
        public decimal IdClasificacion { get; set; }
        public string? AñoLanzamiento { get; set; }
        public decimal Precio { get; set; }
        public int Stock { get; set; }
        public int StockMin { get; set; }
        public int StockMax { get; set; }
    }
}
