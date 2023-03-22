import React from 'react'
import './Style.css'
export default function Submit(props) {
  return (
    <>
    <div className='div'>
      <center>
      <h1 className='h1'>Student Details</h1>
      <table border={1} cellPadding={30} cellSpacing={0}>
        <tr>
          <th>Name</th>
          <td>{props.name}</td>
        </tr>
        <tr>
          <th>USN</th>
          <td>{props.usn}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{props.email}</td>
        </tr>
        <tr>
          <th>Fee Paid</th>
          <td>{props.fee}</td>
        </tr>
      </table>
      </center>
    </div>
    </>
  )
}
