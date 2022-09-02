
interface TotalReportsPageType {
  title?: string;
  text?: string;
  amount?: number;
  type?: string;
}

const TotalReports = ({ title, text, amount, type }: TotalReportsPageType) => {
  return (
    <div className="row border">
      <div className="totalMessageWrapper">
        <div className="totalMessage">
          <h6>{title}</h6>
          <small>{text}</small>
        </div>
        <span className="totalDownTime">
          <h4>{amount}</h4>
          <small>{type}</small>
        </span>
      </div>
    </div>
  );
};
export default TotalReports;
