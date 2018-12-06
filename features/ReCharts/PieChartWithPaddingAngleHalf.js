import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from './../../components/recharts';

import colors from './../../core/colors';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200}
];

const COLORS = [colors['info-04'], colors['info-07'], colors['primary-08'], colors['purple']];

export const PieChartWithPaddingAngleHalf = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <PieChart>
            <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                stroke={ colors['white'] }
                outerRadius={80}
                startAngle={180}
                endAngle={0}
                fill="#8884d8"
                paddingAngle={5}
            >
                {
                    data.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
        </PieChart>
    </ResponsiveContainer>
);