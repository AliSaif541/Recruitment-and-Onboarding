

function ApplicantHRComponent({ _id, name, email, contact_number, years_of_exp, experience }) {
    return (
      <div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{contact_number}</div>
      </div>
    );
}

export default ApplicantHRComponent;