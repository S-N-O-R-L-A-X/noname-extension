import { Table, Tag, Space } from 'antd';
import { ProfileOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import characters from "./characters.json";
import Search from '../../Components/Search';
import { useMemo } from 'react';

export default function ShowAllCharacters() {
  const skillColors = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
  function handleProfileClick() {
    alert("此部分还没有完成！")
  }

  const existedCharacters = characters.filter((character) => character.ChineseName !== "");

  const columns: any[] = useMemo(() => {
    return [
      {
        title: '武将名',
        dataIndex: 'ChineseName',
        key: 'ChineseName',
        sorter: (a: any, b: any) => a.ChineseName < b.ChineseName ? 1 : -1,
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
            value: "daqin",
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
        dataIndex: "package",
        key: "package",
        filters: [
          {
            text: "挑战boss加强包",
            value: "挑战boss加强包",
          },
          {
            text: "融包",
            value: "融包",
          },
          {
            text: "数包",
            value: "数包",
          },
          {
            text: "扩包",
            value: "扩包",
          },
        ],
        onFilter: (value: any, record: any) => {
          return record.package?.indexOf(value) !== -1;
        }
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
        sorter: (a: any, b: any) => {
          function getHp(s: string) {
            const arr = s.split("/");
            if (arr.length === 1) {
              return Number(arr[0]);
            }
            else { // hp/maxHp or hp/maxHp/shield
              return Number(arr[1]) - 0.1;
            }
          }

          return getHp(a.hp) - getHp(b.hp);
        }
      },
      {
        title: "技能",
        dataIndex: "skills",
        key: "skills",
        render: (skills: string[]) => (
          <>
            {skills.map((val, idx) => <Link to="/skills" state={{ name: val }}><Tag color={skillColors[idx % 11]}>{val}</Tag></Link>)}
          </>)
      },
      {
        title: "武将设计",
        dataIndex: "details",
        key: "details",
      },
      {
        title: "强度",
        dataIndex: "strength",
        key: "strength",
        sorter: (a: any, b: any) => (a.strength?.length || 0) > (b.strength?.length || 0) ? 1 : -1,
        render: (strength: string) => (
          <>
            {strength && strength.substring(5)}
          </>)
      },
      {
        title: "亮点",
        dataIndex: "highlight",
        key: "highlight",
        render: (highlight: string) => (
          <>
            {highlight && highlight.substring(5)}
          </>)
      },
    ];
  }, []);

  return (
    <>
      <Search searchArea={characters} />
      <Table rowKey="ChineseName" dataSource={existedCharacters} columns={columns} pagination={{ pageSize: 10 }}></Table>
    </>
  )
}