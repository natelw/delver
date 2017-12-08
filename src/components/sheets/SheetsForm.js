import React from 'react';


function SheetsForm({ handleSubmit, handleChange, sheet }) {
  return (
    <main>
      <form onSubmit={handleSubmit} className="whole-form">
        <div className="form-entry">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="former"
            id="name"
            name="name"
            value={sheet.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="charclass">Class</label>
          <input
            type="text"
            className="former"
            id="charclass"
            name="charclass"
            value={sheet.charclass}
            onChange={handleChange}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="level">Level</label>
          <input
            type="number"
            className="former"
            id="level"
            name="level"
            value={sheet.level}
            onChange={handleChange}
          />
        </div>

        <div className="form-entry">
          <label htmlFor="race">Race</label>
          <input
            type="text"
            className="former"
            id="race"
            name="race"
            value={sheet.race}
            onChange={handleChange}
          />
        </div>

        <div className="form-entry">
          <label htmlFor="exp">Experience</label>
          <input
            type="number"
            className="former"
            id="exp"
            name="exp"
            value={sheet.exp}
            onChange={handleChange}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="str">Strength</label>
          <input
            type="number"
            className="former"
            id="str"
            name="str"
            value={sheet.str}
            onChange={handleChange}
          />
        </div>

        <div className="form-entry">
          <label htmlFor="dex">Dexterity</label>
          <input
            type="number"
            className="former"
            id="dex"
            name="dex"
            value={sheet.dex}
            onChange={handleChange}
          />
        </div>
        <div className="form-entry">
          <label htmlFor="con">Constitution</label>
          <input
            type="number"
            className="former"
            id="con"
            name="con"
            value={sheet.con}
            onChange={handleChange}
          />
        </div>

        <div className="form-entry">
          <label htmlFor="wis">Wisdom</label>
          <input
            type="number"
            className="former"
            id="wis"
            name="wis"
            value={sheet.wis}
            onChange={handleChange}
          />
        </div>

        <div className="form-entry">
          <label htmlFor="int">Intelligence</label>
          <input
            type="number"
            className="former"
            id="int"
            name="int"
            value={sheet.int}
            onChange={handleChange}
          />
        </div>

        <div className="form-entry">
          <label htmlFor="cha">Charisma</label>
          <input
            type="number"
            className="former"
            id="cha"
            name="cha"
            value={sheet.cha}
            onChange={handleChange}
          />
        </div>

        <div className="form-entry">
          <label htmlFor="MaxHp" >Total Hit Points</label>
          <input
            type="number"
            className="former"
            id="MaxHp"
            name="MaxHp"
            value={sheet.MaxHp}
            onChange={handleChange}
          />
        </div>

        <div className="form-entry">
          <label htmlFor="armorclass">Armour Class</label>
          <input
            type="number"
            className="former"
            id="armorclass"
            name="armorclass"
            value={sheet.armorclass}
            onChange={handleChange}
          />
        </div>

        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </main>
  );
}

export default SheetsForm;
