using GameStore.Models;
using GameStore.Models.DataTransfers;

namespace GameStore.Services.Interfaces
{
    public interface IClienteServices
    {
        IEnumerable<Cliente> GetAll();

        Cliente GetOne(decimal clienteId);

        void DeleteCliente(Cliente cliente);

        Cliente UpdateCliente(ClienteCreateOrUpdateDate data);

        Cliente CreateCliente(ClienteCreateOrUpdateDate data);
    }
}
