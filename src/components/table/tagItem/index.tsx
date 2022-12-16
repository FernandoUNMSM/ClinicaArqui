import { Tag } from './styles'

export default function Tagitem({ title, clickEvent }: any) {
  return (<>
    <Tag onClick={clickEvent} pointer={clickEvent}>{title}</Tag>
  </>)
}