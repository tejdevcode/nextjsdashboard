"use client"
import ApexCharts from 'apexcharts'

interface Revenue {
   month: string,
   revenue: number
}
const Invoicechart = ({ revenue }: any) => {
   console.log(revenue)
   return (
      <div>Invoicechart</div>
   )
}

export default Invoicechart