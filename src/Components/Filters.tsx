import { Button, TextInput } from 'flowbite-react';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import {CustomDropdown} from './common';
import styled from 'styled-components';

const StyledInput = styled(TextInput)`
	&&& input {
		border-radius: 50px;
		background-color: #fff;
		height: 40px;
		width: 400px;
	}
`;

const placeholderNumberOfListings: number = 3;

const Filters = () => (
	<div className="w-full flex flex-row justify-between items-center">
    	<div className='pb-10 flex-wrap'>
			<h3 className='pb-5 font-bold text-2xl'>{placeholderNumberOfListings} listings</h3>
			<div className="flex flex-row justify-between">
				<div className="flex flex-row flex-around">
					<div className='mr-10'>
						<StyledInput
							className="rounded-full"
							icon={AiOutlineSearch}
							placeholder="Search listings"
							type="text"
						/>
					</div>
					<CustomDropdown title='Rooms and beds'/>
					<CustomDropdown title='Amenities'/>
					<CustomDropdown title='Listing status'/>
					<CustomDropdown title='More filters'/>
				</div>

			</div>
    	</div>
		<Button color="light" className='mb-[20px]'>
			<AiOutlinePlus className='mr-2'/>
			<p className='text-slate-400'>Create listing</p>
		</Button>
	</div>
);

export default Filters;