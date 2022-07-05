using GameStore.Datos;
using GameStore.Models;
using GameStore.Models.DataTransfers;
using GameStore.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace GameStore.Services
{
    public class ClienteServices : IClienteServices
    {
        private readonly GameStoreDB2Context _context;

        public ClienteServices(GameStoreDB2Context context)
        {
            _context = context;
        }

        //public IEnumerable<Cliente> GetAll()
        //{
        //    return _context.Cliente.(c => c.Id).ToList();
        //    //return _context.Cliente.Include(c => c.Id).ToList();
        //}

        public IEnumerable<Cliente> GetAll()
        {
            return _context.Cliente.ToList();
        }

        public Cliente GetOne(decimal clienteId)
        {
            
            return _context.Cliente.SingleOrDefault(x => x.Id == clienteId);
        }

        public void DeleteCliente(Cliente cliente)
        {
            _context.Cliente.Remove(cliente);
            _context.SaveChanges();
        }

        public Cliente UpdateCliente(ClienteCreateOrUpdateDate data)
        {
            var cliente = GetOne(data.Id);

            if (cliente != null)
            {
                cliente.Id = data.Id;
                cliente.IdPersona = data.IdPersona;

                _context.SaveChanges();
            }

            return cliente;
        }

        public Cliente CreateCliente(ClienteCreateOrUpdateDate data)
        {
            throw new NotImplementedException();
        }
    }
}
