using GameStore.Models.DataTransfers;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GameStore.Models.Entities;

namespace GameStore.Models.Mappings
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile ()
        {
            CreateMap<Juego, JuegoViewModel>()
                //.ForMember(x => x.Id, opt => opt.MapFrom(o => o.Id))
                .ForMember(x => x.Nombre, opt => opt.MapFrom(o => o.Nombre))
                .ForMember(x => x.Genero, opt => opt.MapFrom(o => o.IdGeneroNavigation.Nombre))
                .ForMember(x => x.Consola, opt => opt.MapFrom(o => o.IdConsolaNavigation.Nombre))
                .ForMember(x => x.Stock, opt => opt.MapFrom(o => o.Stock));

            CreateMap<Juego, JuegoLiteDTO>()
                .ForMember(x => x.Id, opt => opt.MapFrom(o => o.Id))
                .ForMember(x => x.Nombre, opt => opt.MapFrom(o => o.Nombre))
                .ForMember(x => x.Consola, opt => opt.MapFrom(o => o.IdConsolaNavigation.Nombre))
                .ForMember(x => x.Genero, opt => opt.MapFrom(o => o.IdGeneroNavigation.Nombre))
                .ForMember(x => x.Precio, opt => opt.MapFrom(o => o.Precio));

            CreateMap<Persona, PersonaViewModel>()
                .ForMember(x => x.Id, opt => opt.MapFrom(o => o.Id))
                .ForMember(x => x.Nombre, opt => opt.MapFrom(o => o.Nombre))
                .ForMember(x => x.Apellido, opt => opt.MapFrom(o => o.Apellido))
                .ForMember(x => x.Ciudad, opt => opt.MapFrom(o => o.IdCiudadNavigation.Nombre))
                .ForMember(x => x.TipoPersona, opt => opt.MapFrom(o => o.IdTipoPersonaNavigation.Nombre));



        }
    }
}
