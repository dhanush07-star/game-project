import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';

export default function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevence
      </MenuButton>
      <MenuList >
       <MenuItem>Relevance</MenuItem>
       <MenuItem>Date Added</MenuItem>
       <MenuItem>Name</MenuItem>
       <MenuItem>Release Data</MenuItem>
       <MenuItem>Popularity</MenuItem>
       <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
}
