﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace GameStore.Models.Entities
{
    public partial class Consola
    {
        public Consola()
        {
            Juego = new HashSet<Juego>();
        }

        public decimal Id { get; set; }
        public decimal IdMarca { get; set; }
        public string Nombre { get; set; }

        public virtual Marca IdMarcaNavigation { get; set; }
        public virtual ICollection<Juego> Juego { get; set; }
    }
}