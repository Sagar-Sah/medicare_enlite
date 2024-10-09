import React, { useState } from 'react';
import {
  Button, MenuItem, FormControl, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import { JsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx'; // Ensure you have xlsx installed
import data from './data.json'; // Import your data from data.json

const Reports = () => {
  const [exportFormat, setExportFormat] = useState('PDF');

  const handleFormatChange = (event) => {
    setExportFormat(event.target.value);
  };

  // Function to export as PDF
  const handlePDFExport = () => {
    const pdf = new JsPDF();
    autoTable(pdf, {
      head: [['Date', 'Amount']],
      body: data.billingData.map(({ date, amount }) => [date, amount]),
    });
    pdf.save('billing_report.pdf');
  };

  // Function to export as CSV
  const handleCSVExport = () => {
    const csvData = data.billingData.map(({ date, amount }) => `${date},${amount}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'billing_report.csv');
  };

  // Function to export as Excel
  const handleExcelExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data.billingData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Billing Data');
    XLSX.writeFile(workbook, 'billing_report.xlsx');
  };

  const handleDownload = () => {
    if (exportFormat === 'PDF') {
      handlePDFExport();
    } else if (exportFormat === 'CSV') {
      handleCSVExport();
    } else if (exportFormat === 'Excel') {
      handleExcelExport();
    }
  };

  return (
    <div>
      <h2>Report and Performance Analytics Dashboard</h2>

      {/* Table to display billing details */}
      <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.billingData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dropdown for format selection */}
      <FormControl variant="outlined" style={{ minWidth: 120, marginBottom: '20px' }}>
        <Select value={exportFormat} onChange={handleFormatChange}>
          <MenuItem value="PDF">PDF</MenuItem>
          <MenuItem value="CSV">CSV</MenuItem>
          <MenuItem value="Excel">Excel</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleDownload}
      >
        Download Report
      </Button>
    </div>
  );
};

export default Reports;
