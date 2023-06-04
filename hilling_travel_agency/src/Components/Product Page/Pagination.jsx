import {Box, Button} from '@chakra-ui/react'
import { ChevronLeftIcon,ChevronRightIcon } from '@chakra-ui/icons'

// The default icon size is 1em (16px)


function Pagination({action, totalPages, page}) {

    const handlepage=(pageaction)=>{
      action(page+pageaction)
    }
    const prev = (
      

      // The size prop affects the height of the button
// It can still be overridden by passing a custom height
<Button
  size='sm'
  height='40px'
  data-testid="prev-page"
 isDisabled={page==1}
  onClick={()=>{handlepage(-1)}}
  border='2px'
  borderColor='blue.200'
>
  <ChevronLeftIcon/>
</Button>
    );
    const currentPage = <button data-testid="current-page">{page}</button>;
    const next = (
      <Button
      size='sm'
  height='40px'
  border='2px'
  borderColor='blue.200'
        data-testid="next-page"
        isDisabled={page==7}
        onClick={()=>{handlepage(+1)}}
      >
        <ChevronRightIcon/>
      </Button>
      




    );
    return (
    <Box data-testid="page-container" ml={'30%'} >
        <div>
        {prev}
        <Button
      size='sm'
  height='40px'
  border='2px'
  borderColor='blue.200'
        
      >
       {currentPage}
      </Button>
        {next}
        </div>
        
      </Box>
    );
  }
  
  export default Pagination;
  