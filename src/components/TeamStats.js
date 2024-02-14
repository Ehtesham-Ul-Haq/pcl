import React from 'react'
import '../styles/TeamPage.css';

export default function TeamStats({ data }) {
  return (
    <div>
      <h3>Top Stats</h3>
      <div className="table-div">
      <table className='custom-table'>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Top Scorers</th>
            <th>Top Wicket Takers</th>
            <th>Most Man of the Matches</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.SrNo}>
              <td>{item.SrNo}</td>
              <td>{item.scorer}</td>
              <td>{item.wicketTaker}</td>
              <td>{item.mostPotM}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
