/* eslint-disable react/prop-types */
const Alert = ({ SubmitForm, confirmAlert }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          {/* <form method="dialog">
            
            <button onClick={() => SubmitForm()} className="btn">
              Submit
            </button>
            <button className="btn" onClick={() => confirmAlert(false)}>
              Close
            </button>
          </form> */}
          <button onClick={() => SubmitForm()} className="btn">
            Submit
          </button>
          <button className="btn" onClick={() => confirmAlert(false)}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Alert;
