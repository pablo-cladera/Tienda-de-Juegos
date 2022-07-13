using GameStore.Datos;
using GameStore.Models;
using GameStore.Models.DataTransfers;
using GameStore.Models.Entities;
using GameStore.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace GameStore.Services
{
    public class PersonaServices : IPersonaServices
    {
        private readonly GameStoreDB2Context _context;

        public PersonaServices(GameStoreDB2Context context)
        {
            _context = context;
        }

        //public IEnumerable<Cliente> GetAll()
        //{
        //    return _context.Cliente.(c => c.Id).ToList();
        //    //return _context.Cliente.Include(c => c.Id).ToList();
        //}

        public IEnumerable<Persona> GetAll()
        {
            return _context.Persona.Include(c => c.IdTipoPersonaNavigation)
                                   .ToList();
        }

        public Persona GetOne(decimal clienteId)
        {
            
            return _context.Persona.SingleOrDefault(x => x.Id == clienteId);
        }

        public void DeletePersona(Persona persona)
        {
            _context.Persona.Remove(persona);
            _context.SaveChanges();
        }

        public Persona UpdatePersona(PersonaCreateOrUpdateDate data)
        {
            var persona = GetOne(data.Id);

            if (persona != null)
            {
                persona.Id = data.Id;
                //persona.IdPersona = data.IdPersona;

                _context.SaveChanges();
            }

            return persona;
        }

        public Persona CreatePersona(PersonaCreateOrUpdateDate data)
        {
            throw new NotImplementedException();
        }
    }
}
