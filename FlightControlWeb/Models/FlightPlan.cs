﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightControlWeb.Models
{
    public class FlightPlan
    {
        public int Passengers { get; set; }
        public string CompanyName { get; set; }
        public IntialLoation IniLocation { get; set; }
        public List<Segment> Segments { get; set; }
    }
}