import express from 'express';
import { TableController } from '../controllers/table.controller';
import { authenticateToken, authorizeRoles } from '../middleware/auth.middleware';

const router = express.Router();
const tableController = new TableController();

// Create a new table (Admin only)
router.post('/', authenticateToken, authorizeRoles('admin'), tableController.createTable);

// Get all tables
router.get('/', tableController.getAllTables);

// Get a specific table
router.get('/:id', tableController.getTableById);

// Update a table (Admin only)
router.put('/:id', authenticateToken, authorizeRoles('admin'), tableController.updateTable);

// Delete a table (Admin only)
router.delete('/:id', authenticateToken, authorizeRoles('admin'), tableController.deleteTable);

export default router;
