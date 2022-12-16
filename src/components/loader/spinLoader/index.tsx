import { SpinContainer } from './styles'

export default function SpinLoader({ color = '#ccc', width = '20px' }: any) {
  return (<>
    <SpinContainer color={color} width={width}>
      <div className="spin"></div>
    </SpinContainer>
  </>)
}