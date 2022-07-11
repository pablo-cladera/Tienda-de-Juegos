using GameStore.Models;
using GameStore.Models.DataTransfers;

namespace GameStore.Services.Interfaces
{
    public interface IJuegoServices
    {
        IEnumerable<Juego> GetAll();

        Juego GetOne(decimal Id);

        IEnumerable<Juego> GetByName(string nombreJuego);

        void DeleteJuego(Juego juego);

        Juego UpdateJuego(JuegoCreateOrUpdateDate data);

        Juego CreateJuego(JuegoCreateOrUpdateDate data);
    }
}
