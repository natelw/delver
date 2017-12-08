import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class SheetsIndex extends React.Component {
  state = {
    sheets: []
  }

  componentWillMount(){
    Axios
      .get('/api/sheets')
      .then(res => this.setState({ sheets: res.data }))
      .catch(err => console.log(err));
  }


  render(){
    return(
      <main>
        <h1>Sheets Index</h1>
        {this.state.sheets && this.state.sheets.map(sheet => {
          return(
            <Link key={sheet.id} to={`/sheets/${sheet.id}`}>
              <div className="single-sheet"><p>{sheet.name}</p></div>
            </Link>
          );
        }
        )}
      </main>
    );
  }
}


export default SheetsIndex;
