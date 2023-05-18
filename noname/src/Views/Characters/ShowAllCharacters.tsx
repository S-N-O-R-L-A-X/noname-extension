import { Table, Tag } from 'antd';

import characters from "./characters.json";
export default function ShowAllCharacters() {
  const columns = [
    {
      title: '武将名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => Number(a.date.split("/")[2]) - Number(b.date.split("/")[2]),
    },
    {
      title: '题号',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: '题目名称',
      dataIndex: 'name',
      key: "name",
    },
    {
      title: "难度",
      dataIndex: "difficulty",
      key: "difficulty",
      filters: [
        {
          text: "简单",
          value: "简单",
        },
        {
          text: "中等",
          value: "中等",
        },
        {
          text: "困难",
          value: "困难",
        },
      ],
      onFilter: (value: any, record: any) => record.difficulty.indexOf(value) === 0,

      render: (difficulty: string) => (
        <>
          {difficulty === "困难" ? <Tag color="red">困难</Tag> : difficulty === "中等" ? <Tag color="yellow">中等</Tag> : <Tag color="green">简单</Tag>}
        </>)
    },
    {
      title: "rating",
      dataIndex: "rating",
      key: "rating",
      sorter: (a: any, b: any) => a.rating - b.rating,
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