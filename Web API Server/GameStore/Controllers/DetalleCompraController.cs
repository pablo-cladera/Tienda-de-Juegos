using AutoMapper;
using GameStore.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GameStore.Controllers
{
    [ApiController]
    [Route("DetalleCompras")]
    public class DetalleCompraController : Controller
    {
        private readonly ILogger<DetalleCompraController> _logger;

        private IMapper _mapper;

        private IDetalleCompraServices _detalleCompraService;

        public DetalleCompraController(ILogger<DetalleCompraController> logger,
                                IMapper mapper,
                                IDetalleCompraServices detalleCompraService)
        {
            _logger = logger;
            _mapper = mapper;
            _detalleCompraService = detalleCompraService;

        }
    }
}
