import React from 'react';
import './players.css';

import sortImg from '../../assets/images/sort.png';
import useSort from '../../hooks/useSort';
import captainImg from '../../assets/images/captain-band.png';

const Players = ({ players }) => {
    const { items, requestSort } = useSort(players);
    console.log('====================================');
    console.log(items);
    console.log('====================================');

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
                                <td>
                                    <div className='player-name'>
                                        <span> {item.name} </span> {item.captain && <img src={captainImg} alt='' />}
                                    </div>
                                </td>
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
