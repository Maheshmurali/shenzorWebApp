'use client'
import { RadialBarChart, RadialBar,  ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'Total',
        number: 17,
        fill: '#e3e8ef',
      },
    {
      name: 'Products',
      number: 7,
      fill: '#1a1a1a',
    },
    {
      name: 'Service',
      number: 10,
      fill: '#EF3B3E',
    },
    
  ];
  


export default function Charts() {
  return (
    <div className='w-full h-[70%]'>
        <ResponsiveContainer width="100%" height="100%">
             <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                 <RadialBar
                     background
                      dataKey="number"
                  />
             </RadialBarChart>
         </ResponsiveContainer>
    </div>
    
  )
}
