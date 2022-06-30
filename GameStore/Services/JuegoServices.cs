﻿using GameStore.Models;
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
            return _context.Juegos.Include(c => c.IdGeneroNavigation).ToList();
        }

        public Juego GetOne(int juegoId)
        {
            return _context.Juegos.Include(c => c.IdGeneroNavigation).SingleOrDefault(x => x.Id == juegoId);
        }

        public void DeleteJuego(Juego juego)
        {
            _context.Juegos.Remove(juego);
            _context.SaveChanges();
        }

        public Juego UpdateJuego(JuegoCreateOrUpdateDate data)
        {
            var juego = GetOne(data.Id);

            if(juego != null)
            {
                juego.Id = data.Id;
                juego.IdGenero = data.IdGenero;
                juego.IdConsola = data.IdConsola;
                juego.Stock = data.Stock;

                _context.SaveChanges();
            }

            return juego;
        }


    }
}