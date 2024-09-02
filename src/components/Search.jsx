import { Button, Input, Option, Select } from "@material-tailwind/react"
import { useState } from "react"
import searchIcon from "../assets/search.svg"

/**
 * @callback searchCallback
 * @param {string|number} searchCateg
 * @param {string} searchVal
 * @returns {void}
 */

/**
 * @param {object} prop
 * @param {{[value:string] : [option: string]}} [prop.category]
 * @param {searchCallback} prop.searchHandler
 * @returns
 */
function Search({ category = null, searchHandler }) {
  const [searchCateg, setSearchCateg] = useState(
    category ? Object.keys(category)[0] : null,
  )

  const [searchVal, setSearchVal] = useState("")

  const categPairs = () => {
    if (category) {
      const options = []

      for (const key in category) {
        options.push(
          <Option key={key} value={key}>
            {category[key]}
          </Option>,
        )
      }
      return (
        <Select
          label='Category'
          id='searchTypes'
          color='blue'
          value={searchCateg}
          onChange={(val) => setSearchCateg(val)}
          containerProps={{
            className: "min-w-fit md:w-1/3",
          }}>
          {options}
        </Select>
      )
    }

    return <></>
  }

  return (
    <div id='searchBar' className='mx-auto flex items-center gap-0.5 px-1 md:w-10/12 lg:w-3/4 xl:w-3/5'>
      {categPairs()}
      <Input
        type='text'
        color='blue'
        label='Search Value'
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value)
        }}
      />
      <Button
        variant='gradient'
        color='blue'
        onClick={() => {
          searchHandler(searchCateg, searchVal)
        }}
        title='Serach'
        className='md:min-w-fit px-3 py-2 md:px-6 md:py-3'>
        <img src={searchIcon} alt='Search' className='w-16 aspect-square md:hidden' />
        <span className='hidden md:block'>Search</span>
      </Button>
    </div>
  )
}

export default Search
