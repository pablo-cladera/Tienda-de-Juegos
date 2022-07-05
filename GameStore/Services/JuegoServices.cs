using GameStore.Datos;
using GameStore.Models;
using GameStore.Models.DataTransfers;
using GameStore.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace GameStore.Services
{
    public class JuegoServices: IJuegoServices
    {
        private readonly GameStoreDB2Context _context;

        public JuegoServices(GameStoreDB2Context context)
        {
            _context = context;
        }
        
        public IEnumerable<Juego> GetAll()
        {
            return _context.Juego.ToList();
        }

        public Juego GetOne(decimal Id)
        {
            return _context.Juego.Include(c => c.IdGeneroNavigation).SingleOrDefault(x => x.Id == Id);
        }

        public void DeleteJuego(Juego juego)
        {
            _context.Juego.Remove(juego);
            _context.SaveChanges();
        }

        public Juego UpdateJuego(JuegoCreateOrUpdateDate data)
        {
            var juego = GetOne(data.Id);

            if(juego != null)
            {
                juego.Id = data.Id;
                juego.Nombre = data.Nombre;
                juego.IdGenero = data.IdGenero;
                juego.IdConsola = data.IdConsola;
                juego.Stock = data.Stock;

                _context.SaveChanges();
            }

            return juego;
        }

        public Juego CreateJuego(JuegoCreateOrUpdateDate data)
        {
            var juego = new Juego()
            {
                Id = data.Id,
                Nombre = data.Nombre,
                IdGenero = data.IdGenero,
                IdConsola = data.IdConsola,
                Stock = data.Stock
            };
            _context.Juego.Add(juego);
            _context.SaveChanges();

            return juego;
        }
    }
}
