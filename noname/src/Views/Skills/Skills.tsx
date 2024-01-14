import skills from "./skills.json";
import { Table } from 'antd';
import { useLocation } from "react-router-dom";
import Search from "../../Components/Search";
import { useCallback, useEffect, useState } from "react";
// \{ (.*): (.*) \},\n(.*)\{ (.*): (.*) \}   
// { "name": $1, "translation": $2, "info": $5}


export default function ShowAllSKills() {
  const allSkills: any[] = [];
  for (const [key, val] of Object.entries(skills)) {
    allSkills.push({ translation: val.ChineseName, info: val.info });
  }

  const [showSkills, setShowSkills] = useState<any[]>([]);

  let { state } = useLocation();

  const getSearchResults = useCallback((res: any[]) => {
    
  }, [])

  useEffect(() => {
    setShowSkills(allSkills);
  }, []);

  const columns = [
    {
      title: '技能名',
      dataIndex: 'translation',
      key: 'translation',
    },
    {
      title: '技能信息',
      dataIndex: 'info',
      key: 'info',
    }
  ]
  return (
    <>
      <Search searchArea={allSkills} value={state?.name} getSearchResults={getSearchResults} />
      <Table dataSource={showSkills} columns={columns} pagination={{ pageSize: 10 }}></Table>
    </>
  )
}