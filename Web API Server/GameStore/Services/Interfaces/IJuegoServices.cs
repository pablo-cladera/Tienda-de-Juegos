using GameStore.Models;
using GameStore.Models.DataTransfers;
using GameStore.Models.Entities;

namespace GameStore.Services.Interfaces
{
    public interface IJuegoServices
    {
        IEnumerable<Juego> GetAll();
        Juego GetOne(decimal Id);
        IEnumerable<Juego> GetByConsola(decimal tipoConsola);
        IEnumerable<Juego> GetByGenero(decimal tipoGenero);
        IEnumerable<Juego> GetByName(string nombreJuego);

        void DeleteJuego(Juego juego);

        Juego UpdateJuego(JuegoCreateOrUpdateDate data);

        Juego CreateJuego(JuegoCreateOrUpdateDate data);
    }
}
