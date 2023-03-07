import check from "./../../images/icons/check.svg";

const QuestionList = ({name, phone, email, text}) => {
    return (
        <div className="sent-container">
            <div className="inner-container">
                <h4 className="sent__name">{name}</h4>
                <p className="sent__phone">{phone}</p>
                <div className="email-container">
                    <p className="sent__phone">{email}</p>
                </div>
                <div className="email-container">
                    <p className="sent__text">{text}</p>
                </div> 
                <div className="sent__icon">
                    <h1 style={{color: '#fff'}}>hello</h1>
                    <img src={check} alt="check" />
                </div>
            </div>
        </div>
    );
}

export default QuestionList;