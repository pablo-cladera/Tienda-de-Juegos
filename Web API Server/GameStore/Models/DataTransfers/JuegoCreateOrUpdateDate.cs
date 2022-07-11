namespace GameStore.Models.DataTransfers
{
    public class JuegoCreateOrUpdateDate
    {
        public decimal Id { get; set; }
        public string? Nombre { get; set; }
        public decimal IdGenero { get; set; }
        public decimal IdConsola { get; set; }
        public int Stock { get; set; }
    }
}
