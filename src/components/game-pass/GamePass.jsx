import { useState, useEffect } from "react";
import toastr from "../../services/toastr.service";
import { useTranslation } from "react-i18next";
import { getInvoiceLink, updatePaymentStatus } from "../../services/api.service";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../../store/userInfoSlice";

export default function GamePass() {
  const { t } = useTranslation();
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const handleProceed = async (pack) => {
    try {
      const payload = {
        userId: userInfo.id,
        amount: pack.price,
        title: `${pack.diamonds} Diamonds`,
        description: `${pack.diamonds} Diamonds for ${pack.price}`,
      };
      const link = await getInvoiceLink(payload);
      const WebApp = (await import("@twa-dev/sdk")).default;
      console.log("Link :: ", link);

      WebApp.openInvoice(link, async (status) => {
        if (status === "paid") {
          const result = await updatePaymentStatus({ id: userInfo.id, invoiceLink: link, status: "paid", amount: pack.price, diamonds: pack.diamonds });
          if (result) {
            dispatch(saveUser(result));
          }
          toastr("success", t("Payment-successful!-Enjoy-your-🎉"));
        } else {
          toastr("error", t("Payment Failed"));
        }
      });
    } catch (error) {
      console.error("Error:", error);
      toastr("error", t("An-error-occurred-while-processing-payment"));
    }
  };

  return (
    <>
      <div className="game-pass">
        <div className="pass pass-1" data-bs-toggle="modal" data-bs-target="#ticketPassModal">
          <img src="/images/icons/pass1.svg" alt="" />
        </div>
        <div className="pass pass-2" data-bs-toggle="modal" data-bs-target="#diamondPassModal">
          <img src="/images/icons/pass2.svg" alt="" />
        </div>
        <div className="pass pass-3">
          <img src="/images/icons/pass3.svg" alt="" />
        </div>
      </div>
      {/* Buy Diamond Modal */}
      <div className="modal text-center" id="ticketPassModal" aria-labelledby="ticketPassModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <h5>Ticket Refill</h5>
              <div className="ticket_modal">
                <img src="/images/icons/ticket.svg" alt="" />
                <div className="">
                  <h6>Ticket</h6>
                  <p>Users can Buy full ticket top-up instantly. This means if a user doesn't want to wait, they can fill up all their ticket capacity by buying them instantly.</p>
                  <div className="d-flex align-items-center mt-2">
                    <span className="d-flex align-items-center">
                      <img src="/images/icons/star.svg" className="mx-1" alt="" /> 700
                    </span>
                    <button type="button" className="btn btn-success" onClick={() => handleProceed(pack)} style={{ width: "fit-content", padding: "5px 20px", margin: "0 0 0 12px" }}>
                      {t("Buy Tickets")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buy Diamond Modal */}
      <div className="modal text-center" id="diamondPassModal" aria-labelledby="diamondPassModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <h5>{t("Buy-Diamonds")}</h5>
              <div className="card-wrapper">
                {[
                  { diamonds: 100, price: 1.99 },
                  { diamonds: 300, price: 4.99 },
                  { diamonds: 650, price: 9.99 },
                  { diamonds: 1000, price: 14.99 },
                  { diamonds: 2000, price: 29.99 },
                  { diamonds: 5000, price: 69.99 },
                ].map((pack, index) => (
                  <div key={index} className={`card`}>
                    <div className="d-flex justify-content-center">
                      <img src="/images/icons/bonas.png" alt="" />
                    </div>
                    <p className="text-center">
                      {pack.diamonds} {t("Diamonds")} = ${pack.price}
                    </p>
                    <button type="button" className="btn btn-success mt-2" onClick={() => handleProceed(pack)}>
                      {t("Buy")}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Buy Game Pass Modal */}
            <div className="modal text-center" id="gamePassModal" aria-labelledby="gamePassModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  <div className="modal-body w-100">
                    <h5>{t("Game-Pass")}</h5>
                    <div className="card-wrapper">
                      <h1>Comming Soon</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Tickets Modal */}
            <div className="modal text-center" id="buyTicketsModal" aria-labelledby="buyTicketsModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  <div className="modal-body w-100">
                    <h5>{t("Game-Pass")}</h5>
                    <div className="card-wrapper">
                      <h1>Comming Soon</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
