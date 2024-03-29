using AutoMapper;
using GameStore.Models.DataTransfers;
using GameStore.Services;
using GameStore.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GameStore.Controllers
{
    [ApiController]
    [Route("Juegos")]
    public class JuegosController : ControllerBase
    {

        private readonly ILogger<JuegosController> _logger;

        private IMapper _mapper;

        private IJuegoServices _juegoService;

        public JuegosController(ILogger<JuegosController> logger,
                                IMapper mapper,
                                IJuegoServices juegoService)
        {
            _logger = logger;
            _mapper = mapper;
            _juegoService = juegoService;

        }

        [Route("all")]
        [HttpGet]
        public IEnumerable<JuegoViewModel> GetALL()
        {
            var juego = _juegoService.GetAll();
            var juegoDTO = _mapper.Map<IEnumerable<JuegoViewModel>>(juego);
            return juegoDTO;
        }

        [HttpGet("{Id}")]
        public ActionResult<JuegoLiteDTO> GetOne(decimal Id)
        {
            var juego = _juegoService.GetOne(Id);
            if (juego == null)
            {
                return NotFound();
            }

            var juegoDTO = _mapper.Map<JuegoLiteDTO>(juego);
            return Ok(juegoDTO);
        }

        [Route ("byName")]
        [HttpGet]

        public ActionResult<JuegoViewModel>GetByName(string nombreJuego)
        {
            var juego = _juegoService.GetByName(nombreJuego);

            if(juego == null)
            {
                return NotFound();
            }

            var juegoDTO = _mapper.Map<IEnumerable<JuegoViewModel>>(juego);

            return Ok(juegoDTO);
        }

        [Route("byConsola")]
        [HttpGet]

        public ActionResult<JuegoViewModel> GetByConsola(string nombreConsola)
            //public ActionResult<JuegoViewModel> GetByConsola(decimal IdConsola)
        {
            var juego = _juegoService.GetByConsola(nombreConsola);

            if (juego == null)
            {
                return NotFound();
            }

            var juegoConsola = _mapper.Map<IEnumerable<JuegoViewModel>>(juego);

            return Ok(juegoConsola);
        }

        [Route("byGenero")]
        [HttpGet]

        public ActionResult<JuegoViewModel> GetByGenero(decimal IdGenero)
        {
            var juego = _juegoService.GetByGenero(IdGenero);

            if (juego == null)
            {
                return NotFound();
            }

            var juegoGenero = _mapper.Map<IEnumerable<JuegoViewModel>>(juego);

            return Ok(juegoGenero);
        }


        [HttpDelete("{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public IActionResult Delete(decimal Id)
        {
            var juego = _juegoService.GetOne(Id);

            if( juego == null)
            {
                return NotFound();
            }

            try
            {
                _juegoService.DeleteJuego(juego);
                return Ok();
            }
            catch(Exception ex)
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

        public ActionResult<JuegoCreateOrUpdateDate> UpdateJuego(JuegoCreateOrUpdateDate juegoData)
        {
            if (juegoData == null)
            {
                return StatusCode(StatusCodes.Status406NotAcceptable,
                                  "JuegoData can't be null");
            }

            try
            {
                var juego = _juegoService.UpdateJuego(juegoData);
                if (juego == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(_mapper.Map<JuegoViewModel>(juego));
                }
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError,
                                 "Error deleting data");
            }
        }

        [Route("create")]
        [HttpPut]

        public ActionResult<JuegoLiteDTO>CreateJuego(JuegoCreateOrUpdateDate juegoData)
        {
            if(juegoData == null)
            {
                return StatusCode(StatusCodes.Status406NotAcceptable,
                                  "Juego data can't be null");
            }

            try
            {
                var juego = _juegoService.CreateJuego(juegoData);
                if (juego == null)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, "Unable to create game");
                }
                else
                {
                    return Ok(_mapper.Map<JuegoViewModel>(juego));
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