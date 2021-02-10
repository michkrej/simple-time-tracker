import { NewActivity } from '../components/index'
import { Grid } from '@material-ui/core'

const Overview = (props) => {
  return (
    <Grid>
      <Grid span={12}>
        <NewActivity isMobile={props.isMobile}/>
      </Grid>
    </Grid>

  )
}

export default Overview