import React, { Fragment } from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Fragment>
    <div>{message}</div>
    <style jsx>
      {`
        .error-container {
          display: flex;
          justify-content: center;
        }
        .error-content {
          display: inline-block;
          margin: 20px auto;
          border-radius: 4px;
          padding: 8px 15px;
          color: #f02d2d;
          font-weight: 600
          background-color: rgba(240, 45, 45, 0.1);
        }
      `}
    </style>
  </Fragment>
);

export default ErrorMessage;
