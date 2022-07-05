using GameStore.Models.DataTransfers;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameStore.Models.Mappings
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile ()
        {
            CreateMap<Juego, JuegoViewModel>()
                .ForMember(x => x.Nombre, opt => opt.MapFrom(o => o.Nombre))
                .ForMember(x => x.IdConsola, opt => opt.MapFrom(o => o.IdConsolaNavigation.Nombre))
                .ForMember(x => x.IdGenero, opt => opt.MapFrom(o => o.IdGeneroNavigation.Nombre))
                .ForMember(x => x.Stock, opt => opt.MapFrom(o => o.Stock));

            CreateMap<Juego, JuegoLiteDTO>()
                .ForMember(x => x.Nombre, opt => opt.MapFrom(o => o.Nombre))
                .ForMember(x => x.Consola, opt => opt.MapFrom(o => o.IdConsolaNavigation.Nombre))
                .ForMember(x => x.Genero, opt => opt.MapFrom(o => o.IdGeneroNavigation.Nombre));

            CreateMap<Cliente, ClienteViewModel>()
                .ForMember(x => x.Nombre, opt => opt.MapFrom(o => o.IdPersonaNavigation.Nombre))
                .ForMember(x => x.Apellido, opt => opt.MapFrom(o => o.IdPersonaNavigation.Apellido));



        }
    }
}
