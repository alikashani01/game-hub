import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton rightIcon={<BsChevronDown />} as={Button}>
                Sort
            </MenuButton>
            <MenuList>
                <MenuItem>Best</MenuItem>
                <MenuItem>Price</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
