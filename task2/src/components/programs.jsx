import React, { useState, useEffect } from 'react'
import Card from './card'
import Loading from './loading'

function Programs() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [pagination, setPagination] = useState([])

  const fetchData = (url) => {
    fetch(url, {
      headers: {
        Authorization: "secret_auth_token!!$$"
      },
      method: "GET"
    })
      .then(response => response.json())
      .then((resp) => {
        const response_data = resp.data
        const currentPage = url.split('=')[1]
        response_data.current_page = +currentPage

        setData(response_data)
        setLoading(false)
      })
      .catch((err) => {
        setError(true)
        setLoading(false)
      })
  }

  const isOnPage = (id) => {
    return id === data.current_page ? true : false
  }

  const initPagination = (number) => {
    const arr = []
    for (let i = 0; i < number; i++) {
      arr.push({
        id: i + 1,
        url: `https://api.dev.sekolah.mu/se-test/program?page=${i + 1}`
      })
    }

    setPagination(arr)
  }

  useEffect(() => {
    initPagination(2)
    fetchData("https://api.dev.sekolah.mu/se-test/program?page=1")
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <div className="flex justify-center h-48 items-center my-5"><Loading /></div>
  }

  if (error) {
    return <div className="flex justify-center h-48 items-center my-5"><p className="font-semibold text-5xl">Error !!!</p></div>
  }

  return (
    <div className="max-w-screen-lg mx-auto my-5">
      <h4 className="text-xl font-extrabold font-sans">Program Unggulan</h4>
      <p className="text-gray-400">Temukan program-program menarik lainnya.</p>
      <div className="grid grid-cols-5 gap-7 my-5">
        {
          data.data.map(program => (
            <Card key={program.id} data={program}/>
          ))
        }
      </div>
      <div className="flex justify-center my-3">
        {
          pagination.map(page => (
            <div key={page.id}>
              {
                isOnPage(page.id)
                ?
                <div className="px-5 py-3 mx-2 bg-white text-black">
                  {page.id}
                </div>
                :
                <div className="px-5 py-3 mx-2 border cursor-pointer bg-white hover:bg-gray-500 text-black hover:text-gray-50" onClick={() => fetchData(page.url)}>
                  {page.id}
                </div>
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Programs