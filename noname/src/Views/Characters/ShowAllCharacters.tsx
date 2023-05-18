import { Table, Tag, Space } from 'antd';
import { ProfileOutlined } from '@ant-design/icons'

import characters from "./characters.json";

export default function ShowAllCharacters() {
  const skillColors = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
  function handleProfileClick() {
    alert("此部分还没有完成！")
  }

  const columns = [
    {
      title: '武将名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name < b.name ? 1 : -1,
      render: (name: string) => (<><Space>{name}<ProfileOutlined onClick={handleProfileClick} /></Space></>)
    },
    {
      title: '国家',
      dataIndex: 'nationality',
      key: 'nationality',
      filters: [
        {
          text: "蜀",
          value: "shu",
        },
        {
          text: "魏",
          value: "wei",
        },
        {
          text: "吴",
          value: "wu",
        },
        {
          text: "群",
          value: "qun",
        },
        {
          text: "晋",
          value: "jin",
        },
        {
          text: "秦",
          value: "qin",
        },
        {
          text: "神",
          value: "shen",
        },
      ],
      onFilter: (value: any, record: any) => record.nationality.indexOf(value) === 0,
      render: (nationality: string) => (
        <>
          {nationality === "shu" ? <Tag color="red">蜀</Tag> : nationality === "wei" ? <Tag color="blue">魏</Tag>
            : nationality === "wu" ? <Tag color="green">吴</Tag> : nationality === "qun" ? <Tag>群</Tag>
              : nationality === "jin" ? <Tag color="purple">晋</Tag> : nationality === "daqin" ? <Tag color="lime">秦</Tag>
                : <Tag color="gold">神</Tag>}
        </>)

    },
    {
      title: "扩展包",
      dataIndex: "ex_package",
      key: "ex_package"
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: "gender",
      filters: [
        {
          text: "男",
          value: "male",
        },
        {
          text: "女",
          value: "female",
        },
        {
          text: "无性别",
          value: "none",
        },
      ],
      onFilter: (value: any, record: any) => record.gender.indexOf(value) === 0,

      render: (gender: string) => (
        <>
          {gender === "male" ? <Tag color="blue">男</Tag> : gender === "female" ? <Tag color="pink">女</Tag> : <Tag color="green">无性别</Tag>}
        </>)

    },
    {
      title: "血量",
      dataIndex: "hp",
      key: "hp",
      sorter: (a: any, b: any) => Number(a) - Number(b),

    },
    {
      title: "技能",
      dataIndex: "skills",
      key: "skills",
      render: (skills: string[]) => (
        <>
          {skills.map((val, idx) => <Tag color={skillColors[idx % 11]}>{val}</Tag>)}
        </>)
    },
    {
      title: "强度",
      dataIndex: "strength",
      key: "strength"
    },
  ];

  return (
    <>
      <Table dataSource={characters.details} columns={columns} pagination={{ pageSize: 10 }}></Table>
    </>
  )
}