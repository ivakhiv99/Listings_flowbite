import { Dropdown } from 'flowbite-react';
import { FC } from 'react';

interface ICustomDropdown {
	title: string;
	options?: string[];
}

const placeholderDropdownOptions: string[] = [
	'lorem',
	'ipsum',
	'sit',
	'amet'
];

const CustomDropdown:FC<ICustomDropdown> = ({title, options = placeholderDropdownOptions}) => (
	<div className='mr-5 rounded-full'>
		<Dropdown pill color='light' label={title}>
			{options.map((optionTitle) => (
				<Dropdown.Item>{optionTitle}</Dropdown.Item>
			)) }
		</Dropdown>
	</div>
);

export default CustomDropdown;
