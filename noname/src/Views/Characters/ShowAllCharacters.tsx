import { Table, Tag } from 'antd';

import characters from "./characters.json";
export default function ShowAllCharacters() {
  const skillColors = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
  const columns = [
    {
      title: '武将名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: string, b: string) => a < b,
    },
    {
      title: '国家',
      dataIndex: 'nationality',
      key: 'nationality',
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
      sorter: (a: string, b: string) => Number(a) - Number(b),

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
      title: "做题情况",
      dataIndex: "situation",
      key: "situation",
      filters: [
        {
          text: "自己做出",
          value: "自己做出",
        },
        {
          text: "看思路写出",
          value: "看思路写出",
        },
        {
          text: "看懂答案",
          value: "看懂答案",
        },
        {
          text: "没看懂答案",
          value: "没看懂答案",
        },
      ],
      onFilter: (value: any, record: any) => record.situation.indexOf(value) === 0,
      render: (situation: string) => (
        <>
          {situation === "自己做出" ? <Tag color="green">自己做出 ✅</Tag> : situation === "看思路写出" ? <Tag color="yellow">看思路写出 ⚡</Tag> : situation === "看懂答案" ? <Tag color="blue">看懂答案 🆗</Tag> : <Tag color="red">没看懂答案 ❌</Tag>}
        </>)
    },
    {
      title: "算法和数据结构",
      dataIndex: "method",
      key: "method"
    },
    {
      title: "学到的内容",
      dataIndex: "learn",
      key: "learn"
    },
    {
      title: "没看懂的内容",
      dataIndex: "unknown",
      key: "unknown"
    }
  ];

  return (
    <>
      <Table dataSource={characters.details} columns={columns} pagination={{ pageSize: 31 }}></Table>
    </>
  )
}