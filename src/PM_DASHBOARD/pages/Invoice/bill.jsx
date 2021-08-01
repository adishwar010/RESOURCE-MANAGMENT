import React , {useRef} from "react";
import { useReactToPrint } from "react-to-print";
import "../Invoice/bill.css";
import SpanningTable from "./billTable";

const Bill = () => {
  const compRef = useRef();
  const generatePdf = useReactToPrint({
      content : ()=> compRef.current,
    })
  
  return (<>
    <div className="bill"  >
     
      <div className="mainConBill" ref={compRef}>
        <h1 id="mainHeadingBill">GST INVOICE</h1>
        <div className="head">
          <div className="logo">LOGO</div>
          <div className="invoiceDetails">
            <span className="invoiceNo">
              <h4>Invoice No :54</h4>{" "}
            </span>
            <span className="curDate">
              <h4> DATED : 18/07/2021</h4>{" "}
            </span>
            <span className="gstNumber">GST : ABCDEFGH</span>
          </div>
        </div>

        <div className="head">
          <div className="invoiceDetails">
            <span className="invoiceNo">
              <h4>Client No :54</h4>{" "}
            </span>
            <span className="curDate">
              <h4> Client Name : Codekul</h4>{" "}
            </span>
            
            <span className="gstNumber">GST : ABCDEFGH</span>
          
          </div>

          
          <div className="logo">CLIENT</div>
        </div>
        
        <div className="billing">
          <SpanningTable />
        </div>
        <button id="generatePdf" onClick={generatePdf}>
          PRINT
        </button>
      </div>
      
    </div>
    
  </>
  );
};

export default Bill;
