using AutoMapper;
using GameStore.Models;
using GameStore.Models.DataTransfers;
using GameStore.Services;
using GameStore.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GameStore.Controllers
{
    [ApiController]
    [Route("Personas")]
    public class PersonaController : Controller
    {
        private readonly ILogger<PersonaController> _logger;

        private IMapper _mapper;

        private IPersonaServices _personaService;

        public PersonaController(ILogger<PersonaController> logger,
                                IMapper mapper,
                                IPersonaServices personaService)
        {
            _logger = logger;
            _mapper = mapper;
            _personaService = personaService;

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
            var persona = _personaService.GetAll();
            var personaDTO = _mapper.Map<IEnumerable<PersonaViewModel>>(persona);
            return personaDTO;
        }

        [HttpGet("{Id}")]
        public ActionResult<PersonaViewModel> GetOne(decimal Id)
        {
            var persona = _personaService.GetOne(Id);
            if (persona == null)
            {
                return NotFound();
            }

            var juegoDTO = _mapper.Map<PersonaViewModel>(persona);
            return Ok(juegoDTO);
        }

        [Route("byName")]
        [HttpGet]

        public ActionResult<PersonaViewModel> GetByName(string nombrePersona)
        {
            var persona = _personaService.GetByName(nombrePersona);

            if (persona == null)
            {
                return NotFound();
            }

            var personaDTO = _mapper.Map<IEnumerable<PersonaViewModel>>(persona);

            return Ok(personaDTO);
        }


        [HttpDelete("{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public IActionResult Delete(decimal Id)
        {
            var persona = _personaService.GetOne(Id);

            if (persona == null)
            {
                return NotFound();
            }

            try
            {
                _personaService.DeletePersona(persona);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError,
                                    "Error deleting Data");
            }
        }

        [Route("update")]
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public ActionResult<PersonaCreateOrUpdateDate> UpdatePersona(PersonaCreateOrUpdateDate personaData)
        {
            if (personaData == null)
            {
                return StatusCode(StatusCodes.Status406NotAcceptable,
                                  "PersonaData can't be null");
            }

            try
            {
                var persona = _personaService.UpdatePersona(personaData);
                if (persona == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(_mapper.Map<PersonaViewModel>(persona));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError,
                                 "Error deleting data");
            }
        }

        [Route("create")]
        [HttpPut]

        public ActionResult<PersonaCreateOrUpdateDate> CreatePersona(PersonaCreateOrUpdateDate personaData)
        {
            if (personaData == null)
            {
                return StatusCode(StatusCodes.Status406NotAcceptable,
                                  "Juego data can't be null");
            }

            try
            {
                var persona = _personaService.CreatePersona(personaData);
                if (persona == null)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, "Unable to create game");
                }
                else
                {
                    return Ok(_mapper.Map<PersonaViewModel>(persona));
                }
            }
            catch (Exception Ex)
            {
                _logger.LogError(Ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError,
                                    "Error Deleting Data");
            }
        }

    }

}
