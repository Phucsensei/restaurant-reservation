import { Table, createTable, findTableByNumber, getAllTables, getTableById, updateTable, deleteTable } from '../models/table.model';

export const createTableService = async (tableData: Omit<Table, 'id'>) => {
    // Check if table number already exists
    const existingTable = await findTableByNumber(tableData.number);
    if (existingTable) {
        throw { status: 400, message: 'Table number already exists' };
    }

    // Create new table
    const newTable = await createTable(tableData);
    return newTable;
};

export const getAllTablesService = async () => {
    const tables = await getAllTables();
    return tables;
};

export const getTableByIdService = async (id: number) => {
    const table = await getTableById(id);
    if (!table) {
        throw { status: 404, message: 'Table not found' };
    }
    return table;
};

export const updateTableService = async (id: number, tableData: Partial<Table>) => {
    // If updating table number, check if new number already exists
    if (tableData.number) {
        const existingTable = await findTableByNumber(tableData.number);
        if (existingTable && existingTable.id !== id) {
            throw { status: 400, message: 'Table number already exists' };
        }
    }

    const updatedTable = await updateTable(id, tableData);
    if (!updatedTable) {
        throw { status: 404, message: 'Table not found' };
    }
    return updatedTable;
};

export const deleteTableService = async (id: number) => {
    const deleted = await deleteTable(id);
    if (!deleted) {
        throw { status: 404, message: 'Table not found' };
    }
    return { message: 'Table deleted successfully' };
};

