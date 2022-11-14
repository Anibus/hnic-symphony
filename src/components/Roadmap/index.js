import React from 'react';
import { Box } from '@chakra-ui/react';

export default function Roadmap() {
    return (
        <div className="container">
            <div className="heading" >
                Roadmap to Launch
            </div>

            <Box fontSize={['sm', 'md']}>
                <table className="roadMapTable">
                    <tbody>
                        <tr className="old">
                            <td>APRIL 2021</td>
                            <td> ✓ </td>
                            <td>Introduced Symphony Finance</td>
                        </tr>
                        <tr className="old">
                            <td style={{ color: '#6a854c' }}>
                                <b>MAY 2021</b>
                            </td>
                            <td> ✓ </td>
                            <td>
                                <b>Testnet Launch</b>
                            </td>
                        </tr>
                        <tr className="current">
                            <td>Sept 2021</td>
                            <td> </td>
                            <td>Mainnet Launch</td>
                        </tr>
                        <tr className="new">
                            <td>Qz 202b</td>
                            <td> </td>
                            <td>Governance / Staking Launch</td>
                        </tr>
                        <tr className="new">
                            <td>Qz 202c</td>
                            <td> </td>
                            <td>Multichain Support</td>
                        </tr>
                        <tr className="new">
                            <td>Qb 202d</td>
                            <td> </td>
                            <td>Multiple Adapter Support</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </div>
    );
}
