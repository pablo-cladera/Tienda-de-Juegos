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
                                   .Include(c => c.IdCiudadNavigation)
                                   .ToList();
        }

        public Persona GetOne(decimal clienteId)
        {
            
            return _context.Persona.Include(c => c.IdTipoPersonaNavigation)
                                   .Include(c => c.IdCiudadNavigation)
                                   .SingleOrDefault(x => x.Id == clienteId);
        }

        public IEnumerable<Persona> GetByName(string nombrePersona)
        {
            return _context.Persona.Where(x => EF.Functions.Like(x.Nombre, $"%{nombrePersona}%"))
                                 .Include(c => c.IdCiudadNavigation)
                                 .Include(c => c.IdTipoPersonaNavigation);
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
                persona.Nombre = data.Nombre;
                persona.Apellido = data.Apellido;
                persona.IdTipoPersona = data.IdTipoPersona;
                persona.IdTipoDocumento = data.IdTipoDocumento;
                persona.Documento = data.Documento;
                persona.IdTipoTelefono = data.IdTipoTelefono;
                persona.Telefono = data.Telefono;
                persona.Email = data.Email;
                persona.Calle = data.Calle;
                persona.NumeroCalle = data.NumeroCalle;
                persona.IdCiudad = data.IdCiudad;
                persona.CodigoPostal = data.CodigoPostal;

                _context.SaveChanges();
            }

            return persona;
        }

        public Persona CreatePersona(PersonaCreateOrUpdateDate data)
        {
            var persona = new Persona()
            {
                Id = data.Id,
                Nombre = data.Nombre,
                Apellido = data.Apellido,
                IdTipoPersona = data.IdTipoPersona,
                IdTipoDocumento = data.IdTipoDocumento,
                Documento = data.Documento,
                IdTipoTelefono = data.IdTipoTelefono,
                Telefono = data.Telefono,
                Email = data.Email,
                Calle = data.Calle,
                NumeroCalle = data.NumeroCalle,
                IdCiudad = data.IdCiudad,
                CodigoPostal = data.CodigoPostal,
        };
            _context.Persona.Add(persona);
            _context.SaveChanges();

            return persona;
        }
    }
    
}
