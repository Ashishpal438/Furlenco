import React from "react";
import { useState } from "react";
import styles from "./bankDetail.module.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const BankDetail = (props) => {
  let data = JSON.parse(localStorage.getItem("membership"));
  const [debit, setDebit] = useState(true);
  const [upi, setUpi] = useState(false);
  const navigate = useNavigate();
  const [craditI, setCraditI] = useState("");
  const [final, setFinal] = useState(false);
  const [upiFinal, setUpiFinal] = useState(false);
  const [upiI, setUpiI] = useState("");
  const [expiryI, setExpiryI] = useState("");
  const [cvvI, setCvvI] = useState("");
  const [tick, setTick] = useState(false);
  const [css, setCss] = useState(false);
  const [upiHover, setUpiHover] = useState(false);
  const handleTick = () => {
    setTick(!tick);
  };
  useEffect(() => {
    craditI !== "" && expiryI !== "" && cvvI.length === 3 && tick === true
      ? setFinal(true)
      : setFinal(false);
  }, [craditI, expiryI, cvvI, tick]);

  useEffect(() => {
    upiI !== "" && upiI.includes("@") ? setUpiFinal(true) : setUpiFinal(false);
  }, [upiI]);
  const handleDebitCard = () => {
    setCss(true);
    setUpiHover(false);

    setDebit(true);
    setUpi(false);
  };
  const handleUpi = () => {
    setUpiHover(true);
    setCss(false);
    setUpi(true);
    setDebit(false);
  };
  const handlePaymentDebit = () => {
    if (
      craditI !== "" &&
      expiryI !== "" &&
      cvvI.length === 3 &&
      tick === true
    ) {
      alert("Payment sucessfull!");
      navigate("/");
    } else {
      alert("Payment Failed!");
    }
  };
  const handlePaymentUpi = () => {
    if (upiFinal) {
      alert("Payment sucessfull!");
      navigate("/");
    } else {
      alert("Payment Failed!");
    }
  };
  var rupee = data.rupees;
  var rupees = parseInt(rupee);

  var sub = localStorage.getItem("promo");
  var subtract = parseInt(sub);
  var subAns = props.total;
  return (
    <div className={styles.bggray}>
      <div className={styles.bankTop}>
        <div className={styles.orderMain}>
          <div className={styles.orderSummary}>Order Summary</div>
          <div style={{ paddingRight: "3%" }}>
            <div className={styles.orderNumberText}>order Number</div>
            <div className={styles.orderNum}>ORDER23098751</div>
          </div>
          <div className={styles.orderLine}>|</div>
          <div>
            <div className={styles.orderNumberText}>Amount</div>
            <div className={styles.orderNum}>₹{subAns}</div>
          </div>
        </div>
      </div>
      <div className={styles.bankMain}>
        <div className={styles.debitupileft}>
          {css ? (
            <div onClick={handleDebitCard} className={styles.debitTexthover}>
              <CreditCardIcon />
              <div>Debit/Credit card</div>
            </div>
          ) : (
            <div onClick={handleDebitCard} className={styles.debitText}>
              <CreditCardIcon />
              <div>Debit/Credit card</div>
            </div>
          )}

          {upiHover ? (
            <div onClick={handleUpi} className={styles.upiTextHover}>
              <DoubleArrowIcon /> <div>UPI</div>
            </div>
          ) : (
            <div onClick={handleUpi} className={styles.upiText}>
              <DoubleArrowIcon /> <div>UPI</div>
            </div>
          )}
        </div>

        <div>
          {debit && (
            <div
              style={{
                backgroundColor: "white",
                width: "150%",
                height: "500px",
              }}
            >
              <div className={styles.enterMainDebit}>
                <div className={styles.enterCredit}>
                  Enter Credit / Debit card details
                </div>
              </div>
              <div>
                <div>
                  <div className={styles.cardNumber}>CARD NUMBER</div>
                  <div style={{ paddingLeft: "30px" }}>
                    <input
                      value={craditI}
                      onChange={(e) => setCraditI(e.currentTarget.value)}
                      className={styles.cardInput}
                      type="text"
                      placeholder="Enter Card Number"
                    />
                  </div>

                  <div className={styles.ecMain}>
                    <div>
                      <div className={styles.expries}>EXPIRY</div>
                      <input
                        value={expiryI}
                        onChange={(e) => setExpiryI(e.currentTarget.value)}
                        className={styles.mmyy}
                        type="text"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <div className={styles.expries}>CVV</div>
                      <input
                        value={cvvI}
                        onChange={(e) => setCvvI(e.currentTarget.value)}
                        className={styles.mmyy}
                        type="text"
                        placeholder="CVV"
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "30px",
                      gap: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={tick}
                      onChange={handleTick}
                    />
                    <div className={styles.securely}>
                      Securely save this card for future payments
                    </div>
                  </div>

                  {final ? (
                    <button
                      style={{
                        backgroundColor: "#ff7b73",
                      }}
                      onClick={handlePaymentDebit}
                      className={styles.btnPay}
                    >
                      Pay {subAns}
                    </button>
                  ) : (
                    <button
                      onClick={handlePaymentDebit}
                      className={styles.btnPay}
                    >
                      Pay {subAns}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          {upi && (
            <div
              style={{
                backgroundColor: "white",
                width: "550px",
                height: "500px",
              }}
            >
              <div className={styles.upiTextMain}>
                <div>UPI</div>
              </div>

              <div className={styles.upiIdVpa}>UPI ID/ VPA</div>
              <div>
                <input
                  value={upiI}
                  onChange={(e) => setUpiI(e.currentTarget.value)}
                  className={styles.upiInput}
                  type="text"
                  placeholder="e.g user@upi"
                />
              </div>
              <div className={styles.collectReq}>
                A collect request will be sent to this UPI ID
              </div>
              {upiFinal ? (
                <button
                  style={{
                    backgroundColor: "#ff7b73",
                  }}
                  onClick={handlePaymentUpi}
                  className={styles.btnPay}
                >
                  Pay {subAns}
                </button>
              ) : (
                <button onClick={handlePaymentUpi} className={styles.btnPay}>
                  Pay {subAns}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
