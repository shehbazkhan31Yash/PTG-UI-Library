export const UserInfo = ({ label, data }) => {
    return (
        <>
            <div className="col-5 form-text">{label}</div>
            <div className="col-6 form-text">{data}</div>
        </>
    );
}