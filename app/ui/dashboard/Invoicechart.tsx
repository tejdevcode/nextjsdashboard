"use client"

import dynamic from 'next/dynamic'
import { ApexOptions } from "apexcharts";
import { useState } from "react";

interface Revenue {
   month: string,
   revenue: number
}
interface InvoiceChartProps {
   revenue: Revenue[];
}
const Invoicechart = ({ revenue }: InvoiceChartProps) => {
   /* console.log(revenue) */
   const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
   const revenuesmonth = revenue.map((item: Revenue) => item.month);
   const revenuesinfo = revenue.map((item: Revenue) => item.revenue / 100);

   const [state, setState] = useState({
      series: [{
         name: '',
         data: revenuesinfo
      }],

      options: {
         chart: {
            height: 250,
            type: 'area',
            zoom: {
               enabled: false,
            },
            toolbar: {
               show: false,
            },
         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            curve: 'smooth'
         },
         xaxis: {
            categories: revenuesmonth,
            tooltip: {
               enabled: false
            }
         },
         yaxis: {
            labels: {
               formatter: (value: number) => { return `$${value}k` },
            }
         },
         tooltip: {
            enabled: true,
            marker: {
               show: false,
            },
         }
      } as ApexOptions
   });
   return (
      <div id="chart">
         <Chart options={state.options} series={state.series} type='area' className='radialchart' />
      </div>
   )
}

export default Invoicechart