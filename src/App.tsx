import { Header, Filters, ListingTable } from './Components'

function App() {

  return (
    <div className='h-screen w-screen pt-10 pr-10 pl-10 pb-10 bg-neutral-100'>
		<div className=' bg-white pt-[10px] pr-[70px] pl-[70px] pb-[10px] mb-[1px]'>
			<Header/>
		</div>
		<div className='bg-white pt-10 pr-8 pl-8 pb-10'>
			<Filters/>
			<ListingTable/>
		</div>
    </div>
  )
}

export default App
