import { useSelector } from "react-redux";

const InventoryList = () => {
  const items = useSelector((state) => state.inventory.items);

  return (
    <div>
      <h2>Daftar Barang</h2>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Kuantitas</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;