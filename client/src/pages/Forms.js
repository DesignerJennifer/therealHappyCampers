import React from 'react';
// import Link from '@material-ui/core/Link';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Button from '@material-ui/core/Button';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import '../App.css';

function createData(id, form, dueDate, status, file) {
  return { id, form, dueDate, status, file };
}

const rows = [
  createData(0, 'Camper Registration Form', 'June 1, 2020', 'Complete'),
  createData(1, 'Health Form', 'June 1, 2020', 'Complete'),
  createData(2, 'Parent/Gardian Contact Form', 'June 1, 2020', 'Complete'),
  createData(3, 'Activity Permissions Form', 'June 1, 2020', 'Incomplete'),
  createData(4, 'Spiritwear Order Form', 'June 15, 2020', 'Incomplete'),
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Camper Information</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Forms</TableCell>
            <TableCell>Due Dates</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.form}</TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  className="formFile"
                  startIcon={<InsertDriveFileIcon />}>
                  Form
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
