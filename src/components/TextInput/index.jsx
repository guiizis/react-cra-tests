import './styles.css';

export const TextInput = ({searchValue, filterInput}) => {
  return(
    <input
    placeholder='type your search'
    className='text-input'
    type='search'
    value={searchValue}
    onChange={(e) => filterInput(e)}
  />
  )
}