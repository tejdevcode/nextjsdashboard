import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <>
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`} >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme </p>
    </div>
      <p className='block text-lg pl-12 text-white w-full'>by Tej_R</p>
      </>
  );
}
