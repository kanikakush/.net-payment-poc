using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentAPI.Models
{
    public class UserModel
    {
        [Key]
        public int UserId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string UserName { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string UserEmail { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string UserPassword { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string age { get; set; }
    }
}
