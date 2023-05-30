import skills from "./skills.json";
import { Table } from 'antd';
import { useLocation } from "react-router-dom";
import Search from "../../Components/Search";
import { useCallback, useEffect, useState } from "react";
// \{ (.*): (.*) \},\n(.*)\{ (.*): (.*) \}   
// { "name": $1, "translation": $2, "info": $5}


export default function ShowAllSKills() {
  const allSkills: any[] = [];
  skills.details.forEach(({ name }) => {
    allSkills.push(name);
  })

  const [showSkills, setShowSkills] = useState<any[]>([]);

  let { state } = useLocation();

  const getSearchResults = useCallback((res: any[]) => {
    console.log(res);
    if (res) {
      const ret: any[] = [];
      res.forEach((skill) => {
        skills.details.forEach(({ name, translation, info }) => {
          if (skill === name) {
            ret.push({ translation, info });
          }
        })
      })
      setShowSkills(ret);
    }
  }, [])

  useEffect(() => {
    setShowSkills(skills.details);
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