import React from 'react';
import './players.css';

import sortImg from '../../assets/images/sort.png';
import useSort from '../../hooks/useSort';

const Players = ({ players }) => {
    const { items, requestSort } = useSort(players);
    return (
        <div className='players'>
            <div className='table'>
                <table>
                    <thead>
                        <th>
                            <div className='theader' onClick={() => requestSort('name')}>
                                <span>Name</span> <img src={sortImg} alt='' />
                            </div>
                        </th>
                        <th>
                            <div className='theader' onClick={() => requestSort('lastName')}>
                                <span>Surname</span> <img src={sortImg} alt='' />
                            </div>
                        </th>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.lastName}</td>
                            </tr>
                        ))}
                        {items.length <= 0 && (
                            <tr>
                                <td colSpan={2}>No Data</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Players;
