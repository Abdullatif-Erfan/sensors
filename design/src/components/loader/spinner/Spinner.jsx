import "./spinnerStyle.css";
const Spinner = () => {
  return (
    <div className="spinnerWrapper">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Spinner;
