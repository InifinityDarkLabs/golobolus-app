import React from "react";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="row">
        <div className="col w-100 pr-5 text-right">
          Copyright&copy; {new Date().getFullYear()} GSolutions
        </div>
      </div>
    </footer>
  );
}
