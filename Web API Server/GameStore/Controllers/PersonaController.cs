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
    public class PersonaController : Controller
    {
        private readonly ILogger<PersonaController> _logger;

        private IMapper _mapper;

        private IPersonaServices _clienteService;

        public PersonaController(ILogger<PersonaController> logger,
                                IMapper mapper,
                                IPersonaServices clienteService)
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
        public IEnumerable<PersonaViewModel> GetALL()
        {
            var cliente = _clienteService.GetAll();
            var clienteDTO = _mapper.Map<IEnumerable<PersonaViewModel>>(cliente);
            return clienteDTO;
        }
    }
}
