import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/inventorySlice";

const InventoryForm = () => {
  const [nama, setNama] = useState("");
  const [qty, setQty] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !qty) return;

    dispatch(
      addItem({
        id: Date.now(),
        nama,
        qty: Number(qty),
      })
    );

    setNama("");
    setQty("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-emerald-900 mb-1">Nama Barang</label>
          <input
            type="text"
            placeholder="Contoh: Sajadah"
            className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div className="w-full md:w-32">
          <label className="block text-sm font-medium text-emerald-900 mb-1">Kuantitas</label>
          <input
            type="number"
            placeholder="0"
            className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-8 rounded-lg transition-colors shadow-lg shadow-emerald-200"
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;