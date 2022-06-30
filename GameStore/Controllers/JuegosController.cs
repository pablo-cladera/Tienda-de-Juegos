using AutoMapper;
using GameStore.Services;
using Microsoft.AspNetCore.Mvc;

namespace GameStore.Controllers
{
    [ApiController]
    [Route("[Juegos]")]
    public class JuegosController : ControllerBase
    {

        private readonly ILogger<JuegosController> _logger;

        private IMapper _mapper;

        private JuegoServices _juegoService;

        public JuegosController(ILogger<JuegosController> logger,
                                IMapper mapper,
                                JuegoServices juegoService)
        {
            _logger = logger;
            _mapper mapper;
            _juegoService = juegoService;

        }

        [Route("all")]
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}