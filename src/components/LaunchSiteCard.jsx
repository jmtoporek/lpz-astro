export default function LaunchSiteCard({ launchSite, onViewDetails }) {
  return (
    <div className="launchsite-flex-item text-center">
      <div className="my-2">
        {launchSite.logo_url ? (
          <div className="logo-for-card text-center">
            <img src={launchSite.logo_url} alt={`${launchSite.name} Logo`} />
          </div>
        ) : (
          <div className="logo-placeholder text-center">
            {launchSite.name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <div className="my-2">
        <strong className="text-center">{launchSite.name}</strong>
      </div>

      {launchSite.inactive ? (
        <div className="badge rounded-pill text-bg-warning">not active</div>
      ) : launchSite.editor_recommended ? (
        <div className="badge rounded-pill bg-success-subtle text-success-emphasis border-success-subtle">
          RECOMMENDED
        </div>
      ) : launchSite.paid_only ? (
        <div className="badge rounded-pill text-bg-warning">paid only</div>
      ) : null}

      <div className="my-2 tagline-container">{launchSite.tagline}</div>

      {/*
      {launchSite.description && (
        <div
          className="my-2"
          dangerouslySetInnerHTML={{ __html: launchSite.description }}
        />
      )}
      */}

      <div className="my-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary m-1"
          href={launchSite.site_url}
        >
          View Site
        </a>
        <button
          type="button"
          className="btn btn-outline-secondary m-1"
          onClick={onViewDetails}
        >
          View Details
        </button>
      </div>

      <div className="last-updated-tag my-2">
        last edited on <strong>{launchSite.updated_at.slice(0, 10)}</strong>
      </div>
    </div>
  );
}
