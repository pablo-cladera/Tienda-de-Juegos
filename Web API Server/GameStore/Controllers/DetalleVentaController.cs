using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace GameStore.Controllers
{
    [ApiController]
    [Route("DetalleVentas")]
    public class DetalleVentaController : Controller
    {
        private readonly ILogger<DetalleVentaController> _logger;

        private IMapper _mapper;

        private DetalleVentaController _detalleVentaService;

        public DetalleVentaController(ILogger<DetalleVentaController> logger,
                                IMapper mapper,
                                DetalleVentaController detalleVentaService)
        {
            _logger = logger;
            _mapper = mapper;
            _detalleVentaService = detalleVentaService;

        }
    }
}
