type chilPropsType = {
  title?: string;
  iconName?: string;
  data?: number;
};
const HomeCards = ({ title, iconName, data }: chilPropsType) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="ps-3">
              <h6>{title}</h6>
              <span className="text-muted small pt-2 ps-1">{data}</span>
            </div>
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={`bi ${iconName}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCards;
