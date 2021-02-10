import { NewActivity, ActivityTable, Summary } from '../components/index'
import { Grid, GridCell, GridRow } from '@rmwc/grid'

const Overview = (props) => {
  return (
    <Grid>
      <GridCell desktop='12' tablet='8' phone='4'>
        <NewActivity isMobile={props.isMobile}/>
      </GridCell>
    </Grid>

  )
}

export default Overview