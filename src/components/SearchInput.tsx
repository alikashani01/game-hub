import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (keyword: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (inputRef.current) onSearch(inputRef.current.value);
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={inputRef}
                    borderRadius="10px"
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
