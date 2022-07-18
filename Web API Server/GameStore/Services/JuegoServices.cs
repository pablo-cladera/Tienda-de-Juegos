using GameStore.Datos;
using GameStore.Models;
using GameStore.Models.DataTransfers;
using GameStore.Models.Entities;
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
            return _context.Juego.Include(c => c.IdGeneroNavigation)
                                 .Include(c => c.IdConsolaNavigation)
                                 .ToList();
            //return _context.Juego.ToList();
        }

        public IEnumerable<Juego> GetByConsola(decimal tipoConsola)
        {
            return _context.Juego.Where(x => x.IdConsola == tipoConsola)
            //return _context.Persona.Where(x => EF.Functions.Like(x.IdTipoPersonaNavigation.Nombre, $"%{TipoPersona}%"))
                                   .Include(c => c.IdGeneroNavigation)
                                   .Include(c => c.IdConsolaNavigation)
                                   .ToList();
        }

        public IEnumerable<Juego> GetByGenero(decimal tipoGenero)
        {
            return _context.Juego.Where(x => x.IdGenero == tipoGenero)
            //return _context.Persona.Where(x => EF.Functions.Like(x.IdTipoPersonaNavigation.Nombre, $"%{TipoPersona}%"))
                                   .Include(c => c.IdGeneroNavigation)
                                   .Include(c => c.IdConsolaNavigation)
                                   .ToList();
        }

        public Juego GetOne(decimal Id)
        {
            return _context.Juego.Include(c => c.IdGeneroNavigation)
                                 .Include(c => c.IdConsolaNavigation)
                                 .SingleOrDefault(x => x.Id == Id);
        }

        public IEnumerable<Juego>GetByName(string nombreJuego)
        {
            return _context.Juego.Where(x => EF.Functions.Like(x.Nombre, $"%{nombreJuego}%"))
                                 .Include(c => c.IdGeneroNavigation)
                                 .Include(c => c.IdConsolaNavigation);
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
                juego.IdDesarroladores = data.IdDesarroladores;
                juego.IdClasificacion = data.IdClasificacion;
                juego.AñoLanzamiento = data.AñoLanzamiento;
                juego.Precio = data.Precio;
                juego.Stock = data.Stock;
                juego.StockMin = data.StockMin;
                juego.StockMax = data.StockMax;

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
                IdDesarroladores = data.IdDesarroladores,
                IdClasificacion = data.IdClasificacion,
                AñoLanzamiento = data.AñoLanzamiento,
                Precio = data.Precio,
                Stock = data.Stock,
                StockMin = data.StockMin,
                StockMax = data.StockMax
        };
            _context.Juego.Add(juego);
            _context.SaveChanges();

            return juego;
        }
    }
}
