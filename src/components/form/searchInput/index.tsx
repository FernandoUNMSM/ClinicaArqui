import { useRef, useContext, useEffect } from 'react'
import { Container, InputContainer, Input, ButtonSearch, AdvanceModeContainer } from './styles'
import { BiSearchAlt2 } from 'react-icons/bi'
import ConfigContext from 'context/configContext'
import { ButtonGrayLight } from 'styles/globals/globalButtons'
import { BsGear } from 'react-icons/bs'
import AdvanceSearch from '../advanceSearch'

export default function SearchInput({ search }: any) {
  const ref: any = useRef(null)
  const { setSearchValue, setPage } = useContext(ConfigContext)
  const { advanceMode, setAdvanceMode } = search.data || { advanceMode: '', setAdvanceMode: '' }

  const changeSearchValue = () => {
    setPage(1)
    setSearchValue(ref.current.value)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      setPage(1)
      setSearchValue(e.target.value)
    }
  }

  useEffect(() => {
    return () => setSearchValue('')
  }, [])

  return (<>
    <Container advance={search.advance}>
      {
        (advanceMode && search.advance)
          ? <AdvanceModeContainer>
            <AdvanceSearch data={search.data} />
          </AdvanceModeContainer>
          : <InputContainer>
            <BiSearchAlt2 />
            <Input type="text" placeholder='Search by name or slug' ref={ref} onKeyDown={handleKeyDown} />
          </InputContainer>
      }
      <ButtonSearch onClick={changeSearchValue}>
        <BiSearchAlt2 />
      </ButtonSearch>
      {
        search.advance &&
        <ButtonGrayLight size='action' onClick={() => setAdvanceMode(!advanceMode)}>
          <BsGear />
          {advanceMode ? 'Simple' : 'Advance'}
        </ButtonGrayLight>
      }
    </Container>
  </>)
}