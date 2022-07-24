using AutoMapper;
using GameStore.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GameStore.Controllers
{
    [ApiController]
    [Route("Compras")]
    public class CompraController : Controller
    {
        private readonly ILogger<CompraController> _logger;

        private IMapper _mapper;

        private ICompraServices _compraService;

        public CompraController(ILogger<CompraController> logger,
                                IMapper mapper,
                                ICompraServices compraService)
        {
            _logger = logger;
            _mapper = mapper;
            _compraService = compraService;

        }
    }
}
