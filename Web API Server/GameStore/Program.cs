using GameStore.Datos;
using GameStore.Services;
using GameStore.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddControllers();



builder.Services.AddDbContext<GameStoreDB2Context>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("WebApiDatabase"));
});

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "WebStore", Version = "v1" });

    
});


builder.Services.AddTransient<IPersonaServices, PersonaServices>();
builder.Services.AddTransient<IJuegoServices, JuegoServices>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("corsPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:4200");
        //builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
        //.AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors("corsPolicy");
//app.UseCors("MyAllowSpecificOrigins");

app.UseAuthorization();

app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

app.Run();

