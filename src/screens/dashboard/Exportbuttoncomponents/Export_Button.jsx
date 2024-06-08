import React from 'react'
import { Button } from 'react-bootstrap';
import * as XLSX from 'xlsx';

function Export_Button({data, name}) {
    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, name);
        XLSX.writeFile(workbook, `${name}.xlsx`);
    };
  return (
    <>
    <Button variant='primary' style={{ backgroundColor: '#4848d1', color: 'white' }} onClick={handleExport}>Export</Button>
    </>
  )
}

export default Export_Button
