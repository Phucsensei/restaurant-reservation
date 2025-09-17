import { pool } from '../config/db';

export interface Table {
    id: number;
    number: string;
    capacity: number;
    minGuests?: number;
    type: string;
    section: string;
    location: string;
    isWindow: boolean;
    pricePerSlot: number;
    image: string;
    description: string;
    status: string;
    availableFrom?: string;
    availableTo?: string;
    createdAt: Date;
    updatedAt: Date;
}

export const createTable = async (table: Omit<Table, 'id'>): Promise<Table> => {
    const result = await pool.query(
        `INSERT INTO tables (
            number, 
            capacity,
            min_guests,
            type,
            section,
            location,
            is_window,
            price_per_slot,
            image,
            description,
            status,
            available_from,
            available_to
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) 
        RETURNING *`,
        [
            table.number,
            table.capacity,
            table.minGuests || 1,
            table.type,
            table.section,
            table.location,
            table.isWindow,
            table.pricePerSlot,
            table.image,
            table.description,
            table.status || 'available',
            table.availableFrom || '10:00',
            table.availableTo || '22:00'
        ]
    );

    return result.rows[0];
};

export const findTableByNumber = async (number: string): Promise<Table | null> => {
    const result = await pool.query(
        'SELECT * FROM tables WHERE number = $1',
        [number]
    );

    return result.rows[0] || null;
};

export const getAllTables = async (): Promise<Table[]> => {
    const result = await pool.query('SELECT * FROM tables ORDER BY created_at DESC');
    return result.rows;
};

export const getTableById = async (id: number): Promise<Table | null> => {
    const result = await pool.query(
        'SELECT * FROM tables WHERE id = $1',
        [id]
    );

    return result.rows[0] || null;
};

export const updateTable = async (id: number, table: Partial<Table>): Promise<Table | null> => {
    const currentTable = await getTableById(id);
    if (!currentTable) return null;

    const updates: string[] = [];
    const values: any[] = [];
    let valueCount = 1;

    // Build dynamic update query
    Object.entries(table).forEach(([key, value]) => {
        if (value !== undefined) {
            updates.push(`${key} = $${valueCount}`);
            values.push(value);
            valueCount++;
        }
    });

    if (updates.length === 0) return currentTable;

    values.push(id);
    const query = `
        UPDATE tables 
        SET ${updates.join(', ')}
        WHERE id = $${valueCount}
        RETURNING *
    `;

    const result = await pool.query(query, values);
    return result.rows[0];
};

export const deleteTable = async (id: number): Promise<boolean> => {
    const result = await pool.query(
        'DELETE FROM tables WHERE id = $1 RETURNING id',
        [id]
    );

    return (result.rowCount ?? 0) > 0;
};
