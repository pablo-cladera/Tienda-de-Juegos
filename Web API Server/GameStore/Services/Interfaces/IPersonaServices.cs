﻿using GameStore.Models;
using GameStore.Models.DataTransfers;
using GameStore.Models.Entities;

namespace GameStore.Services.Interfaces
{
    public interface IPersonaServices
    {
        IEnumerable<Persona> GetAll();

        Persona GetOne(decimal personaId);

        void DeletePersona(Persona persona);

        Persona UpdatePersona(PersonaCreateOrUpdateDate data);

        Persona CreatePersona(PersonaCreateOrUpdateDate data);
    }
}