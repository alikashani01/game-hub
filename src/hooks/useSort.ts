import useData from "./useData";

interface Sort {
    id: number;
    name: string;
    slug: string;
}


const useSort = () => useData<Sort>('/sorts/lists/parents')


export default useSort;