import { Request, Response } from 'express';
import { createTableService, getAllTablesService, getTableByIdService, updateTableService, deleteTableService } from '../services/table.service';

export class TableController {
    async createTable(req: Request, res: Response) {
        try {
            const tableData = {
                ...req.body,
                createdAt: new Date()
            };
            const newTable = await createTableService(tableData);
            res.status(201).json(newTable);
        } catch (error: any) {
            res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
        }
    }

    async getAllTables(req: Request, res: Response) {
        try {
            const tables = await getAllTablesService();
            res.status(200).json(tables);
        } catch (error: any) {
            res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
        }
    }

    async getTableById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const table = await getTableByIdService(Number(id));
            res.status(200).json(table);
        } catch (error: any) {
            res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
        }
    }

    async updateTable(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tableData = req.body;
            const updatedTable = await updateTableService(Number(id), tableData);
            res.status(200).json(updatedTable);
        } catch (error: any) {
            res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
        }
    }

    async deleteTable(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await deleteTableService(Number(id));
            res.status(200).json(result);
        } catch (error: any) {
            res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
        }
    }
}

