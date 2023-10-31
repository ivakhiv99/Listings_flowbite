import { Checkbox, Table } from 'flowbite-react';
import ListingTableItem, {listingStatus, toDoAction, ListingItem} from './ListingItem';
import styled from 'styled-components';
import { FaSort, FaSortUp } from 'react-icons/fa';

const StyledTableHead = styled(Table.Head)`
    th {
        background-color: #fff;
        border-bottom: solid #e5e7eb 1px;
    }
`;

const  ListingTable = () => {
    // In parrent component there would be some useEffect with request to backend to get table data and pass into ListingTable 
    const defaultTableData: ListingItem[] = [
        {
            picture: undefined,
            title: 'Hector Cave House',
            status: listingStatus.progress,
            todo: toDoAction.finish,
            instantBook: true,
            bedrooms: 1,
            beds: 1,
            baths: 1,
            location: 'Portland, OR',
        },
        {
            picture: undefined,
            title: 'Hector Cave House',
            status: listingStatus.progress,
            todo: toDoAction.finish,
            instantBook: true,
            bedrooms: 1,
            beds: 1,
            baths: 1,
            location: 'Portland, OR',
        },
        {
            picture: undefined,
            title: 'Hector Cave House',
            status: listingStatus.progress,
            todo: toDoAction.finish,
            instantBook: true,
            bedrooms: 1,
            beds: 1,
            baths: 1,
            location: 'Francfurt, Germany',
        },
        {
            picture: undefined,
            title: 'Hector Cave House',
            status: listingStatus.progress,
            todo: toDoAction.finish,
            instantBook: true,
            bedrooms: 1,
            beds: 1,
            baths: 1,
            location: 'Portland, OR',
        },
        {
            picture: undefined,
            title: 'Hector Cave House',
            status: listingStatus.progress,
            todo: toDoAction.finish,
            instantBook: true,
            bedrooms: 1,
            beds: 1,
            baths: 1,
            location: 'Portland, OR',
        },
    ];

  return (
    <Table hoverable>
      <StyledTableHead>
        <Table.HeadCell>
            <div className='flex flex-row items-center'>
                <Checkbox className='mr-3'/>
                <p className='mr-3'>Listing</p>
                <FaSort/>
            </div>
        </Table.HeadCell>
        <Table.HeadCell >
            <div className='flex flex-row items-center'>
                <p className='mr-3'>Status</p>
                <FaSort/>
            </div>
        </Table.HeadCell>
        <Table.HeadCell>
            To Do
        </Table.HeadCell>
        <Table.HeadCell>
            <div className='flex flex-row items-center'>
                <p className='mr-3'>Instant Book</p>
                <FaSortUp/>
            </div>
        </Table.HeadCell>
        <Table.HeadCell>
            <div className='flex flex-row items-center'>
                <p className='mr-3'>Bedrooms</p>
                <FaSort/>
            </div>
        </Table.HeadCell>
        <Table.HeadCell>
            <div className='flex flex-row items-center'>
                <p className='mr-3'>Beds</p>
                <FaSort/>
            </div>
        </Table.HeadCell>
        <Table.HeadCell>
            <div className='flex flex-row items-center'>
                <p className='mr-3'>Baths</p>
                <FaSort/>
            </div>
        </Table.HeadCell>
        <Table.HeadCell>
            <div className='w-full flex flex-row items-center'>
                <p className='mr-3'>Location</p>
                <FaSort/>
            </div>
        </Table.HeadCell>
      </StyledTableHead>
      <Table.Body className="divide-y">
        {defaultTableData.map((tableItem: ListingItem) => <ListingTableItem itemData={tableItem} />) }
      </Table.Body>
    </Table>
  )
};

export default ListingTable;
