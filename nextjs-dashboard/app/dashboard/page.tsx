import { Suspense } from 'react';
import { fetchLatestInvoices } from '../lib/data';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';

export default async function Page() {
  // const res = await fetch('https://api.example.com');
  // const json = await res.json();
  // console.log(json)

  // await fetch('/api/dashboard')

//   const revenue = await fetchRevenue();
//   const latestInvoices = await fetchLatestInvoices();

  return (
    <div>
      <Suspense fallback={<RevenueChartSkeleton/>}>
        <RevenueChart></RevenueChart>
      </Suspense>
      <hr
        style={{
          marginBottom: '1rem',
          borderWidth: '3px',
          color: '#252440',
          backgroundColor: 'blueviolet',
          overflow: 'hidden',
        }}
      />
      <Suspense fallback={<LatestInvoicesSkeleton></LatestInvoicesSkeleton>}>
      <LatestInvoices> </LatestInvoices>
      </Suspense>
    </div>
  );
}
