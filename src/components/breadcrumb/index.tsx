import { useLocation, useParams } from 'react-router-dom'
import { formatSnakeToNormal } from './../../utilities/formatStrings'
import { Container } from './styles'

export default function Breadcrumb() {
  const location = useLocation()
  const params = useParams()
  const params_values = Object.values(params)

  const path: any = location.pathname.split('/').filter((pathItem: any) => pathItem !== '')
  path.splice(0, 1, 'home')

  params_values.forEach((param: any) => {
    const index = path.findIndex((ruta: any) => ruta.replaceAll('%20',' ') === param)
    path.splice(index, 1)
  })

  const paramName = params.campaign_name || params.partner_name || false

  return (
    <Container>
      {
        (path.length <= 3)
          ? <>
            <h1>{paramName || formatSnakeToNormal(path.at(-1))}</h1>
            <div className="route">
              {path.map((pathItem: string, index: number) =>
                <p key={index}>
                  {formatSnakeToNormal(pathItem)}
                  {(index !== path.length - 1) && <span>-</span>}
                </p>
              )}
            </div>
          </>
          : <>
            <h1>{paramName || formatSnakeToNormal(path.at(-1))}</h1>
            <div className="route">
              {path.map((pathItem: string, index: number) =>
                <p key={index}>
                  {formatSnakeToNormal(pathItem)}
                  {(index !== path.length - 1) && <span>-</span>}
                </p>
              )}
            </div>
          </>
      }
    </Container>
  )
}