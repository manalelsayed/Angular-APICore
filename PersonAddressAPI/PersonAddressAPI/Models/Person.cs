using System.ComponentModel.DataAnnotations;

namespace PersonAddressAPI.Models
{
    public class Person
    {

      

        [Key]
        public int Id { get; set; }

        [StringLength(20)]
        public string FirstName { get; set; }
        [StringLength(30)]
        public string LastName { get; set; }
        public int Age { get; set; }

        public Address Address { get; set;}

    }
}
