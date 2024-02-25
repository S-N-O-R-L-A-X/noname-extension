import { AutoComplete, Input, SelectProps } from "antd";
import { SearchProps as AntSearchProps } from "antd/es/input";
import { useState } from "react";

interface SearchProps extends AntSearchProps {
  searchArea: any[];
  showResultComponent?: JSX.Element;
}

const getSearchResult = (searchArea: any[], query: string) => {
  const arr = searchArea.filter(item => {
    let ret = false;
    const foundValues = [];
    for (const [key, value] of Object.entries(item)) {
      if (value!.toString().indexOf(query) !== -1) {
        ret = true;
        foundValues.push(value);
      }
    }
    item.foundValues = foundValues;
    return ret;
  });
  return arr;
}

interface ShowTemplateProps {
  where: string;
  foundValues: any[];
}

function ShowTemplate(props: ShowTemplateProps) {
  const { where, foundValues } = props;
  return <span>在"{where}"中找到{foundValues.join(" ")}</span>;
}

export default function Search(props: SearchProps) {
  // called when clicking search
  const { searchArea, value, showResultComponent } = props;

  const Show = (showResultComponent ?? ShowTemplate) as any;

  const searchResult = (query: string) => {
    const arr = getSearchResult(searchArea, query);

    return arr.map((item) => {
      return {
        value: item.ChineseName,
        label: (
          <div>
            <span>
              <Show where={item.ChineseName} foundValues={item.foundValues} />
            </span>
          </div>
        )
      }
    })
  }

  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <AutoComplete options={options} value={value} onSearch={handleSearch}>
      <Input.Search size="middle" placeholder="input here" allowClear enterButton />
    </AutoComplete>
  )
}