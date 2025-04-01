import totalCardsLogo from "../../assets/icons/credit-card-check.png"
import totalPersCLogo from "../../assets/icons/credit-card-edit.png"
import todaysRevLogo from "../../assets/icons/bank-note-01.png"
import pendingRequestsLogo from "../../assets/icons/hourglass-03.png"

export const fetchCardData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Total Active Cards",
            value: "8",
            trend: "+2%",
            trendIcon: "bx bx-trending-up",
            timeFrame: "this Month",
            logo: totalCardsLogo,
          },
          {
            id: 2,
            title: "Total Personalized Cards",
            value: "8",
            trend: "+1.5%",
            trendIcon: "bx bx-trending-up",
            timeFrame: "this Month",
            logo: totalPersCLogo,
          },
          {
            id: 3,
            title: "Today's Revenue",
            value: "₦10,375",
            trend: "+5%",
            trendIcon: "bx bx-trending-up",
            timeFrame: "vs yesterday",
            logo: todaysRevLogo,
          },
          {
            id: 4,
            title: "Pending Requests",
            value: "3",
            alert: "Requires Attention",
            alertIcon: "bx bx-info-circle",
            alertColor: "#E78020",
            logo: pendingRequestsLogo,
          },
        ]);
      }, 3000); // Increased timeout to 3 seconds
    });
  };