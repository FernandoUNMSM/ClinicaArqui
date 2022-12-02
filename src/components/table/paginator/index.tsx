import { ChangePage, Container } from "./styles";
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useState, useEffect, useContext } from "react";
import ConfigContext from "context/configContext";

export default function Paginator() {
  const { quantityPerPage, page, setPage, totalItems } = useContext(ConfigContext)
  const totalPages = Math.ceil(totalItems / quantityPerPage)

  const handlePage = (index: any) => {
    handleResultByPage(index)
  }

  const arrowHandlePage = (next: any) => {
    if ((page === 1 && !next) || (page === totalPages && next)) return
    const newPage = (next) ? page + 1 : page - 1
    handleResultByPage(newPage)
  }

  const handleResultByPage = (newPage: any) => {
    setPage(newPage)
    updateArr(newPage)
  }

  const [arr, setArr]: any = useState([])

  const updateArr = (page: any) => {
    if (totalPages <= 5) return
    if (page > 3) {
      setArr([1, 0, page - 2, page - 1, page, page + 1, page + 2, 0, totalPages])
    }
    if (page === 1) {
      setArr([1, 2, 3, 4, 5, 0, totalPages])
    }
    if (page === 2) {
      setArr([1, 2, 3, 4, 5, 0, totalPages])
    }
    if (page === 2) {
      setArr([1, 2, 3, 4, 5, 0, totalPages])
    }
    if (page === 4) {
      setArr([1, 2, 3, 4, 5, 0, totalPages])
    }
    if (page > totalPages - 4) {
      setArr([1, 0, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages])
    }
  }

  useEffect(() => {
    return () => {
      setPage(1)
    }
  }, []) //eslint-disable-line

  useEffect(() => {
    let arr2 = []
    for (let a = 1; a <= totalPages; a++) {
      if (a <= 5 || a === totalPages) {
        arr2.push(a)
      } else if (a > 5 && a === totalPages - 1) {
        arr2.push(0)
      }
    }
    setArr(arr2)
  }, [totalPages])

  return (<>
    <Container>
      <ChangePage>
        <div className="container">
          <div className="arrow arrowLeft" onClick={() => arrowHandlePage(false)}>
            <IoIosArrowBack />
          </div>
          <div className="pagesContainer">
            {
              arr.map((item: any, index: number) => {
                if (item === 0) {
                  return <div
                    className='ellipsis'
                    key={index}
                  >
                    ...
                  </div>
                } else {
                  return <div
                    className={`number ${((item) === page) ? 'active' : null}`}
                    onClick={() => handlePage(item)}
                    key={index}
                  >
                    {item}
                  </div>
                }
              })
            }
          </div>
          <div className="arrow arrowRight" onClick={() => arrowHandlePage(true)}>
            <IoIosArrowForward />
          </div>
        </div>
      </ChangePage>
    </Container>
  </>)
}