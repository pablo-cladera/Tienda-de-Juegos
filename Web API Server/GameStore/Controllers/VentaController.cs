using AutoMapper;
using GameStore.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GameStore.Controllers
{
    [ApiController]
    [Route("Ventas")]
    public class VentaController : Controller
    {
        private readonly ILogger<VentaController> _logger;

        private IMapper _mapper;

        private IVentaServices _ventaService;

        public VentaController(ILogger<VentaController> logger,
                                IMapper mapper,
                                IVentaServices ventaService)
        {
            _logger = logger;
            _mapper = mapper;
            _ventaService = ventaService;

        }
    }
}
