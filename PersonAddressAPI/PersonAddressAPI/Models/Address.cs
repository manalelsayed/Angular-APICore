using System.ComponentModel.DataAnnotations;

namespace PersonAddressAPI.Models
{
    public class Address
    {
        [Key]
        public int Id { get; set; }

        public string street { get; set; }
        public string city { get; set; }
        public int? postalCode { get; set; }
        public string country { get; set; }

        //foriegn key
        public int PersonId { get; set; }

    }
}
