import { useEffect } from 'react'
import { useFetch } from "hooks/useFetching";
import Input from "../input";
import { GenerateContainer } from "./styles";

export default function GenerateKey(props: any) {
  const { setValue, id } = props
  const { Fetch } = useFetch()

  const generateKey = () => {
    Fetch({ method: 'GET', url: `/spectre/campaign/generatekey?id=${id}` })
      .then(res => setValue(res.data))
  }

  useEffect(() => {
    generateKey()
  }, [])

  return (<>
    <GenerateContainer>
      <div className="inputKeyContainer">
        <Input {...props} disabled={true} />
      </div>
      <button onClick={generateKey} type='button'>Generate Key</button>
    </GenerateContainer>
  </>)
}