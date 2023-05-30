import { AutoComplete, Input, SelectProps } from "antd";
import { SearchProps as AntSearchProps } from "antd/es/input";
import { useState } from "react";
const { Search: AntSearch } = Input;

interface SearchProps extends AntSearchProps {
  searchArea: any[];
  getSearchResults?: Function;
}

export default function Search(props: SearchProps) {
  // called when clicking search
  const { searchArea, value, getSearchResults, } = props;
  let { onSearch = (val: string) => { console.log(val) } } = props;
  const searchResult = (query: string) => {
    const arr = searchArea.filter(item => item.indexOf(query) !== -1);
    return arr.map((val) => {
      return { value: val, label: (<span>{val}</span>) }
    })
  }

  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  if (getSearchResults) {
    onSearch = (val) => {
      getSearchResults(searchArea.filter(item => item && item.indexOf(val) !== -1));
    }
  }

  return (
    <AutoComplete options={options} value={value} onSearch={handleSearch}>
      <AntSearch placeholder="search" onSearch={onSearch} allowClear enterButton />
    </AutoComplete>
  )
}