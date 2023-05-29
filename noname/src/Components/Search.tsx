import { AutoComplete, Input, InputProps, SelectProps } from "antd";
import { BaseSyntheticEvent, useState } from "react";
const { Search: AntSearch } = Input;

interface SearchProps extends InputProps {
  searchArea: any[];
}

export default function Search(props: SearchProps) {
  const { searchArea } = props;
  console.log(searchArea)
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

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  // called when clicking search
  function onSearch(value: string) {
    console.log(value);
  }
  return (
    <AutoComplete options={options}
      onSelect={onSelect}
      onSearch={handleSearch}>
      <AntSearch placeholder="search" onSearch={onSearch} allowClear enterButton />
    </AutoComplete>
  )
}