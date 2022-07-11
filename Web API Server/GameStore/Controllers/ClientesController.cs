using AutoMapper;
using GameStore.Models;
using GameStore.Models.DataTransfers;
using GameStore.Services;
using GameStore.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GameStore.Controllers
{
    [ApiController]
    [Route("Clientes")]
    public class ClientesController : Controller
    {
        private readonly ILogger<ClientesController> _logger;

        private IMapper _mapper;

        private IClienteServices _clienteService;

        public ClientesController(ILogger<ClientesController> logger,
                                IMapper mapper,
                                IClienteServices clienteService)
        {
            _logger = logger;
            _mapper = mapper;
            _clienteService = clienteService;

        }


        //private readonly GameStoreDBContext _context;

        //public ClientesController(GameStoreDBContext context)
        //{
        //    _context = context;
        //}

        //[HttpGet]
        //public async Task<IActionResult> Index()
        //{
        //    return Ok(_clienteService.Cliente.ToList());
        //}

        [Route("all")]
        [HttpGet]
        public IEnumerable<ClienteViewModel> GetALL()
        {
            var cliente = _clienteService.GetAll();
            var clienteDTO = _mapper.Map<IEnumerable<ClienteViewModel>>(cliente);
            return clienteDTO;
        }
    }
}
