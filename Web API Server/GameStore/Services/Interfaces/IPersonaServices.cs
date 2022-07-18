using GameStore.Models;
using GameStore.Models.DataTransfers;
using GameStore.Models.Entities;

namespace GameStore.Services.Interfaces
{
    public interface IPersonaServices
    {
        IEnumerable<Persona> GetAll();
        IEnumerable<Persona> GetTipoPersona(decimal TipoPersona);

        Persona GetOne(decimal personaId);
        IEnumerable<Persona> GetByName(string nombrePersona);

        void DeletePersona(Persona persona);

        Persona UpdatePersona(PersonaCreateOrUpdateDate data);

        Persona CreatePersona(PersonaCreateOrUpdateDate data);
    }
}
