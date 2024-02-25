import skills from "./skills.json";
import { Table } from 'antd';
import { useLocation } from "react-router-dom";
import Search from "../../Components/Search";
import { useCallback, useEffect, useState } from "react";
// \{ (.*): (.*) \},\n(.*)\{ (.*): (.*) \}   
// { "name": $1, "translation": $2, "info": $5}


export default function ShowAllSKills() {
  const allSkills: any[] = [];
  for (const [_, val] of Object.entries(skills)) {
    allSkills.push({ ChineseName: val.ChineseName, info: val.info });
  }

  const [showSkills, setShowSkills] = useState<any[]>([]);

  let { state } = useLocation();

  useEffect(() => {
    setShowSkills(allSkills);
  }, []);

  const columns = [
    {
      title: '技能名',
      dataIndex: 'ChineseName',
      key: 'ChineseName',
    },
    {
      title: '技能信息',
      dataIndex: 'info',
      key: 'info',
    }
  ]
  return (
    <>
      <Search searchArea={allSkills} value={state?.name} />
      <Table dataSource={showSkills} columns={columns} pagination={{ pageSize: 10 }}></Table>
    </>
  )
}