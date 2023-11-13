const getTaxSubmissionDate = () => {
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      return new Date().toLocaleDateString(undefined, options);
    };
    
    export default getTaxSubmissionDate;
    