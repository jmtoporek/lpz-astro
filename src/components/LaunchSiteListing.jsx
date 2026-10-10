import { useState } from "react";
import LaunchSiteList from "../assets/launchsites_20261009.json";
import LaunchSiteCard from "./LaunchSiteCard.jsx";
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
              <LaunchSiteCard
                key={launchSite.id}
                launchSite={launchSite}
                onViewDetails={() => setSelectedLaunchSite(launchSite)}
              />
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
