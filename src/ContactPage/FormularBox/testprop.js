import React from 'react';

const Formtestprop= (props) => {
    const {
      containerClassName,
      formClassName,
      inputName,
      inputValue,
      handleChange,
      placeholder,
     
    } = props;
  
    return (
      <div className={containerClassName}>
        <form className={formClassName}>
          <input
            type="text"
            id={inputName}
            value={inputValue}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
            
          />
        </form>
      </div>
    );
  };

export default Formtestprop;