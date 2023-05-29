import skills from "./skills.json";
import { Table } from 'antd';
import { useLocation } from "react-router-dom";
import Search from "../../Components/Search";
// \{ (.*): (.*) \},\n(.*)\{ (.*): (.*) \}   
// { "name": $1, "translation": $2, "info": $5}


export default function ShowAllSKills() {
  const allSkills: any[] = [];
  skills.details.forEach(({ name }) => {
    allSkills.push(name);
  })
  let { state } = useLocation();
  console.log(state);
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
      <Search searchArea={allSkills} value={state?.name} />
      <Table dataSource={skills.details} columns={columns} pagination={{ pageSize: 10 }}></Table>
    </>
  )
}