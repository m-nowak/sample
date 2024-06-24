'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Button } from '../ui/button'

const data = [
    {
        name: "Jun 27",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun 21",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun 22",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun 23",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun 24",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun 25",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun 26",
        total: Math.floor(Math.random() * 5000) + 1000,
    }

]

export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={250}>
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



const ProductionCard = () => {
    return (
        <div><Card className='w-[420px] h-[381px]'>
            <CardHeader>
                <CardTitle>
                    <div className='flex justify-between items-center py-2'>
                        <span>Production</span>
                        <Button disabled variant="ghost">7 days</Button>
                    </div>
                </CardTitle>

            </CardHeader>
            <CardContent>

                <Overview />

            </CardContent>

        </Card>
        </div>
    )
}

export default ProductionCard