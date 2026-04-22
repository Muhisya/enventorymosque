import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/inventorySlice";

const InventoryForm = () => {
  const [nama, setNama] = useState("");
  const [qty, setQty] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addItem({
        nama,
        qty,
      })
    );

    setNama("");
    setQty("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama Barang"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        type="number"
        placeholder="Kuantitas"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />

      <button type="submit">Tambah</button>
    </form>
  );
};

export default InventoryForm;