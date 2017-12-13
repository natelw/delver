import React from 'react';
import Auth from '../../lib/Auth';
import {Link} from 'react-router-dom';

const SheetShow = ({ sheet }) => {
  return (
    <main>
      <h1>Sheet Show</h1>

      <h1>{sheet.name} </h1>
      <h3>{sheet.charclass}</h3>
      <h3>{sheet.level}</h3>
      <h3>{sheet.race}</h3>

      {/* { Auth.isAuthenticated() && <button className="delete-button" onClick={this.deleteSheet}>DELETE</button>}
      { Auth.isAuthenticated() && <Link to={`/sheets/${this.state.sheet.id}/edit`} className="edit-button"><button>Edit</button>
      </Link>} */}

    </main>
  );
};

export default SheetShow;
