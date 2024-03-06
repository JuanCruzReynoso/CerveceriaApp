const PORT = 7274;
const MARCA_URL = `https://localhost:${PORT}/api/Marca`;

//Version get javascript puro
export const getMarcas = async () => {
  try {
    const response = await fetch(MARCA_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching marca:", error);
    throw error;
  }
};

//Version get axios
// import axios from "axios";
// export const getMarcas = async () => {
//   try {
//     const response = await axios.get(MARCA_URL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching marca:", error);
//     throw error;
//   }
// };

export const createMarca = async (marcaData) => {
  // Fetch logic for creating a new marca
};

export const updateMarca = async (id, updatedMarcaData) => {
  // Fetch logic for updating an existing marca
};

export const deleteMarca = async (id) => {
  // Fetch logic for deleting a marca by ID
};
