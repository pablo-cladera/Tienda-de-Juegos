﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace GameStore.Models.Entities
{
    public partial class TipoPersona
    {
        public TipoPersona()
        {
            Persona = new HashSet<Persona>();
        }

        public decimal Id { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<Persona> Persona { get; set; }
    }
}