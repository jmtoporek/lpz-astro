import { useState } from "react";
import LaunchSiteList from "../assets/launchsites_20261009.json";
import LaunchSiteDetailsModal from "./LaunchSiteDetailsModal.jsx";

export default function LaunchSiteListing() {
  const [selectedLaunchSite, setSelectedLaunchSite] = useState(null);

  return (
    <div className="container">
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-highlight">{LaunchSiteList.length}</div>
          <div className="stat-description">sites</div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="launchsites-flexbox py-3">
            {LaunchSiteList.map((launchSite) => (
              <div
                className="launchsite-flex-item text-center"
                key={launchSite.id}
              >
                <div className="my-2">
                  {launchSite.logo_url ? (
                    <div className="logo-for-card text-center">
                      <img
                        src={launchSite.logo_url}
                        alt={`${launchSite.name} Logo`}
                      />
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

                <div className="my-2 tagline-container">
                  {launchSite.tagline}
                </div>

                {launchSite.editor_recommended && (
                  <div className="my-2">
                    <div className="badge rounded-pill bg-success-subtle text-success-emphasis border-success-subtle">
                      RECOMMENDED
                    </div>
                  </div>
                )}

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
                    onClick={() => setSelectedLaunchSite(launchSite)}
                  >
                    View Details
                  </button>
                </div>

                <div className="last-updated-tag my-2">
                  last edited on{" "}
                  <strong>{launchSite.updated_at.slice(0, 10)}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedLaunchSite && (
        <LaunchSiteDetailsModal
          launchSite={selectedLaunchSite}
          onClose={() => setSelectedLaunchSite(null)}
        />
      )}
    </div>
  );
}
