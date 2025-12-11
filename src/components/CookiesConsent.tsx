import { Scissors } from "lucide-react";

const CookiesConsent = () => {
  return (
    <div id="cookie-consent" className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie consent">
        <div className="cookie-consent__content">
            <p className="cookie-consent__text">
                We use cookies to improve your experience, analyse site usage, and deliver personalized content. By clicking "Agree to all cookies" you accept the use of all cookies. You can also choose to reject non-essential cookies.
            </p>
            <div className="cookie-consent__buttons" role="group" aria-label="Cookie actions">
                <button id="cookie-reject" className="btn btn--ghost" type="button">Reject</button>
                <button id="cookie-agree" className="btn btn--primary" type="button">Agree to all cookies</button>
            </div>
        </div>
    </div>
  );
};

export default CookiesConsent;
