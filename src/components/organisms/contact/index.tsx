import React from 'react'

type ContantInfo = {
  address: string;
  phone: string;
  email: string;
}

type ContantProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  formAction: string;
  info: ContantInfo;
};

function Contant ({ formAction, info, ...rest }: ContantProps) {
  return (
    <div className="row" {...rest}>
      <div className="col-md-7 d-print-none">
        <div className="my-2">
          <form action={formAction} method="POST">
            <div className="row">
              <div className="col-6">
                <input className="form-control" type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="col-6">
                <input className="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail"
                  required />
              </div>
            </div>
            <div className="form-group my-2">
              <textarea className="form-control" id="message" name="message" rows={5}
                placeholder="Your Message" required />
            </div>
            <button className="btn btn-primary mt-2" type="submit" >Send</button>
          </form>
        </div>
      </div>
      <div className="col">
        <div className="mt-2">
          <h3 className="h6 mb-1">Address</h3>
          <div className="pb-2 text-secondary">{info.address}</div>
          <h3 className="h6 mb-1">Phone</h3>
          <div className="pb-2 text-secondary">{info.phone}</div>
          <h3 className="h6 mb-1">Email</h3>
          <div className="pb-2 text-secondary">{info.email}</div>
        </div>
      </div>
    </div>
  )
}

export default Contant
