import skills from "./skills.json";
import { Table } from 'antd';
// \{ (.*): (.*) \},\n(.*)\{ (.*): (.*) \}   
// { "name": $1, "translation": $2, "info": $5}


export default function ShowAllSKills() {
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
      <Table dataSource={skills.details} columns={columns} pagination={{ pageSize: 10 }}></Table>
    </>
  )
}