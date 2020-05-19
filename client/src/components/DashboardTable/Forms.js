import React from 'react';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../DashboardTitles/Title';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

function createData(id, form, dueDate, status, file) {
  return { id, form, dueDate, status, file };
}
const useStyles = makeStyles(theme => ({
  table: {
    float: 'left',
    inlineSize: 'inherit',
  },
  buttonDiv: {
    float: 'right',
    inlineSize: 'inherit',
    marginTop: '62px',
    paddingLeft: '40px',
  },
  buttons: {
    marginTop: '3px',
    marginBottom: '3px',
    height: '30px',
    backgroundColor: '#002f6c !important',
    color: 'white !important',
  },
}));

const rows = [
  createData(0, 'Camper Registration Form', 'June 1, 2020', 'Complete'),
  createData(1, 'Health Form', 'June 1, 2020', 'Being Reviewed'),
  createData(2, 'Parent/Gardian Contact Form', 'June 1, 2020', 'Complete'),
  createData(3, 'Activity Permissions Form', 'June 1, 2020', 'Incomplete'),
  createData(4, 'Spiritwear Order Form', 'June 15, 2020', 'Incomplete'),
];

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Camper Information</Title>
      <Container maxWidth="lg">
        <Grid item xs={10} className={classes.table}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Forms</TableCell>
                <TableCell>Due Dates</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.form}</TableCell>
                  <TableCell>{row.dueDate}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={2} className={classes.buttonDiv}>
          <Button
            variant="contained"
            target="_blank"
            href="https://forms.gle/BccVWTfsc84M4E1F8"
            className={classes.buttons}
            startIcon={<InsertDriveFileIcon />}>
            Form
          </Button>
          <Button
            variant="contained"
            target="_blank"
            href="https://forms.gle/PP6r6HzTpsQyjHCC9"
            className={classes.buttons}
            startIcon={<InsertDriveFileIcon />}>
            Form
          </Button>
          <Button
            variant="contained"
            target="_blank"
            href="https://forms.gle/aht4JPpjKwe5gGnH6"
            className={classes.buttons}
            startIcon={<InsertDriveFileIcon />}>
            Form
          </Button>
          <Button
            variant="contained"
            target="_blank"
            href="https://forms.gle/F2VeQNRCudbEwGkG7"
            className={classes.buttons}
            startIcon={<InsertDriveFileIcon />}>
            Form
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
