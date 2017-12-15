import React from 'react';


const SheetShow = ({ sheet, handleAddSheetClick}) => {
  return (
    <main>
      <div className="favourite-button"  onClick={handleAddSheetClick}>
        <i className="fa fa-heart" aria-hidden="true"></i>
      </div>
      <div className="vertical-stats-box">
        <div className="stat-viewer-box">HP: <div className="stat-read-out">{sheet.MaxHp}</div></div>
        <div className="stat-viewer-box">AC: <div className="stat-read-out">{sheet.armorclass}</div></div>
        <div className="stat-viewer-box">Str: <div className="stat-read-out">{sheet.str}</div></div>
        <div className="stat-viewer-box">Dex: <div className="stat-read-out">{sheet.dex}</div></div>
        <div className="stat-viewer-box">Con: <div className="stat-read-out">{sheet.con}</div></div>
        <div className="stat-viewer-box">Int: <div className="stat-read-out">{sheet.int}</div></div>
        <div className="stat-viewer-box">Wis: <div className="stat-read-out">{sheet.wis}</div></div>
        <div className="stat-viewer-box">Cha: <div className="stat-read-out">{sheet.cha}</div></div>
        {/* { Auth.isAuthenticated() && <button className="delete-button" onClick={this.deleteSheet}>DELETE</button>}
        { Auth.isAuthenticated() && <Link to={`/sheets/${this.state.sheet.id}/edit`} className="edit-button"><button>Edit</button>
      </Link>} */}
      </div>
      <h1>{sheet.name} </h1>
      <hr/>
      <h3>{sheet.level + '  ' + sheet.charclass}</h3>
      <h3></h3>
      <p>{sheet.race}</p>
      <hr/>

    </main>
  );
};

export default SheetShow;
