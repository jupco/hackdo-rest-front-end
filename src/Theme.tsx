import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const BaseTheme = getMuiTheme({
    appBar: {
        color: Colors.blueGrey900,
        height: 80
    },
    baseTheme: darkBaseTheme,
    palette: {
        canvasColor: Colors.black,
        textColor: Colors.black
    }
}
)

export default BaseTheme