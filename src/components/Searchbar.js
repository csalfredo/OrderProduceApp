import React from "react";
import "./css/SearchBar.css";
import "../App.css";

const Searchbar = ({ results, keyword, updateField }) => {
  //renders our results using the SearchPreview component
  var updateText = text => {
    updateField("keyword", text, false);
    updateField("results", []);
  };

  var cancelSearch = () => {
    updateField("keyword", "");
  };

  var renderResults = results.map(({ vendor, produceItem, produceCode }, index) => {
    return (
      <SearchPreview
        key={index}
        updateText={updateText}
        index={index}
        vendor={vendor}
        produceItem={produceItem}
        produceCode={produceCode}
      />
    );
  });
  return (

 
    <div className="auto">
      <button
        onClick={() => cancelSearch()}
        className={`cancel-btn ${keyword.length > 0 ? "active" : "inactive"}`}
      >
        x
      </button>
 
      <input
        className="search-bar"
        placeholder="Search"
        value={keyword}
        onChange={e => updateField("keyword", e.target.value)}
      />

      {results.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}
    </div>

  
  );
};

//stateless component to render preview results
const SearchPreview = ({ produceCode, produceItem, vendor, index, updateText }) => {
  return (
    <div
      onClick={() => updateText(produceItem)}
      className={`search-preview ${index === 0 ? "start" : ""}`}
    >
      <div className="first">
        <p className="produceItem">{produceItem}</p>
        <p className="sub-header">VENDOR: {vendor}</p>
        <p className="sub-header">CODE: {produceCode}</p>
      </div>
      {/* <div className="second">
        <p className="age">{age}</p>
        <p className="sub-header">age</p>
      </div> */}
    </div>
  );
};

export default Searchbar;