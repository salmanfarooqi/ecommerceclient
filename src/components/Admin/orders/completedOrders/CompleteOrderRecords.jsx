import React from 'react'
// import '../cancelorder.css'

function  CompleteOrderRecords() {
  return (
    <>
    <div className="cancelorderwraper">
        <table>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>product</th>
                    <th>customer Name</th>
                    <th>customer Email</th>
                    <th>product price</th>
                    <th>payment</th>
                    <th>date</th>
                </tr>
            </thead>
            <tbody>
                <td>1</td>
                <td>laptop</td>
                <td>ahmad</td>
                <td>ahmad@gmail.com</td>
                <td>200$</td>
                <td>200$</td>
                <td>2-3-2023</td>
            </tbody>
        </table>
    </div>
    
    </>
  )
}

export default CompleteOrderRecords;