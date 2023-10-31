import { Button, Checkbox, Table } from 'flowbite-react';
import { FC } from 'react';

export enum listingStatus {
    progress = 'In progress',
    other = 'Other status',
}

export enum toDoAction {
    finish = 'Finish',
    other = 'Other acion',
}

export type ListingItem = {
    picture?: string;
    title: string;
    status: listingStatus;
    todo: toDoAction;
    instantBook: boolean;
    bedrooms: number;
    beds: number;
    baths: number;
    location: string;
}

interface IListingTableItem {
    itemData: ListingItem;
}

const ListingTableItem:FC<IListingTableItem> = ({itemData}) => {
    const {
        title,
        status,
        todo,
        instantBook,
        bedrooms,
        beds,
        baths,
        location,
    } = itemData;
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex flex-row items-center">
                <Checkbox />
                <div className='bg-slate-100 h-[40px] w-[60px] mr-2 ml-2'  />
                <p className='font-semibold '>{title}</p>
            </Table.Cell>
            <Table.Cell>
                <p className='font-semibold '>{status}</p>
            </Table.Cell>
            <Table.Cell>
                <Button color="light">
                    <p className='font-semibold '>{todo}</p>
                </Button>
            </Table.Cell>
            <Table.Cell>
                <div className="flex flex-row items-center">
                    <Checkbox
                        className='mr-2'
                        checked={instantBook}
                        
                    />
                    <p className='font-semibold '>{instantBook ? 'On' : 'Off'}</p>
                </div>
            </Table.Cell>
            <Table.Cell>
                <p className='font-semibold '>{bedrooms}</p>
            </Table.Cell>
            <Table.Cell>
                <p className='font-semibold '>{beds}</p>
            </Table.Cell>
            <Table.Cell>
                <p className='font-semibold '>{baths}</p>
            </Table.Cell>
            <Table.Cell>
                <p className='font-semibold '>{location}</p>
            </Table.Cell>
        </Table.Row>
    )
};

export default ListingTableItem;
