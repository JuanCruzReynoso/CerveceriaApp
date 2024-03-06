import { getMarcas } from "../services/marca.js";
import { useState, useEffect } from "react";

export function ListMarcas() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    // Call the getMarcas function here and update state with the result
    const fetchData = async () => {
      try {
        const result = await getMarcas();
        setMarcas(result); // Update state with fetched marcas
      } catch (error) {
        console.error("Error fetching marca:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Marcas</h2>
      <ul>
        {marcas.map((marca) => (
          <li key={marca.id}>
            <b>
              {marca.id} - {marca.nombre}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
}
