namespace GameStore.Models.DataTransfers
{
    public class JuegoViewModel
    {
        public decimal Id { get; set; }
        public string? Nombre { get; set; }
        public string? Genero { get; set; }
        public string? Consola { get; set; }
        public int Stock { get; set; }
    }
}
