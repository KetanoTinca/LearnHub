using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using LearnHub.Models.Entities;

namespace LearnHub.Models.MappingProfiles
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<RegistrationModel, AppUser>();
        }
    }
}
