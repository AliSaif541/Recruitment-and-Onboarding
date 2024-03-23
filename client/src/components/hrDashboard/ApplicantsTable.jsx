import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { Link } from "react-router-dom";

const columns = [
  { id: 'name', label: 'Name', width: 150 },
  { id: 'contact_number', label: 'Contact Number', width: 150 },
  { id: 'years_of_exp', label: 'Years Of Experience', width: 150 },
  { id: 'email', label: 'Email', width: 150 },
  { id: 'gpa', label: 'GPA', width: 100 },
];

const ApplicantsTable = ({ applicants, setCurrentApplicant }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (applicant) => {
    setCurrentApplicant({
      _id: applicant._id,
      name: applicant.name,
      email: applicant.email,
      contact_number: applicant.contact_number,
      gender: applicant.gender,
      city: applicant.city,
      GitHub: applicant.GitHub,
      LinkedIn: applicant.LinkedIn,
      years_of_exp: applicant.years_of_exp,
      cover_letter: applicant.cover_letter,
      education: applicant.education,
      experience: applicant.experience,
      skills: applicant.skills,
      resume: applicant.resume,
      rating: applicant.rating,
      stage: applicant.stage,
      jobID: applicant.jobID,
    });
  };

  return (
    <Paper className="ApplicantsTable" sx={{ width: '95%', maxHeight: '95%' }}>
      <TableContainer sx={{maxHeight: '95%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ width: column.width, height: '25px', background: '#7CD3D2', color: 'white', }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
            <TableBody>
              {applicants
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((applicant, index) => (
                  <Link className="Link" to={`/user/${index}`}> 
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={applicant.email}
                      onClick={() => handleClick(applicant)}
                    >
                      {columns.map((column) => {
                        const value = applicant[column.id];
                        return (
                          <TableCell key={column.id} align="center">
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </Link>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={applicants.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ApplicantsTable;
