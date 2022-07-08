using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PaymentAPI.Models;

namespace PaymentAPI.Models
{
    public class PaymentDetailsContext:DbContext
    {
        public PaymentDetailsContext(DbContextOptions<PaymentDetailsContext>options):base(options)
        {
        }
        public DbSet<PaymentDetails> PaymentDetails { get; set; }
        public DbSet<UserModel> userDetailsTable { get; set; }
        


    }
}
