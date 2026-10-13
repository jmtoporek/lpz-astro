import { useEffect } from "react";
import xss from "xss";
import "./LaunchSiteDetailsModal.css";

const descriptionSanitizerOptions = {
  whiteList: {
    a: ["href", "title"],
    br: [],
    em: [],
    i: [],
    li: [],
    ol: [],
    p: [],
    strong: [],
    ul: [],
  },
  stripIgnoreTag: true,
  stripIgnoreTagBody: ["script", "style"],
};

export default function LaunchSiteDetailsModal({ launchSite, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const descriptionHtml = xss(
    launchSite.description,
    descriptionSanitizerOptions,
  );

  return (
    <div
      className="launchsite-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="launchsite-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="launchsite-modal-title"
      >
        <header className="launchsite-modal-header">
          <h2 className="h4 mb-0" id="launchsite-modal-title">
            {launchSite.name}
          </h2>
          <button
            type="button"
            className="btn-close"
            aria-label="Close details"
            onClick={onClose}
            autoFocus
          />
        </header>

        <div className="launchsite-modal-body">
          {launchSite.tagline && <p className="lead">{launchSite.tagline}</p>}

          <dl className="row mb-0">
            <dt className="col-sm-3">Status:</dt>
            <dd className="col-sm-9">{launchSite.status}</dd>

            <dt className="col-sm-3">Submission url:</dt>
            <dd className="col-sm-9">
              {launchSite.submit_url ? (
                <a
                  href={launchSite.submit_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {launchSite.submit_url}
                </a>
              ) : (
                "No submission link available"
              )}
            </dd>

            <dt className="col-sm-3">Last updated:</dt>
            <dd className="col-sm-9">{launchSite.updated_at.slice(0, 10)}</dd>

            <dt className="col-sm-3">Verified:</dt>
            <dd className="col-sm-9">{launchSite.verified ? "Yes" : "No"}</dd>

            <dt className="col-sm-3">Paid only:</dt>
            <dd className="col-sm-9">{launchSite.paid_only ? "Yes" : "No"}</dd>

            <dt className="col-sm-3">Description:</dt>
            <dd className="col-sm-9">
              {launchSite.description && (
                <div
                  className="my-2"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              )}
            </dd>
          </dl>

          {launchSite.editor_notes && (
            <section className="mt-3">
              <h3 className="h6">Editor notes</h3>
              <p className="mb-0">{launchSite.editor_notes}</p>
            </section>
          )}
        </div>

        <footer className="launchsite-modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <a
            className="btn btn-primary"
            href={launchSite.site_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </a>
        </footer>
      </section>
    </div>
  );
}
