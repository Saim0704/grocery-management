import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const InventoryPage = () => {
  const inventory = [
    { id: 1, name: 'Apple', stock: 50, price: 1.2 },
    { id: 2, name: 'Milk', stock: 20, price: 0.8 },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Inventory</Typography>
      <Button variant="contained" color="primary" style={{ marginBottom: '16px' }}>
        Add Item
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventory.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.stock}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default InventoryPage;
