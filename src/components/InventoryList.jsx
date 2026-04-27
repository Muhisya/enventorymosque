import { useSelector } from "react-redux";

const InventoryList = () => {
  const items = useSelector((state) => state.inventory);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-emerald-50 text-emerald-900 uppercase text-xs font-bold">
          <tr>
            <th className="px-6 py-4">Nama Barang</th>
            <th className="px-6 py-4">Kuantitas</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-emerald-50">
          {items.length === 0 ? (
            <tr>
              <td colSpan="3" className="px-6 py-10 text-center text-gray-400 italic">
                Belum ada data barang masuk.
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id} className="hover:bg-emerald-50/30 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-800">{item.nama}</td>
                <td className="px-6 py-4 text-gray-600">{item.qty} pcs</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                    Tersedia
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;