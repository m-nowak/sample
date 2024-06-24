'use client'
import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Button } from '../ui/button'

const data = [
    {
        name: "June 18",
        total: 5,
    },
    {
        name: "June 19",
        total: 4,
    },
    {
        name: "June 20",
        total: 7,
    },
    {
        name: "June 21",
        total: 2,
    },
    {
        name: "June 22",
        total: 4,
    },
    {
        name: "Jun 23",
        total: 1,
    }
    ,
    {
        name: "Jun 24",
        total: 1,
    }

]

export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={100}>
            <BarChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}



const BreakDownsCard = () => {
    return (
        <div><Card className='w-[420px] h-[201px]'>
            <CardHeader>
                <CardTitle>
                    <div className='flex justify-between text items-center py-2'>
                        <span>Breakdowns</span>
                        <Button disabled variant="ghost">7 days</Button>
                    </div>
                </CardTitle>

            </CardHeader>
          
                <Overview />

        </Card>
        </div>
    )
}

export default BreakDownsCard