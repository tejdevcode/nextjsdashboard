
import Table from '@/app/ui/customers/table';
import Pagination from '@/app/ui/invoices/pagination';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';


const Page = async (props: {
  searchParams?: Promise<{ query?: string; page?: string; }>; }) => {
     const searchParams = await props.searchParams;
     const query = searchParams?.query || '';
     const currentPage = Number(searchParams?.page) || 1;
     const customers = await fetchFilteredCustomers(query);
     /* const customers = await fetchCustomers(); */
  return (
    <div className="w-full">      
       <Suspense key={query + currentPage} fallback={'Loading...'}>
        <Table  customers={customers} />
      </Suspense>
      {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  )
}

export default Page