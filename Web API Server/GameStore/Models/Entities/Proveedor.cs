﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using GameStore.Models.Entities;
using System;
using System.Collections.Generic;

namespace GameStore.Models
{
    public partial class Proveedor
    {
        public Proveedor()
        {
            Compra = new HashSet<Compra>();
        }

        public decimal Id { get; set; }
        public decimal IdPersona { get; set; }

        public virtual Persona IdPersonaNavigation { get; set; }
        public virtual ICollection<Compra> Compra { get; set; }
    }
}