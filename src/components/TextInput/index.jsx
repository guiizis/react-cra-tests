import './styles.css';

export const TextInput = ({searchValue, filterInput}) => {
  return(
    <input
    className='text-input'
    type='search'
    value={searchValue}
    onChange={(e) => filterInput(e)}
  />
  )
}